/**
 * Created by efisch17 on 2/16/17.
 */


var async = require('async');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var processFormBody = multer({storage: multer.memoryStorage()}).single('uploadedphoto');
var fs = require("fs");

var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname));
app.use(session({secret: 'secretKey', resave: false, saveUninitialized: false}));
app.use(bodyParser.json());
app.use(cookieParser());



app.get('/about', function (request, response) {
    response.end("yay");
});

app.get('/edition/intro', function (request, response) {
    response.end("yay");
});


var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    var port = server.address().port;
    console.log('Listening at ' + port + ' exporting the directory ' + __dirname);
});