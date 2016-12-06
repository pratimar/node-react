var express = require('express');
var app = express();
var routes = require('./routes/index');

app.use('/', routes); //When there is request on client with '/', route to index.js
app.set('port', process.env.PORT || 9080); //Listen on which port

//view engine set up
app.set('views', __dirname + '/views'); //where to find views; dirname is project directory
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Creating a server object, which listens on port
var server = app.listen(app.get('port'), function() {
	console.log('App started');
});

