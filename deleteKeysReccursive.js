var fs = require('fs');
var json = JSON.parse(fs.readFileSync("Handsets-Listing-Postpaid-98005-response.json"),'utf8');
var keys = ['withoutService', 'withService', 'contractTerm'];

var deleteKeys = function(object, keys){
	for(var property in object) {
		if(keys.indexOf(property)>=0){
			delete object[property];
		} else {
			if(object[property] !== null && typeof object[property] == 'object'){
				deleteKeys(object[property], keys);
			}
		}
	}
}

deleteKeys(json, keys);
const content = JSON.stringify(json, null, '\t');

fs.writeFile("abc.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 