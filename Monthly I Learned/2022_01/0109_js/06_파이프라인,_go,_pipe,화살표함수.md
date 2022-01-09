# 06\_파이프라인,\_go,\_pipe,화살표함수.

## \_pipe

```jsx
var f1 = _pipe(
  function (a) {
    return a + 1;
  }, // 1 + 1
  function (a) {
    return a * 2;
  } // 2 * 2
);
console.log(f1(1)); // 4
```

- `_pipe`는 함수들을 인자로 받아서 연속적으로 실행해주는 표현력을 가졌다.

```jsx
function _pipe() {
  var fns = arguments;
  return function (arg) {
    return _reduce(
      fns,
      function (arg, fn) {
        return fn(arg);
      },
      arg
    );
  };
}
```

- 함수를 array로 받기
- 모든 함수를 돌면서 첫번째 함수의 인자를 적용한 결과를 return

## \_go

```jsx
function _go(arg) {
  var fns = _rest(arguments);
  return _pipe.apply(null, fns)(arg);
}
```

```jsx
// go 함수 사용전
console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    _get("name")
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    _get("age")
  )
);
//go 함수 사용후
_go(
  users,
  _filter(function (user) {
    return user.age >= 30;
  }),
  _map(_get("name")),
  console.log
);

_go(
  users,
  _filter((user) => user.age < 30),
  _map(_get("age")),
  console.log
);
```

- \_go는 즉시 실행되는 pipe 함수다. pipe는 함수를 return하는 함수이고, go는 첫번째 인자로는 인인자를 받고 두 번째부터 함수를 받는 함수이다.
- 이 함수를 사용하면 가독성이 높아진다.
- 사용전 함수는 내부에서부터 밖으로 읽어 나간 것에 비해 사용 후 함수는 밖에서 부터 읽을 수 있다.
- `_map(_get("age"))` 는 `_map(user ⇒ user.age)` 화살표 함수로 표현 가능하다
- 이런 식으로 부수효과가 없는 함수는 조합성이 크게 올라간다.

## 화살표 함수 간단히

```jsx
var a = function (user) {
  return user.age >= 30;
};
var a = (user) => user.age >= 30;

var add = function (a, b) {
  return a + b;
};
var add = (a, b) => a + b;
var add = (a, b) => {
  //
  return a + b;
};
var add = (a, b) => ({ val: a + b });
```
