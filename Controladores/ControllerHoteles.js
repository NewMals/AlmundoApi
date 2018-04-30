var express = require('express'); 
var _ADHoteles = require('../accesoDatos/AD_hoteles');
var server = express();

const endPoint = '/Listado';

server.get(endPoint, _ADHoteles.ListHoteles);
server.get(endPoint + '/:id' , _ADHoteles.BuscarHotelId)
server.post(endPoint, _ADHoteles.BuscarHotelFiltros);
server.post(endPoint, _ADHoteles.CrearActualizarHotel);
server.put(endPoint, _ADHoteles.CrearActualizarHotel);
server.delete(endPoint +'/:id', _ADHoteles.EliminarHotel);

module.exports =  server;