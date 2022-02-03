const regex = /\d{3}-\d{4}-\d{4}/;
//\d = 숫자, {n} 안의 숫자는 개수

console.log(regex.test("010-1111-2222")); // true;
console.log(regex.test("10-111-222")); // false;

const text = "안녕하세요, 제 전화번호는 010-1111-2222입니다.";
console.log(text.match(regex)[0]); //010-1111-2222
//여러 텍스트 중에서 전화번호만 뽑아낼 수 있다.
