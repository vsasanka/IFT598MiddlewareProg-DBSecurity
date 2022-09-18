const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate');


/// Read data from file
// Template

 /////////////////////////////////
// Template
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    'utf-8'
  );

 const dataObj = 
    [
        {
          "id": 0,
          "customerName": "Sasanka Vepakomma",
          "phoneNumber": "+1 4701231234",
          "address": "1215 E Lemon St",
          "loanAmount": "250",
          "interest": "6",
          "loanTermYears": "4",
          "loanType":"Education",
          "description":"Nice guy"
        },
        {
          "id": 1,
          "customerName": "Rohan Dwivedi",
          "phoneNumber": "+1 4701231234",
          "address": "1216 E Lemon St",
          "loanAmount": "300",
          "interest": "7",
          "loanTermYears": "6",
          "loanType":"Education",
          "description":"Geeky guy"
        },
        {
          "id": 2,
          "customerName": "Varun Mukhundan",
          "phoneNumber": "+1 4701231234",
          "address": "1217 E Lemon St",
          "loanAmount": "800",
          "interest": "9",
          "loanTermYears": "8",
          "loanType":"Home",
          "description":"Sarcastic guy"
        },
        {
          "id": 3,
          "customerName": "Sairam Tabibu",
          "phoneNumber": "+1 4701231234",
          "address": "1218 E Lemon St",
          "loanAmount": "1200",
          "interest": "8.5",
          "loanTermYears": "6",
          "loanType":"Real estate",
          "description":"Funny guy"
        },
        {
          "id": 4,
          "customerName": "Mugdha Abhyankar",
          "phoneNumber": "+1 4701231234",
          "address": "1219 E Lemon St",
          "loanAmount": "200",
          "interest": "6.5",
          "loanTermYears": "4",
          "loanType":"Home",
          "description":"Mother India"
      }
    ]


 /*
 PV = (PMT/i)(1 - 1/(1+i)^n)
 */

var calculateLoanAmountPV = (pmt, i, n) => {
    return (pmt/i)*(1 - 1/(1+i)**n);
}

var addLoanAmountField = (dataObj) => {
    dataObj.forEach( (element) => {
        let pmt = Number(element.loanAmount);
        let n = Number(element.loanTermYears)*12;
        let i = Number(element.interest)/(100*12);
        element.computedField = calculateLoanAmountPV(pmt, i, n) // (pmt/i)*(1 - 1/(1+i)**n);
    });
}

var outputDatabaseInConsole = (dataObj) => {
    dataObj.forEach( (element) => {
        console.log("<-------------------------->")
        console.log(`Customer ID: ${element.id}`);
        console.log(`Customer name: ${element.customerName}`);
        console.log(`Customer Phone Number: ${element.phoneNumber}`);
        console.log(`Customer address: ${element.address}`);

        console.log(`Customer Loan Amount: ${element.loanAmount}`);
        console.log(`Customer Interest: ${element.interest}`);
        console.log(`Customer Loan Term Years: ${element.loanTermYears}`);

        console.log(`Customer Loan Type: ${element.loanType}`);
        console.log(`Customer Description: ${element.description}`);

        console.log(`Customer Calculated Loan Amount: ${element.computedField}`);
    });
    console.log(`End of List`);
}

////////////////////////////////
//Create Server
// const server = httpServer.createServer(function (req, res) {// call back function
const server = httpServer.createServer( (req, res) =>{// call back function

    // const urlParameter = url.parse(req.url, true);
    // console.log(JSON.stringify(urlParameter.query));// convert to String
    // console.log(JSON.stringify(urlParameter.pathname));// convert to String
    const {query,pathname} = url.parse(req.url, true); // object distructors
    if(query.id){// if there is query parameter named id read as string
        // Courses page
        if (pathname === '/' || pathname.toLowerCase() === '/courses') {
            res.writeHead(200, {// Every thing ran successfully
                'Content-type': 'text/html'
            });

            addLoanAmountField(dataObj);
            outputDatabaseInConsole(dataObj);

            const course = dataObj[Number(query.id)];// convert string to numeric value
            const strCourseName = JSON.stringify(course);
            const courseHTML = replaceTemplate(templateHTMLCourse, course);// function that will replace the course values in the HTML
            //   res.end(` We received our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
            //   ${JSON.stringify(course)}// convert object back to string
            //   `)
            res.end(courseHTML);
        }
    }
    else{
            res.writeHead(404, {// Server did not find what you were looking for
                'Content-type': 'text/html'
            });
            addLoanAmountField(dataObj);
            outputDatabaseInConsole(dataObj);

            res.end(`resource not found`)
        }
    });

//Start Listening to requests
server.listen(8000, 'localhost', ()=> {
    console.log('Listening to requests on port 8000');
});

