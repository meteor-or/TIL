function foo(params) {
  var x = 1;
  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용된다.
  // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것 처럼 동작한다. (ㅁㅊ놈)
  var x = 2;
  console.log(x);
}

function bar(params) {
  let x = 1;
  // let 이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
  let x = 2;
  //SyntaxError: Identifier 'x' has already been declared
}
