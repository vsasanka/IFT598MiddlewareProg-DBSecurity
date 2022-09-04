
module.exports = (htmlStr, course)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%NAME%}/g, course.customerName);
    output = output.replace(/{%LOANAMOUNT%}/g, course.loanAmount);
    output = output.replace(/{%FROM%}/g, course.address);
    output = output.replace(/{%INTEREST%}/g, course.interest);
    output = output.replace(/{%COMPUTEDFIELD%}/g, course.computedField);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%LOANTERMYEARS%}/g, course.loanTermYears);
    return output;
}