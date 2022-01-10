# 01_타입을 미리 정하기 애매할 때 (union type, any, unknown)

생성일: 2022년 1월 3일 오후 4:40

```jsx
let user : string = 'kim';
            let age : undefined = undefined;
            let married : boolean = false;
            let 철수 : (string | number | undefined | boolean)[]= [user, age, married];

            let 학교 :school = {
                score : [100, 97, 84],
                teacher : 'Phill',
                friend : 'John'
            }
            type school = {score :(Number|boolean)[] , teacher :String, friend : String|String[]}
            학교.score[4] = false;
            학교.friend = ['Lee', 학교.teacher]
```