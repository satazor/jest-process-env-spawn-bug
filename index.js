const path = require('path');
const spawnSync = require('child_process').spawnSync;

const result1 = spawnSync('./bin/hello');

console.log('result1', result1.stdout.toString().trim());

process.env.PATH = `${__dirname}/bin` + path.delimiter + process.env.PATH;

const result2 = spawnSync('hello');

console.log('result2', result2.stdout.toString().trim());
