/*
	wc2.js - 計算檔案的行數

	C> npm install byline

	c> node wc2.js <filename>
 */
var fs = require('fs');
var byline = require('byline');

var arguments = process.argv.slice(2);

/* ... check arguments ... */

var stream = fs.createReadStream(arguments[0], { encoding: 'utf8'});
var linestream = byline(stream, {keepEmptyLines: true});
var lines = 0;
linestream.on('data', function(line) {
	lines++;
});

linestream.on('end', function() {
	console.info('Total line count:' + lines);
});

