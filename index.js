var express = require('express'); 

var controlador = require('./Controladores/ControllerHoteles')
var server = express();
var port = process.env.port || 9000;

server.use('/', controlador);

server.listen(port, () => {
    console.log('servidor corriendo', port);
});



