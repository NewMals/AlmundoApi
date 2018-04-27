var data  = require('../data/data.json');

function ListHoteles(req,res) {
    let valor = req.params;
    return res.status(200).send({
        data
    });
}

function idHotel(req,res) {
    let valor = req.params;
    return res.status(200).send({
        valor
    });
}

module.exports = {
    ListHoteles,
    idHotel
};