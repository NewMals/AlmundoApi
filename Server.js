var express = require('express'); 

var controlador = require('./Controladores/ControllerHoteles')
var server = express();
var port = process.env.port || 5000;

const bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());


function cors(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

server.use('/', cors);

server.use('/', controlador);

server.listen(port, () => {
    console.log('servidor corriendo', port);
});



