# 05_Literal Types로 만드는 const 변수 유사품

생성일: 2022년 1월 10일 오전 9:23

```jsx
// Literal Type
    /*
    특정 글자나 숫자만 가질 수 있도록 제한을두는 타입
    string, number만 타입이 될 수 있는 거 아니다. 일반 글자도 가능하다
    */
    let tani :'pompom';
    let direction : 'left' | 'right';
    // 어떻게 보면 const의 업그레이드 버전이라 볼 수 있다.

    //as const 문법
    var 자료 = {
        name : 'kim'
      }  
      
      function 내함수(a : 'kim') {
      
      }
    //   내함수(자료.name) error
    // 자료.name은 string타입이지 kim타입이 아니라서 오류가 난다.

    /*해결 방법
      1.object 만드는 과정에서 타입을 제대로 정의하기
      2.assertion(ex. as kim)
      3.as const
    */
      var 자료2 = {
        name : 'kim'
      } as const;
      
      function 내함수2(a : 'kim') {
      
      }
      내함수2(자료2.name)

      //as const의 효과
      //1.타입을 object의 value로 바꿔준다.
      //2. object 안에 있는 모든 속성을 readonly로 바꿔준다.
```