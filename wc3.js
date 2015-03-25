/*
	wc3.js - same as wc2, using our own module
 */
var WordCount = require('./wordcount');	// require our own module
var arguments = process.argv.slice(2);

/* ... check arguments ... */

var wc = new WordCount();
wc.count(arguments[0], function(err, count) {
	if (err)
		console.log('Err:' + err);
	else
		console.info('Total line count:' + count);
});

