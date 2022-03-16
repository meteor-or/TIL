// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)첫째 줄에 A-B를 출력한다..

const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

// 테스트 케이스 입출력 받아오기

console.log(A-B);