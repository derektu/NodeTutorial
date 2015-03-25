/*
	class WordCount

 */
var fs = require('fs');
var byline = require('byline');

var WordCount = function() {
	var self = this;

	// cb(err, count)
	// 
	this.count = function(fileName, cb) {
		var stream = fs.createReadStream(fileName, { encoding: 'utf8'});
		stream.on('error', function(err) {
			cb(err);
		});

		var linestream = byline(stream, {keepEmptyLines: true});
		var lines = 0;
		linestream.on('data', function(line) {
			lines++;
		});

		linestream.on('end', function() {
			cb(null, lines);
		});
	}
}

module.exports = WordCount;
