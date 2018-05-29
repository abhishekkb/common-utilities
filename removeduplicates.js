var fs = require('fs');


var screenNamesFileName = "screens.txt";
var screenNamesSetFileName = 'screens-set.txt";


var screenNameStr = fs.readFileSync(screenNamesFileName, 'utf8');

var screensList = screenNameStr.split("\r\n");


// search errors in aem configured errors
if(Array.isArray(screensList)){ 
    for(var i=0 ; i < screensList.length ; i++){
        var screenList = screensList[i];
        screenList2
    }
}


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