var fs = require('fs');

var srcFileName = "map-dedup.txt";
var destFileName = "map-deduped.txt";

var srcContent = fs.readFileSync(srcFileName, 'utf8');

var srcList = srcContent.split("\r\n"); // on linux, use "\n"
var destList = [];
var map = {};

for(var i=0 ; i < srcList.length ; i++){
	
	item = srcList[i];
	var parts = item.split("\t");
	code = parts[0];
	value = parts[1];
	if(map[code] == null){
		map[code] = [value];
	}else{
		map[code].push(value);
	}
}


for(var property in map){
	//console.log(property);
	var set = new Set(map[property]);
	var arr = Array.from(set);
	destList.push(property + "\t" + arr.join(', '));
	//destList.push(property + "\t" + "[" + map[property].join(', ') + "]");	
}

var errorHandler = function (err) { console.log(err ? 'Error :'+err : 'successfully completed') };

//save results to file
fs.writeFile(
     destFileName,
     destList.join("\r\n"),
     errorHandler
);

