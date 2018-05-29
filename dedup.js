var fs = require('fs');

var duplicateFileName = "duplicateListFile.txt";
var deduplicatedFileName = "deduplicatedFile.txt";

var duplicateFileContent = fs.readFileSync(duplicateFileName, 'utf8');

var duplicateFileList = duplicateFileContent.split("\r\n");

var deduplicateSet = new Set(duplicateFileList);

var deduplicatedList = Array.from(deduplicateSet);

var errorHandler = function (err) { console.log(err ? 'Error :'+err : 'successfully completed') };

//save results to file
fs.writeFile(
     deduplicatedFileName,
     deduplicatedList.join("\r\n"),
     errorHandler
);

