메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다.

```jsx
const array1 = [1, 2, 3];
console.log(array1.includes(2)); //true

const pets = ["탄이", "초코", "뭉치"];

console.log(pets.includes("탄이")); //true
console.log(pets.includes("또또")); //false
```

> `arr.includes(*valueToFind*[, *fromIndex*])`

- _`valueToFind`_
  문자나 문자열을 비교할 때, `includes()`는 **대소문자를 구분**합니다.
  ```jsx
  const pets = ["cat", "dog", "bat"];

  console.log(pets.includes("cat")); //true
  console.log(pets.includes("Cat")); //false
  console.log(pets.includes("at")); //false
  ```
- **`fromIndex` (Optional)**
  이 배열에서 searchElement 검색을 시작할 위치입니다. 음의 값은 array.length + fromIndex의 인덱스를 asc로 검색합니다. 기본값은 0입니다.
  ```jsx
  const pets = ["탄이", "초코", "뭉치"];

  console.log(pets.includes("탄이", 1)); //false
  console.log(pets.includes("탄이", 0)); //true
  ```
