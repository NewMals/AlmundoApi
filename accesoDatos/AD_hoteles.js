var admin = require('../Settings/ConexionFireBase')
var db = admin.database();
var ref = db.ref();

var data;


function getBase64Image(img) {
    let fileReader = new FileReader();
    fileReader.addEventListener('load', function(evt){
      callback(fileReader.result);
    });
    fileReader.readAsDataURL(img);
  }
  

function ListHoteles(req, res) {
    ref.once("value", function (snapshot) {
        data = snapshot.val();
        return res.status(200).send({
            data
        });
    });
}

function BuscarHotelFiltros(req, res) {
    let filtros = req.body;
    let Lista;

    ref.once("value", function (snapshot) {
        data = snapshot.val();

        if (filtros.estrellas.indexOf(0) != 0 || filtros.nombre !== "") {
            Lista = data.filter(i =>
                ((i.name.toLowerCase().indexOf(filtros.nombre.toLowerCase()) !== -1) && filtros.nombre !== "")
                || (filtros.estrellas.find(start => start === i.stars))
            );
        } else {
            Lista = data;
        }
        return res.status(200).send({
            Lista
        });
    });
}


function BuscarHotelId(req, res) {
    let valor = req.params.id;
    let Lista;

    ref.once("value", function (snapshot) {
        data = snapshot.val();
        Lista = data.filter(i =>
            i.id === valor
        );
        return res.status(200).send({
            Lista
        });
    });
}

function CrearActualizarHotel(req, res) {

    let hotel = req.body;

    // let hotel = {
    //     id: "1",
    //     name: "Manantial",
    //     starts: 3,
    //     price: 10000,
    //     image: "",
    //     amenities: ["safety-box"]
    // }

    ref.once("value", function (snapshot) {
        data = snapshot.val();
        let estado = "";
        let existeHotel = data.findIndex(i => i.id === hotel.id);

        if (existeHotel >= 0) {
            data[existeHotel] = hotel;
            estado = "Actualizado";
        } else {
            data.push(hotel);
            estado = "creado";
        }

        ref.set(data);
        return res.status(200).send({
            hotel,
            estado
        });

    });

}

function EliminarHotel(req, res) {
    let idHotel = req.params.id;

    ref.once("value", function (snapshot) {
        data = snapshot.val();
        let eliminarIndex = data.findIndex(i => i.id === idHotel);
        let estado;
        if (eliminarIndex >= 0) {
            data.splice(data.findIndex(i => i.id === idHotel), 1);
            ref.set(data);
            estado = "Hotel eliminado";
        }else {
            estado = "el id ingresado no corresponde a un hotel";
        }
        return res.status(200).send({
            estado
        });
    });
}

module.exports = {
    ListHoteles,
    BuscarHotelFiltros,
    BuscarHotelId,
    CrearActualizarHotel,
    EliminarHotel
};