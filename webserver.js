var http = require('http');
var path = require('path');
var fs = require('fs');
 
http.createServer(requestHandler).listen(3000);

function requestHandler(req, res) {
	var	fileName = path.basename(req.url) || 'index.html';
	var rootFolder = __dirname + '/';
	sendFile(rootFolder + fileName, res);
}

function sendFile(filePath, res) {
	fs.exists(filePath, function(exists) {
		if (exists) {
			fs.readFile(filePath, function(err, contents){
				if(!err)
					res.end(contents);
				else
        			sendCode(res, 500, 'Internal error occurred.');
			});
		}	
		else {
			sendCode(res, 404, 'File not found');	
		}
	});	
}

function sendCode(res, code, msg) {
	res.writeHead(code, msg);
	res.end();
}
