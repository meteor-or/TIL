## Object에 쓸 수 있는 interface 문법

```jsx
type 타입명 = string;
let 네모 = { color: "red", width: 100 };
type Square = { color: string, width: number };
interface Square1 {
  color: string;
  width: number;
}
```

- interface는 type alias와 용도와 기능이 비슷하다. 대신 `=` 을 사용하지 않는다는 점이 조금 다르다.

```jsx
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };
interface Student {
  name: string;
}
interface Teacher {
  name: string;
  age: 20;
}
```

- 위의 interface 두 개는 name이 중복이다. interface의 경우는 이 중복을 쉽게 제거할 수 있다.

## interface의 장점 - extends

```jsx
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: 20;
}
```

- extends 사용시 Student의 name 속성이 Teacher로 들어가게 된다.

## extends와 비슷한 기능 intersection type(&)

```jsx
type Animal = { name: string };
 type Cat = { age: number } & Animal;
type Cat = Animal & { legs: number }; 이런 식도 가능
```

- type alias 경우에는 extends를 사용할수 없다. `&` 기호를 사용하는 intersection type으로 object 두 개를 합칠 수 있다.

```jsx
interface Student {
  name: string;
}
interface Teacher {
  age: number;
}

let 변수: Student & Teacher = { name: "kim", age: 90 };
```

- interface도 type처럼 & 기호 사용 할 수 있다.

## interface와 type 차이점 - 중복선언

### 타입 이름 중복 선언

```jsx
interface Animal {
  name: string;
}
interface Animal {
  legs: number;
}

/* type Animal = {
    name: string;
  };
  type Animal = {
    legs: number;
  }; */ //error
```

- interface는 중복 선언 해도 오류가 나타나지 않는다.
- type은 바로 에러가 나타난다. `Duplicate identifier 'Animal'.ts(2300)`
- 일반적인 상황에서는 type 키워드를 자주 사용하지만 라이브러리같은 경우는 interface로 타입을 정해둔 경우가 많다.

### object 안의 속성이 중복 선언

```jsx
interface Animal {
  name: string;
}
interface Dog extends Animal {
  name: number;
}
```

```jsx
interface Animal {
  name: string;
}
interface Dog {
  name: number;
}

let 변수: Dog & Animal = { name: "멍멍" };
```

- 두 경우 모두 오류가 나타난다. type도 마찬가지이다.
- 만약 둘다 name: string 이면 에러가 나지 않고 하나 로 합쳐준다.

## 숙제

- **(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다**

```jsx
let 상품 = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
```

- 정답
  ```jsx
  interface Producet {
    brand: string;
    serialNumber: number;
    model: string[];
  }
  ```
- **(숙제2) array 안에 object 여러개가 필요합니다.**

```jsx
let 장바구니 = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
```

- 정답
  ```jsx
  interface Product2 {
    product: string;
    price: number;
  }
  ```
- **(숙제3) 위에서 만든 타입을 extends 해봅시다.**

```jsx
{ product : '청소기', price : 7000, card : false }
```

- 정답
  ```jsx
  interface Product3 extends Product2 {
    card: boolean;
  }
  ```
- (**숙제4) object 안에 함수를 2개 넣고 싶은데요**

```jsx
1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.

이 object 자료를 어떻게 만들면 될까요?

interface를 이용해서 object에 타입지정도 해보십시오.
```

- 정답
  ```jsx
  interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
  }
  let homework4: MathObj = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    },
  };
  ```
