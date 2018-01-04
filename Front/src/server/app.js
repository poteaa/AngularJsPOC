var path = require('path');
var express = require('express');
var app = express();

// console.log(path.join(__dirname, '../client/core'));

// app.use('/src/client/app', express.static("C:/Users/diealvar1/Documents/Study/Goals/src/client/app"));
// app.use('/src/client/app/dashboard', express.static("C:/Users/diealvar1/Documents/Study/Goals/src/client/app/dashboard"));
// app.use('/src/client/core', express.static("C:/Users/diealvar1/Documents/Study/Goals/src/client/core"));

app.use('/', express.static("C:/Users/diealvar1/Documents/Study/AngularJS/Goals/Front"));

app.get('/', function(req, resp) {
	console.log(__dirname);
	resp.sendFile('index.html', {root: path.join(__dirname, '../client')});
});

app.get('/users', function(req, resp) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello world from the server')
});

app.listen(1337, function() {
	console.log('Listening at port 1337');
});

function engine(request, response) {
	console.log(response);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello world from the server')
}