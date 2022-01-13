# Class와 Prototype

## Class

> objcect 뽑아내는 기계

```jsx
function test() {
  this.q = "consume";
  this.w = "snowball";
}

let nunu = new test();
```

위의 코드를 구현하면 `nunu = {q:”consume”, w:“snowball”}` 형태의 오브젝트가 생성된다. 여기서 문제가 생긴다. test 함수는 항상 q와 w에 같은 값만 할당할 수 있다. 이를 해결하기 위해서는 함수에 파라미터를 생성하면된다.

```jsx
function test(q, w) {
  this.q = q;
  this.w = w;
}

let nunu = new test("consume", "snowball");
let garen = new test("strike", "courage");
```

위처럼 코드를 생성하면 각각 다른 값을 지정할 수 있다.

```jsx
class Hero{
	constructor(q,w){
		this.q = q;
		this.w = w;
	}
	method1(){...}
	method2(){...}
	method3(){...}
}
```

이러한 class 생성하는 방법을 ES6 문법으로 표현하면 해당 형태를 띄게된다. constructor()는 기본 상태를 성정해주는 생성자 메서드로 new에 의해 자동으로 호출된다. 이외에도 여러가지 메서드를 구현할 수 있다.

# Prototype

> 자식 object에게 데이터 물려줄 수 있는 문법

```jsx
function test(q, w) {
  this.q = q;
  this.w = w;
}

let nunu = new test();

console.log(test.prototype); //constructor:f

test.prototype.name = "kim";

console.log(nunu.name); //kim
console.log(nunu); // {q:"strike", w:"snowball"}
```

위에 코드를 살펴보면 test라는 **class**에 강제로 `{name:”key”}` 가 부여됐다. 그후에 test()로 오브젝트를 찍어낸 **nunu** 의 name을 출력하면 kim이라는 로그가 나온다. **하지만 nunu를 살펴보면 nmae이라는 key값이 존재하지 않는다.** 'nunu의 부모에 name이라는 key가 존재하기 때문이다.

이유는 nunu의 부모에게 name이라는 key값이 존재하기 때문이다. object에서 자료뽑을 때 자바스크립트에서는 아래와 같은 과정이 순차적으로 일어난다. 이 과정을 **prototype chain** 이라고 부른다.

1. 직접 자료를 가지고 있는 경우 바로 출력
2. 자료가 없는 경우 부모에서 찾는다.
3. 없으면 또 부모에게 찾는다.

```jsx
let arr = [4, 2, 1];
let arr = new Array(4, 2, 1);
arr.length;
```

사실 생각해보면 우리는 어째서 array 자료형에 sort()나 push()를 붙일 수 있었을까. 그 안에 들어 있지 않는데 이유는 아까 위에 설명한 것과 같다. Array 함수에는 sort(), push()등 여러가지 내장 객체가 부여되어있다. 이러한 것들은 Array.prototype을 콜솔 로그에 입력하면 모두 확인 가능하다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/91d917f5-b3b7-4336-8aac-8a01744ba77f/Untitled.png)

구글에 자바스크립트 문법을 검색하면 가장 많이 보는 사이트다. 여기서 Array.prototype의 의미를 이제 이해할 수 있다.

```jsx
Array.prototype.fun1 = function () {};
console.log(arr.fun1); //undefined
console.log(arr.fun2); //error
```

이러한 원리로 위 코드와 같은 방식으로 개인이 Array에 함수를 추가하는 것도 가능하다.
