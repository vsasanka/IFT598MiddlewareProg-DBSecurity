const db = require('../config/db.manager');

exports.getAllSales = function (req, res) {
    const salesProduct = db.getSalesProducts().then(results =>{
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        });
    });
}

exports.getSalesByID = function(req, res){
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.createNewSales = function(req, res){
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.patchSalesById = function(req, res){
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.deleteSalesByID = function(req, res){
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.deleteSales = function(req, res){
    const {body} = req;
    res.status(200).json({
        status: 'no implemented'
    });
}