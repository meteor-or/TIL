/*
원시 값
1. 원시형 값이다.
2. 문자, 숫자, bigint, 불린, 심볼, null, undefined 형으로 총 7가지이다

객체:
1. 프로퍼티에 다양항 종류의 값을 저장할 수 있다.
2. {name : "yuseong", age : 25}와 같이 대괄호 {}를 사용해 만들 수 있습니다. 함수도 객체의 일종이다.(중요)

*/

let john = {
  name: "John",
  sayHi: function() {
    alert("친구야 반갑다!");
  }
};
john.sayHi(); // 친구야 반갑다!

//이런 식으로 객체 안에 함수를 정의 할 수 있다.