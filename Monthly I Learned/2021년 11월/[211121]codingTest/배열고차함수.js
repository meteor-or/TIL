//sort 예제

const twice = function (함수, 값) {
  return 함수(함수(값));
};

const plusOne = function (값) {
  return 값 + 1;
};

console.log(twice(plusOne, 1)); // 3 = 1 + 1 + 1

//twice()는 함수를 인자로 받아서 2번 반복 하기 때문에 HOF이다.

const 두번반복하는함수 = function (외부함수, 값) {
  return 외부함수(외부함수(값));
};

const 제곱하기 = function (값) {
  return 값 * 값;
};

console.log(두번반복하는함수(제곱하기, 2)); //2*2*2*2 = 16
const fruits = ["Banana", "Orange", "Apple"];

// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

let items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);

//for each 예제
console.log(items);

const items2 = ["item1", "item2", "item3"];
const copy = [];

// 이전
for (let i = 0; i < items2.length; i++) {
  copy.push(items2[i]);
}

// 이후
items2.forEach(function (item) {
  copy.push(item);
});

items2.forEach((item) => copy.push(item));
console.log(copy);

const numbers = [1, 3, 5, 7, 9];
let total = 0;

// forEach 메소드는 인수로 전달한 보조 함수를 호출하면서
// 3개(배열 요소의 값, 요소 인덱스, this)의 인수를 전달한다.
// 배열의 모든 요소를 순회하며 합산한다.
numbers.forEach(function (item, index, self) {
  console.log(`numbers[${index}] = ${item}`);
  total += item;
});

// Array#reduce를 사용해도 위와 동일한 결과를 얻을 수 있다
// total = numbers.reduce(function (pre, cur) {
//   return pre + cur;
// });

console.log(total); // 25
console.log(numbers); // [ 1, 3, 5, 7, 9 ]
