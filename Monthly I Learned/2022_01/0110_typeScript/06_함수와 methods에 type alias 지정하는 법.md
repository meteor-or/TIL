# 06_함수와 methods에 type alias 지정하는 법

생성일: 2022년 1월 3일 오후 4:41

## **function type 저장가능**

```jsx
type NumOut = (x : number, y : number ) => number ;
```

- 함수 타입은 () ⇒ {} 모양으로

```jsx
type NumOut = (x : number, y : number ) => number 
let ABC :NumOut = function(x,y){
  return x + y
}
```

- 함수 표현식에만 type alias 사용가능

## **methods 안에 타입지정하기**

```jsx
let 회원정보 = {
  name : 'kim',
  age : 30,
  plusOne (x){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();
```

- object 자료 안에 함수를 마음대로 집어 넣을 수 있다.

**(숙제1)** 

**회원정보라는 변수에 타입지정 알아서 해보십시오.**

```jsx
let member = {
    name: "kim",
    age: 30,
    plusOne(x) {
      return x + 1;
    },
    changeName: () => {
      console.log("안녕");
    },
  };

type Member = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  changeName : () => void
}
```

**(숙제2)**

**다음 함수2개를 만들어보고 타입까지 정의해보십시오**

```jsx
type cutType = (x: string) => String;
  type removeDashType = (x: string) => Number;

  const cutZero: cutType = (x) => {
    let result = x.replace(/^0+/, "");
    return result;
  };

  const removeDash: removeDashType = (x) => {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
  };
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}
```

**(숙제3)**

**함수에 함수를 집어넣기**

```jsx
type cutType = (x: string) => String;
type removeDashType = (x: string) => Number;

const homework3 = (x: string, func1: cutType, func2: removeDashType) => {
    let result1 = func1(x);
    return func2(result1);
  };

return (
    <div>
      <p>{homework3("010-1111-2222", cutZero, removeDash)}</p>
    </div>
  );
```

- 내가 적은 답

```jsx
type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;

function 만들함수(a :string, func1 :함수타입1, func2 :함수타입2){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
만들함수('010-1111-2222', cutZero, removeDash)
```

- 정답