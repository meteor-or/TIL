# 02_함수에 타입 지정하는 법 & void 타입

생성일: 2022년 1월 3일 오후 4:40

```jsx
function 함수(x: number) {
    return x * 2;
  }

  function 함수2(x: number): void {}
  //함수에서 void 타입 활용 가능 : retrun할 자료가 없는 함수의 타입
  //return 하려고할 때 에러를 낸다.

  //자바스크립트와 다른 점 : 타입 지정된 파라미터는 필수다.
  //파라미터? :타입 들어올수도 있다, 가 맞기는 하지만 사실은 undefined와 같다.

  //숙제 1 : 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길도 이라고 출력해주기"
  function printName(x?: string) {
    if (x) {
      console.log(`안녕하세요 {x}입니다.`);
    } else {
      console.log("이름을 입력하세요");
    }
  }

  //숙제 2 : 함수에 숫자 또는 문자를 집어 넣으면 자릿수를 세어 출력해주는 함수 만들기
  //내가 쓴 코드
  /*    function Count(x:string | number) {
        if (x){
            return console.log(x.length);
        } else {
            "숫자 또는 문자만 적어주세요"/
        }
    }*/

  //정답
  function count(x: number | string): number {
    return x.toString().length;
  }

  //숙제3 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
  //내코드
  /*    function probabilityOfMarriage ( x :a) :number{
        let 월소득점수 = 월소득
        let 집보유여부점수 = 집보유여부 ? 500 : 0
        if (매력 = "상") {
            let 매력점수 = 100    
        }   else {
            let 매력점수 = 0
        }
        let 총점 = 월소득점수 + 집보유여부점수 + 매력;
        return 결혼가능
    }
*/
  //남의 코드
  function marriage(
    money: number,
    house: boolean,
    charm: string
  ): string | void {
    let score: number = 0;
    score += money;
    if (house === true) {
      score += 500;
    }
    if (charm === "상") {
      score += 100;
    }
    if (score >= 600) {
      return "able";
    }
  }
```