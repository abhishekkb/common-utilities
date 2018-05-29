var fs = require('fs');

var aemErrorsFileName = 'aem-errors.json';
var errorCodesFileName = 'create-cart-errors.txt';

var errorCodesFoundInAemFileName = 'errors-found-' + errorCodesFileName;
var errorCodesNotFoundInAemFileName = 'errors-not-found-' + errorCodesFileName;

var aemErrors = fs.readFileSync(aemErrorsFileName, 'utf8');

var errorCodesStr = fs.readFileSync(errorCodesFileName, 'utf8');

var errorCodesList = errorCodesStr.split("\r\n");

var found = [];
var notFound = [];

// search errors in aem configured errors
if(Array.isArray(errorCodesList)){ 
    for(var i=0 ; i < errorCodesList.length ; i++){
        var code = errorCodesList[i];
        if(aemErrors.includes(code)){
            found.push(code);
        }else{
            notFound.push(code);
        }
    }
}

//console.log(found);
//console.log(notFound);
//
//console.log(errorCodesList.length);
//console.log(found.length);
//console.log(notFound.length);

var errorHandler = function (err) { console.log(err ? 'Error :'+err : 'ok') };

//save found errors to file
fs.writeFile(
     errorCodesFoundInAemFileName,
     found.join(", "),
     errorHandler
);

//save not-found errors to file
fs.writeFile(
     errorCodesNotFoundInAemFileName,
     notFound.join(', '),
     errorHandler
);