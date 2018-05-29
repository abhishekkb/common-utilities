//required modules
var fs = require('fs');
var path = require('path');
var https = require('https');
var request = require('request');


var mainDir = '\\dev\\workspace\\postpaid-mocks\\products';
var baseUri = 'https://tmobileqat-qat12-facade.apigee.net';
var uriDirPath = mainDir+'\\uris';
var requestDirPath = mainDir+'\\requests';
var uriFileNames=[];
var items = [];



uriFileNames = fs.readdirSync(uriDirPath);

for(var uriFileName in uriFileNames){
    var uriContents = fs.readFileSync(uriDirPath+'\\'+uriFileName).toString().split(' ');
    var requestType = uriContents[0];
    var uri = baseUri+uriContents[1];
    
    var requestFileName = uriFileName.slice(0,-8)+'request.json';
    
    var requestBody = JSON.parse(fs.readFileSync(requestDirPath+'\\'+requestFileName, 'utf8'));
    
    //send request
        //if err 
            //log file name into a separate file
        //else
            //read response
            //optional ----
                //compare the response here with corresponding response files in responses folder
    
    // add {name, request, response} into items[]

    //save items into a file
    
}

    



