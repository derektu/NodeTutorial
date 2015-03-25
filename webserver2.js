"use strict";

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var webFolder = __dirname + '/web';
app.use(express.static(webFolder));
app.use(bodyParser.json());

var router = express.Router();
router.get('/echo', function(req, res) {
	res.json(req.query);
});

router.post('/echo', function(req, res) {
	var data = req.body || {message: 'nothing'};
	res.json(data);
});

// Hook up api router
//
app.use('/api', router);

// global error handling
//
app.use(function(err, req, res, next) {
    res.status(500).send('Internal error occurred.');
});

app.listen(3000);
