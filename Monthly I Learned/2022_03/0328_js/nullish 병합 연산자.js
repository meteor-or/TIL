/* nullish 병합 연산자 '??' */

// ??를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 ‘확정되어있는’ 변수를 찾을 수 있습니다.

let firstName = null;
let lastName = null;
let nickName = "바이올렛";
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// height || 100은 height에 0 을 할당했으나 0을 falsy 한 값으로 취급했기 때문에 null이나 undefined를 할당한 것과 동일하게 처리합니다. 따라서 height || 100의 평가 결과는 100이다


//??의 연산자 우선순위는 5로 꽤 낮다.

let height2 = null;
let width = null;

let area = (height2 ?? 100) * (width ?? 50);

console.log(area) // 500


// * 이 ??보다 우선순위가 높기 때문에 *가 먼저 실행된다. 그래서 꼭 괄호로 묶어줘야 한다.
// 안정성 관련 이슈 때문에 ??는 &&나 ||와 함께 사용하지 못한다
// let x = 1&& 2 ?? 3 오류남
// 제약으 피하려면 괄호를 사용해야한다

let x = (1 && 2) ?? 3;

console.log(x) //2 