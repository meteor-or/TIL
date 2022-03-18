//1998년생인 내가 태국에서는 2541년생?!
const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

console.log(A - 543)