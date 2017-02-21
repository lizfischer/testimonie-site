/**
 * Created by efisch17 on 2/16/17.
 */

var Request = require('request');
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

app.get('/edition/read/:pg', function (request, response) {
    var pg = request.params.pg;
    var transcript = 'http://www.lizmfischer.com/annotations/list/transcript-'+pg+'.json';
    var modern = 'http://www.lizmfischer.com/annotations/list/modern-'+pg+'.json';

    //var url = 'http://dms-data.stanford.edu/data/manifests/BnF/jr903ng8662/list/text-1r.json';
    Request(transcript, function (error, response2, body) {
        var list = {};
        if (!error && response2.statusCode==200){
            list.transcript=JSON.parse(body)["resources"];
            Request(modern, function (error, response3, body) {
                if (!error && response3.statusCode==200){
                    list.modern = JSON.parse(body)["resources"];
                    console.log(list);
                    response.end(JSON.stringify(list));
                } else console.log(error)
            });
        } else console.log(error)
    })

});

var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    var port = server.address().port;
    console.log('Listening at ' + port + ' exporting the directory ' + __dirname);
});