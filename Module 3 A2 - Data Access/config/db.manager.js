const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);

async function getSalesProducts(){
    console.log('Connecting to SQL....Cloud server');
    let dbContext = await sql.connect(dbConnection);
    console.log('Database connection was Sucessful');

    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP (20)
        productId,
        name,
        productNumber,
        color,
        listPrice
    FROM
        salesLT.product
    `);
    console.log('Returned SQL results');
    return results;
}

async function getSalesCustomers(){
    console.log('Connecting to SQL....Cloud server');
    let dbContext = await sql.connect(dbConnection);
    console.log('Database connection was Sucessful');

    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP (20)
        customerID,
        title,
        firstName,
        lastName
    FROM
        salesLT.customer
    `);
    console.log('Returned SQL results');
    return results;
}

module.exports = {getSalesProducts: getSalesProducts};

module.exports = {getSalesCustomers: getSalesCustomers};