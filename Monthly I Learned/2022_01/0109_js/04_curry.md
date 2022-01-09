# 커링, curry, curryr

```jsx
function _curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

let add = _curry(function (a, b) {
  return a + b;
});

let add10 = add(10);
let add5 = add(5);
console.log(add10(5)); //15
console.log(add(5)(3)); //8
console.log(add5(3)); //8
console.log(add(10)(3)); //13
console.log(add(1, 2)); // 함수가나옴
```

```jsx
function _curry(fn) {
  return function (a, b) {
    if (arguments.length == 2) return fn(a, b);
    return function (b) {
      return fn(a, b);
    };
  };
}

console.log(add(1, 2)); // 3
```

```jsx
function _curry(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}
```

- 삼항연산자로 함수를 더 예쁘게 바꾸기

```jsx
function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}

console.log(_get(user1, "name")); //ID
```

- get 함수 만들기

```jsx
var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

console.log(_get("name")(user1)); // ID

var get_name = _get("name");

console.log(get_name(user1));
console.log(get_name(users[3]));
console.log(get_name(users[4]));
```

- get 함수를 curryr에 넣는다면 인자를 반대로 설정할 수 있다.

```jsx
console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    function (user) {
      return user.name;
    }
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    function (user) {
      return user.age;
    }
  )
);

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
```

- 그리고 방금 정의한 get 함수를 사용하면 이전에 정의한 user의 이름을 가져오는 함수를 더 간결하게 정의할 수 있다.
