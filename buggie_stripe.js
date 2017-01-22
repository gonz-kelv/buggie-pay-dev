
var express = require('express'), https = require('https'), path  = require('path');


var app = express();
//   , privateKey  = fs.readFileSync('sslcert/server.key', 'utf8')
//   , certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

// test key
var stripe = require("stripe")("sk_test_aTPN6A7tnLtrGnP12DaufJ2Z");

/* 
may need this to serve
app.use('/static', express.static(path.join(process.cwd(), 'bower_components')))
or
app.use('/static', express.static(path.join(__dirname, 'bower_components')))
*/

app.use('/static', express.static(path.join(__dirname, 'bower_components')));
app.use('/static', express.static(path.join(__dirname, 'images')));
app.use('/static', express.static(path.join(__dirname, 'src')));

app.use(express.staticProvider(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render(__dirname + '/index.html');
});

var server = app.listen(8081, function (){
    var host = server.address().address;
    var port = server.address().port;

    console.log("working");

})
