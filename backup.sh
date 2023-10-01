#!/usr/bin/env bash

cd /home/jenya/workspaces/csng
zip -qr ~/backup/csng_`date +%Y_%m_%d_%H_%M_%S`.zip . ../backup.sh -x \*node_modules\* -x \*git\* -x \*build\* -x \*next\* -x \*tools\* -x \*.vs\* -x \*.idea\*
