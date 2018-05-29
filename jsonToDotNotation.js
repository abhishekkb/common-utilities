var fs = require('fs');
var fileName = 'duplicateFileCheck.request';
var jsonFileName= fileName + '.json';

var dotNotationFileName = jsonFileName + '.to.dot.txt';

var jsonObject = JSON.parse(fs.readFileSync(jsonFileName),'utf8');
var prefix = fileName;
var array=[];

var createDotNotation = function (jsonObject, prefix){
	
	if(Array.isArray(jsonObject)){
		var types = [];
		for(var property in jsonObject) {
			var type = typeof property;
			if(!types.indexOf(type)){
				types.push(type);
			}
		}
		if(!types.indexOf('object')){
			//addAsNewLineToFile(prefix + '[]');
			array.push(prefix + '[]' );
			return;
		}
	}
	
	for(var property in jsonObject) {
		if(jsonObject[property] !== null && typeof jsonObject[property] == 'object'){
			array.push(prefix+'.'+property + "\t"+typeof property);
			createDotNotation(jsonObject[property], prefix+'.'+property);
		}else{
			//addAsNewLineToFile(prefix+'.'+property);
			array.push(prefix+'.'+property + "\t"+typeof property);
		}
	}
}
var errorHandler = function (err) { console.log(err ? 'Error :'+err : 'ok') };
var addAsNewLineToFile = function(contentToWriteTofile){
	fs.appendFileSync(dotNotationFileName, contentToWriteTofile+'\\r\\n', 
					  encoding='utf8',  errorHandler);
}

createDotNotation(jsonObject, prefix);

fs.writeFile(
     dotNotationFileName,
     array.join("\r\n"),
     errorHandler
);
