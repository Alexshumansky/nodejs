const path = require('path');
const fs = require('fs');
const csv = require('csvtojson');

const csvFilePath = path.join(__dirname, 'csv', 'nodejs-hw1-ex1.csv');
const outpuFilePath = path.join(__dirname, 'csv', 'output.txt')

let readableStream = fs.createReadStream(csvFilePath, {encoding: 'utf8'});

let writeableStream = fs.createWriteStream(outpuFilePath, {encoding: 'utf8'});

readableStream
    .pipe(csv())
    .pipe(writeableStream);




