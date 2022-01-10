# 04_타입도 변수에 담아쓰세요 type 키워드 써서 & readonly

생성일: 2022년 1월 3일 오후 4:41

```jsx
//type alias(타입변수)
    type AnimalType1 = string | number | undefined;
    type AnimalType2 = {name :string, age:number};

    let 동물 :AnimalType1 = 'doggy';
    let 동물2 :AnimalType2 = {name : "doggy", age:20};

    //object readonly
    type 점심타입 = {
        readonly name : string
    }

    const 점심 = {
        name : '부대찌개'
    }

    점심.name = '짜장면'
    //실제 자바스크립트 파일에서는 바뀌지만 타입스크립트에서는 에러를 띄워준다.

    //type alias extend
    //1.
    type Name = string;
    type Age = number;
    type Person = Name | Age;
    //2.
    type PositionX = {x:number};
    type PositionY = {y:number};

    type NewType = PositionX & PositionY;

    let positon :NewType = {x : 10, y: 20}

    //숙제1.    
    type breadType1 = {name :string, age:number}; 
    type breadType2 = {name :string, region:string};
    
    type NewbreadType = breadType1 & breadType2;

    //숙제2.
    type homework2 = {color? : string, size : number, readonly postion : number[]}

    let hello :homework2 = {size: 123, postion: [1,2,3]}

    //숙제3
    type homework3 = {name : string, phome:number, email:string}

    //숙제4
    type homework4 = {name : string, phome:number, email:string, adult:boolean}
```