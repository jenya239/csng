export const to_snake_case = ( string ) => {
	return (string || '')
		.replace(/([A-Z])/g, (match, group) => `_${group.toLowerCase()}`)
		.replace(/^_/, '')
} 