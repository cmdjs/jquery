install:
	npm install

build:
	grunt build --gruntfile color/Gruntfile.js
	grunt build --gruntfile jquery/Gruntfile.js
	grunt build --gruntfile tablesorter/Gruntfile.js
