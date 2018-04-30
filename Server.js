var express = require('express'); 

var controlador = require('./Controladores/ControllerHoteles')
var server = express();
const PORT = process.env.PORT || 9000;

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

server.get('/' ,function saludo(req, res){
    let welcome = 

    "<!DOCTYPE html><html lang='en' dir='ltr'><body><h1>Bienvenido al API de almundo</h1><br><p>Para visualizar los hoteles adicione al final de la url el siguiente endpoint '/Listado'</p></body></html>"
    
    res.status(200).send(welcome);
});

server.listen(PORT, () => {
    console.log('servidor corriendo', PORT);
});



