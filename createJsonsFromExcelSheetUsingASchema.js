var fs = require('fs');

var schemaFileName = "schema.txt";
var excelFileName = "excel.txt";

var schemaData = fs.readFileSync(schemaFileName, 'utf8').split("\r\n");
var excelData = fs.readFileSync(excelFileName, 'utf8').split("\r\n");


console.log(excelData);

var schemaColumnToJsonPathMap = {};

//create schema
for(var i=0; i<schemaData.length; i++){
	var parts = schemaData[i].split("\t");
	var col=parts[0];
	var jsonPath = parts[1];
	schemaColumnToJsonPathMap[col] = jsonPath;
}


//create json from each row and save it to a file
for(var k=0; k<excelData.length; k++){
	var row = excelData[k];
	var columnsOfARow = row.split("\t");
	
	//var json = createJsonForRowDataUsingSchema(columnsOfARow, schemaColumnToJsonPathMap);
	//saveJsonToFile(k+".json", json);
	
	var json= JSON.parse("{}", 'utf8');//new Object(); //{};
	for(var i=0; i<columnsOfARow.length; i++){
		
		var path = schemaColumnToJsonPathMap[i];
		if(path == null) continue;
		
		var pathParts = path.split(".");
		
		var obj=json;
		//console.log(typeof obj);
		for(var j=0;j<pathParts.length;j++){
			var pathPart = pathParts[i];
			try{
				if(null == obj[pathPart]){
					obj[pathPart] == {};
				}
			}catch(err){
				obj.pathPart == {};
			}
			obj = obj[pathPart];			
		}
		
		obj=columnsOfARow[i];
		
	}
	fs.writeFile(
		k+".json",
		JSON.stringify(json),
		'utf8',
		errorHandler
	);

}

var createJsonForRowDataUsingSchema = function(columnsOfARow, schemaColumnToJsonPathMap){
	
	var json = {};
	for(var i=0; i<columnsOfARow.length; i++){
		
		var path = schemaColumnToJsonPathMap[i];
		if(path == null) continue;
		
		var pathParts = path.split(".");
		
		var obj=json;
		for(var j=0;j<pathParts.length;j++){
			
			if(obj[pathParts[i]] ==null){
				obj[pathParts[i]] == {};
			}
			obj = obj[pathParts[i]];			
		}
		
		obj=columnsOfARow[i];
		
	}
	
	return json;
	
}

var saveJsonToFile = function(fileName, json){
	fs.writeFile(
		fileName,
		JSON.stringify(json),
		'utf8',
		errorHandler
	);
}

var errorHandler = function (err) { console.log(err ? 'Error :'+err : 'successfully completed') };


