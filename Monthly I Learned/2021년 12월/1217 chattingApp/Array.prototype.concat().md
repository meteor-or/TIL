# Array.prototype.concat()

> 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.

```jsx
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
const arr4 = ["탄이", "초코"];
const arr5 = ["바보", "귀염둥이"];
const arr6 = arr4.concat(arr5);

console.log(array3); // Array ["a", "b", "c", "d", "e", "f"]
console.log(arr6); //Array ["탄이", "초코", "바보", "귀염둥이"]
```

배열 세 개 이어 붙이기도 가능하다

```jsx
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

num1.concat(num2, num3);
// 결과: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

concat 파라미터에 값을 직접 넣는 것도 가능하다.

```jsx
const alpha = ["a", "b", "c"];

alpha.concat(1, [2, 3]);
// 결과: ['a', 'b', 'c', 1, 2, 3]
```

내 실제 사용 시 코드

```jsx
const handleSubmit = async () => {
  if (!content) {
    setErrors((prev) => prev.concat("Type contents first"));
    return;
  }
  setLoading(true);

  //firebase에 메시지를 저장하는 부분
  try {
    // await messagesRef.child(chatRoom.id).push().set(createMessage())
    await set(push(child(messagesRef, chatRoom.id)), createMessage());

    // typingRef.child(chatRoom.id).child(user.uid).remove();
    await remove(child(typingRef, `${chatRoom.id}/${user.uid}`));
    setLoading(false);
    setContent("");
    setErrors([]);
  } catch (error) {
    setErrors((pre) => pre.concat(error.message));
    setLoading(false);
    setTimeout(() => {
      setErrors([]);
    }, 5000);
  }
};
```

에러문 처리 : useState에 에러 메세지를 추가할 때 사용했다.

---

**출처**

[Array.prototype.concat() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
