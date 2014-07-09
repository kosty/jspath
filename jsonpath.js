/*jslint node: true, indent: 4, white: false, eqeq: false, vars: false, stupid:true, nomen: true,plusplus: true */
"use strict";

var jsonPath = require('JSONPath');

var jsonData = "";
var path = "";

if (process.argv.length < 2){
	console.error("Usage: node jsonpath.js <jsonPath>");
	return;
}

if (process.argv.length == 2){
	console.error("Usage: "+process.argv[0]+" "+process.argv[1]+" <jsonPath>");
	return;
}

process.argv.forEach(function (val, index, array) {
  path = val;
});

process.stdin.on('data', function(chunk) {
    jsonData += chunk;
});

process.stdin.on('end', function() {
	var obj = JSON.parse(jsonData);
    var a = jsonPath.eval(obj, path);
    console.log(a);
});