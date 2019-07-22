// jshint esversion:6
/* This script generates mock datafor local development,
THis way you dont have to point to an actual API,
But you can enjoy realistic,but randomized data,
and rapd page loads due to local,static data
*/

/* eslint-disable no-console */
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
import faker from "faker";

jsf.extend("faker", function() {
return faker;
});

var outputFile = './src/api/db.json';

//const json = JSON.stringify(jsf(schema));

jsf.resolve(schema).then(function(result) {
fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err){
if (err) {
return (console.log(r(err)));
} else {
console.log("Mock Data Generated Here: ${outputFile}");
}
});
});