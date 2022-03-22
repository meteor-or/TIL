const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

let int = 5;
int = String(int).padStart(2, '0')
console.log(int)

//string에서만 작동한다.