var data  = require('../data/data.json') ;
var Hotel = require('../Modelos/hotel') ;

function ListHoteles(req,res) {
    return res.status(200).send({
        data
    });
}

function idHotel(req,res) {
    let valor = req.params;
    

    let filtrado = data.filter(i =>
        ( i.name === "Hotel Stefanos")        
    );


    return res.status(200).send({
        filtrado 
    });
}

module.exports = {
    ListHoteles,
    idHotel
};