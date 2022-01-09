# 회원 목록, map, filter

```jsx
let users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 },
];

// 1. 명령형 코드
// 1. 30세 이상인 users를 거른다.
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 2. 30세 이상인 users의 names를 수집한다.
let names = [];
for (let i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

// 3. 30세 미만인 users를 거른다.
let temp_users = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// 4. 30세 미만인 users의 ages를 수집한다.
let ages = [];
for (let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);
```

- 기본적인 명령형 코드
  - 30세 이상인 유저를 거르는 코드와 30세 미만인 코드가 중복된다. 조건부만 다르고 나머지는 다 중복된다.

```jsx
// 2. _filter, _map으로 리팩토링
// 2.1. _filter (1,3번 리팩토링)
function _filter(list, predi) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    if (predi(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}
// 2.1. _map (2번 리팩토링)
function _map(list, mapper) {
  let new_list = [];
  for (let i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

// let over_30 = _filter(users, function(user) { return user.age >= 30; });
let over_30 = _filter(users, (user) => {
  return user.age >= 30;
});
console.log(over_30);

let names = _map(over_30, function (user) {
  return user.name;
});
console.log(names); // 나이가 30이 넘는 사람의 이름을 출력한다

let under_30 = _filter(users, function (user) {
  return user.age < 30;
});
console.log(under_30);

let ages = _map(under_30, function (user) {
  return user.age;
});
console.log(ages);

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

/*console.log(
          _filter([1, 2, 3, 4], function(num) { return num % 2; }));  //1,3
        console.log(
          _filter([1, 2, 3, 4], function(num) { return !(num % 2); }));*/ //2,4
```
