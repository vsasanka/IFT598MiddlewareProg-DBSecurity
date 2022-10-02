const db = require('../config/db.manager');

exports.getAllCustomers = function (req, res) {
    const salesProduct = db.getSalesCustomers().then(results =>{
        console.log(results);
        res.status(200).json({
            status: 'successfull',
            data: results.recordsets[0]
        });
    });
}

exports.getCustomersByID = function(req, res){
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.createNewCustomers = function(req, res){
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.patchCustomersById = function(req, res){
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.deleteCustomersByID = function(req, res){
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.deleteCustomers = function(req, res){
    const {body} = req;
    res.status(200).json({
        status: 'no implemented'
    });
}