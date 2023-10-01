const fs = require('fs');
const path = require('path');
const watch = require('node-watch');

const d = console.log;

d(132323)

const area = document.getElementById('area')
d(area)

const ctx = area.getContext("2d");

let last = Date.now()
let x = 20
let y = 10
let fps = 0
let i = 0
const w = area.width
const h = area.height
let vx0 = 60
let vy0 = 30
let vx = vx0
let vy = vy0
let s = 'H'

const draw = () => {
	i++
	const now = Date.now()
	const dt = ( now - last ) / 1000
	fps = 1 / dt

	if( x < 0 ) vx = vx0
	if( x > w - 100 ) vx = -vx0
	if( y < 0 ) vy = vy0
	if( y > h - 100 ) vy = -vy0

	x += vx * dt
	y += vy * dt
	// d(delta)
	ctx.clearRect(0, 0, w, h)

	ctx.fillStyle = `rgb(${200 - x * 3}, ${x * 4}, 0)`
	ctx.fillRect(x, y, 60 - y / 5, 10 + x / 10)

	ctx.fillStyle = "rgba(0, 0, 200, 0.5)"
	ctx.fillRect(30, 30, 50, 50)

	ctx.font = "12px serif";
	for (let j = 0; j < 30; j++)
		for (let k = 0; k < 20; k++){
			ctx.strokeText(s, j * 12 - x, k * 12 - y);
		}

	window.requestAnimationFrame(draw)
	last = now
	if (i % 100 === 0){
		d(Math.round(fps))
		s = (Math.random() + 1).toString(36).substring(3, 1)
	}
}

draw()