# 05_reduce

```jsx
function _reduce(list, iter, memo) {
  iter(iter(iter(0, 1), 2), 3);
}

memo = add(0, 1);
memo = add(memo, 2);
memo = add(memo, 3);
return memo;
```

- 위의 같은 방식으로 리스트의 수만큼 작동하는 함수
- `_reduce` 함수 : 원래 들어온 자료보다 축약된 결과를 만들어냄

```jsx
function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = list.slice(1);
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}
```

- 완성된 reduce함수

```jsx
var slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}
```

- 객체 지향식 slice를 제거하기 위해 `_rest` 함수
- `call()` 메서드 이용해, 객체는 다른 객체에 속하는 메서드 이용 가능
