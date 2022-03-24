//Math.ceil 소스점 이하를 올림한다
//Math.floor 소수점 이하를 버림
//Math.round 소수점 이하를 반올림

Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7

console.log(Math.floor(5.95));//5
console.log(Math.floor(5.05));//5
console.log(Math.floor(5));//5
console.log(Math.floor(-5.05));//-6

console.log(Math.round(0.9)); //-1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); //6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)); //-5 -5 -6