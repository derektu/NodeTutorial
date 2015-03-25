/*
	wc.js - 計算檔案的行數

	c> node wc.js <filename>
 */
var fs = require('fs');
var arguments = process.argv.slice(2);
if (arguments.length < 1) {
	usage();
	process.exit(1);
}

fs.readFile(arguments[0], function(err, data) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	else {
		var lines = parse(data.toString('utf-8'));
		console.info('Total line count:' + lines);
	}
});

function parse(data) {
	return data.split('\n').length;
}

function usage() {
	console.error('Usage:');
	console.error('C> node wc.js <filename>');
}
