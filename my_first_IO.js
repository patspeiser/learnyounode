var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]).toString();
console.log(buff.split('\n').length -1);
