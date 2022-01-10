# 08_class 만들 때 타입지정 가능

생성일: 2022년 1월 10일 오전 11:20

## 필드값 타입지정

```jsx
class Person {
  data = 0;
}

let john = new Person();
let kim = new Person();

console.log(john.data);
console.log(kim.data);
```

- 만약 data 속성에 number type을 지정하면 `data: number`가 된다

## **constructor 타입지정**

```jsx
class Person {
	name; //js와 달리 내부에 데이터를 정의해주지 않으면 오류가 난다.
  constructor (){
    this.name = 'kim';
  }
}
```

- 오류 : Property 'name' does not exist on type 'Person'.ts
- 필드값과 constructor은 비슷한 역할을 한다. 대신 new Person()을 사용할 때 파라미터를 사용하고 싶다면 constructor로 만들어야한다.

## **methods 타입지정**

```jsx
class Person {
  add(숫자){
    console.log(숫자 + 1)
  }
}

```

- 클래스 안에 함수를 적으면 prototype에 함수가 추가된다.

## 숙제

**(숙제1) Car 클래스를 만들고 싶습니다.**

```jsx
let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300
```

> 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.
> 

```jsx
class Car {
    model;
    price;
    constructor(name: string, price: number) {
      this.model = name;
      this.price = price;
    }
    tax() {
      return this.price / 10;
    }
  }
```

**(숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.**

```jsx
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']
```

> 1 object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
2 숫자는 전부 object 안의 num 속성 안에 array 형태로 저장되고
3 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
4 class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈
> 

```jsx
class Word {
    num;
    str;
    constructor(...param: any) {
      let numbers: number[] = [];
      let strings: string[] = [];

      param.forEach((i: number) => {
        typeof i === "string" ? strings.push(i) : numbers.push(i);
      });

      this.num = numbers;
      this.str = strings;
    }
  }

  let obj = new Word("kim", 3, 5, "park");

console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']
```