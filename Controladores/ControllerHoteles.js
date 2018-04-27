var express = require('express'); 
var _ADHoteles = require('../accesoDatos/AD_hoteles');

var server = express();

server.get('/Listado', _ADHoteles.ListHoteles);
server.get('/Listado/:id', _ADHoteles.idHotel);

module.exports =  server;