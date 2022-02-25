# IIFE(Immediately-Invoked Function Expressions)

```jsx
const SecretFood = ["bacon", "bibimbap"]
console.log(SecretFood )
```

- SecretFood 값을 브라우저 상에서 쉽게 접근 할 수 있음 보이지 않게 하기 위해서

```jsx
(()=>{
	const SecretFood = ["bacon", "bibimbap"]
	console.log(SecretFood )
})()
```

- 자기 자신을 부르는 함수 안에 넣는다.