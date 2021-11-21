# 배열 고차 함수(Higher-order function, HOF)

고차 함수는 **1.함수를 인자로 전달받거나** **2.함수를 반환하는 함수**를 말한다.
고차 함수는 외부 상태의 변경이나 변경 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반을 두고 있다.

→ 쉽게 말해, 함수를 다루는 함수이다.

[Higher-Order Function 이란 무엇인가](https://medium.com/@la.place/higher-order-function-%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-1c61e0bea79)

### 예제

```JavaScript
const twice = function (함수, 값) {
  return 함수(함수(값));
};

const plusOne = function (값) {
  return 값 + 1;
};

console.log(twice(plusOne, 1)); // 3 = 1 + 1 + 1
```

twice()는 함수를 인자로 받아서 2번 반복 하기 때문에 HOF이다.

```JavaScript
const 두번반복하는함수 = function (외부함수, 값) {
  return 외부함수(외부함수(값));
};

const 제곱하기 = function (값) {
  return 값 * 값;
};

console.log(두번반복하는함수(제곱하기, 2)); //2*2*2*2 = 16
```

## Array.prototype.sort

배열의 요소를 적절하게 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다.

```JavaScript
const fruits = ['Banana', 'Orange', 'Apple'];

// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]
```

```jsx
const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points); // [ 1, 10, 100, 2, 25, 40, 5 ]

const points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.

points.sort((a, b) => a - b);
// points.sort(function (a, b) { return a - b; });
// if a < b 이면 a - b < 0 -> -1
// if a === b 이면 -> 0
// if a > b 이면 a - b > 0 -> 1

console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
points.sort((a, b) => b - a);
// ES6 화살표 함수
// points.sort(function (a, b) { return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100
```

```jsx
let items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => a.value - b.value);

console.log(items);
/*[
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'Zeros', value: 37 },
  { name: 'And', value: 45 }
]
*/
```

## Array.prototype.forEach

- forEach 메소드는 for 문 대신 사용할 수 있다.
- 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행한다. **반환값은 undefined이다.**
- 콜백 함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, forEach 메소드를 호출한 배열, 즉 this를 전달 받을 수 있다.
- forEach 메소드는 원본 배열(this)을 변경하지 않는다. 하지만 콜백 함수는 원본 배열(this)을 변경할 수는 있다.
- **forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.** 다시 말해, 배열의 모든 요소를 순회하며 중간에 순회를 중단할 수 없다.
- forEach 메소드는 for 문에 비해 성능이 좋지는 않다. 하지만 for 문보다 가독성이 좋으므로 적극 사용을 권장한다.
- IE 9 이상에서 정상 동작한다.

### 예제

```jsx
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

```jsx
const items = ["item1", "item2", "item3"];
const copy = [];

// 이전
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

// 이후
items.forEach(function (item) {
  copy.push(item);
});
items2.forEach((item) => copy.push(item));
```

```jsx
const numbers = [1, 2, 3];
let pows = [];

// for 문으로 순회
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}

console.log(pows); // [ 1, 4, 9 ]

pows = [];

// forEach 메소드로 순회
numbers.forEach(function (item) {
  pows.push(item ** 2);
});

// ES6 화살표 함수
// numbers.forEach(item => pows.push(item ** 2));

console.log(pows); // [ 1, 4, 9 ]
```

```jsx
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
```

## Array.prototype.map

## Array.prototype.filter

## Array.prototype.reduce

## Array.prototype.some

## Array.prototype.every

## Array.prototype.find

## Array.prototype.findIndex

## Array.prototype.flatMap
