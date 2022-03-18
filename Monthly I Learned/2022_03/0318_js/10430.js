//네 개의 계산식을 계산하는 문제. 이 문제를 푼 다음에는 직접 입력을 만들어서 넣어 봅시다. 어떤 사실을 관찰할 수 있나요?

let fs = require('fs');
let inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
const [a,b,c] = inputData

console.log((a+b)%c);
console.log( ((a%c)+(b%c))%c );
console.log( (a*b%c) );
console.log( ((a%c)*(b%c))%c );