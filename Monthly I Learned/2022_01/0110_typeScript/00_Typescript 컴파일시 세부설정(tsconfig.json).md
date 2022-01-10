# 00_Typescript 컴파일시 세부설정 (tsconfig.json)

생성일: 2021년 12월 29일 오전 11:51

[tsconfig.json 컴파일 옵션 정리](https://geonlee.tistory.com/214)

```tsx
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,  //자바스크립트 파일 컴파일 혀용 여부
    "skipLibCheck": true, //정의 파일의 타입 확인을 건너 뛸 지 여부 
    "esModuleInterop": true,  //모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부, 'allowSyntheticDefaultImports'를 암시적으로 승인합니다.
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noImplicitAny": true,    //any 라는 타입이 의도치않게 발성한 경우 에러를 띄워준다.
    "strictNullCheck": true,    //null, undefined 타입에 이상한 조작하면 에러를 띄움
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,    //switch문에서 fallthrough 케이스에 대한 에러보고 여부
    "module": "esnext", /* 모듈을 위한 코드 생성 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "moduleResolution": "node", //모듈 해석 방법 설정 : 'node' or 'classic'
    "resolveJsonModule": true, //ts는 json 모듈을 바로 가져올 수 없다. 이것을 해결하기 위한 모듈
    "isolatedModules": true,  // 각 파일을 분리된 모듈로 트랜스파일 
    "noEmit": true, //결과 파일 내보낼지 여부
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

```tsx
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거 

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
 }
}
```