var fs = require('fs');
var dir = fs.readdir(process.argv[2], function(error, files){
	files.forEach( function(element){
		var reg = new RegExp('.'+process.argv[3])
		if (element.match(reg)){
			console.log(element);
		}
	});
});
