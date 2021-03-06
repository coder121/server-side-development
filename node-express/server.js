var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');
var hostname = 'localhost';
var port = 8080;
 
var app = express();
 
app.use(bodyParser.json());
app.use(morgan('dev'));
 
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
 
//app.use(express.static(__dirname + '/public'));
 
app.use(function(req, res, next) {  
    res.status = 404;  
    res.end("Error: Not supported");
});
 
app.listen(port, hostname, function(){
    console.log('Server running at http://'+hostname + ':' + port +'/');
});