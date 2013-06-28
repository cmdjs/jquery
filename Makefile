install:
	npm install

build:
	grunt build --gruntfile color/Gruntfile.js
	grunt build --gruntfile jquery/Gruntfile.js
	grunt build --gruntfile tablesorter/Gruntfile.js
	grunt build --gruntfile datatables/Gruntfile.js
	grunt build --gruntfile easing/Gruntfile.js
