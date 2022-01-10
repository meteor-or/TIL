# 07_타입스크립트로 HTML 변경과 조작할 때 주의점

생성일: 2022년 1월 10일 오전 9:22

## HTML 내부 태그 조작

### h4 태그를 바꿔보자

```jsx
let title = document.querySelector("#title");
제목.innerHTML = '반갑소' // 오류

  // narrowing 방법1
  title != null && (title.innerHTML = "반가워요");

  // 방법 2 instanceof 가장 좋은법
  title instanceof Element && (title.innerHTML = "반가워요");

  // 방법3 as 키워드로 사기치기
  let title1 = document.querySelector("#title") as Element;

  // 방법4 js 신문법 .? -> object 자료안에 innerHTML이 존재하면 그거 써주고
  // 없으면 undefined
  title?.innerHTML != undefined && (title.innerHTML = "반가워요");

  // 방법5 tsconfig에서 strict 모드를 끄기
```

- 가정 : html 문서에 `<h4 id="title">h4타이틀</h4>` 가 있고, tsconfig에서 strict 모드가 켜짐
- 오류 : “제목 변수가 null일 수 있습니다”
- 해결 방법
    1. narrowing 기본
    2. narrowing instanceof 사용
    3. assertion
    4. optional chaining 연산자
    5. strict 설정 끄기

### a 태그의 href 속성을 바꿔보자

```jsx
let link = document.querySelector(".link");
  // if (링크 instanceof HTMLElement) {
  //   링크.href = "https://kakao.com"; //에러남 ㅅㄱ
  // }
  // 에러 나는 이유 : html 태그 종류별로 정확한 타입 명칭이 있다.
  // a tag = HTMLAnchorElement
  // img tag = HTMLImageElement
  // h4 tag = HTMLHeadingElement
  link instanceof HTMLAnchorElement && (link.href = "https://kakao.com");

  // 이벤트리스너 부착하기
  let btn = document.getElementById("button");
  // btn.addEventListener("click", function () {
  //   console.log("안녕");
  // });
  btn?.addEventListener("click", function () {
    console.log("안녕");
  });
  // ? -> optional chaining 신 문법
```

- 가정 : html에 `<a href="[naver.com](http://naver.com/)" className="link">링크</a>` 가 적혀있음
- 오류 : `Property 'href' does not exist on type 'HTMLElement’`
- 원인 :  html 태그 종류별로 정확한 타입 명칭이 존재, a 태그는 HTMLAnchorElement, img 태그는 HTMLImageElement
- 해결 : `HTMLAnchorElement` 라고 정확히 적어주기

### 이벤트 리스터 부착하기

```jsx
let btn = document.getElementById("button");
  // btn.addEventListener("click", function () {
  //   console.log("안녕");
  // });
  btn?.addEventListener("click", function () {
    console.log("안녕");
  });
  // ? -> optional chaining 신 문법
```

- 가정 : `<button id="button"></button>` 태그가 html에 있다.
- 오류 : `Object is possibly 'null'`
- 해결: addEventListner 함수를 붙일 때 물음표도 붙인다.
    - optional chaining 신문법 : `object?.name` 이라고 하면 object에 name 이 존재하면 출력해주고 없으면 undefined를 남긴다.

### 숙제

**(숙제1) 버튼을 누르면 이미지를 바꿔봅시다.**

```
<img id="image" src="test.jpg">
```

> html 안에 test.jpg를 보여주고 있는 이미지 태그가 있다고 칩시다. 이미지를 new.jpg 라는 이미지로 바꾸고 싶으면 자바스크립트 코드를 어떻게 짜야할까요? 성공여부는 크롬 개발자도구 켜면 src 속성이 잘 바뀌었는지 확인가능하겠죠?
> 

```jsx
let img = document.querySelector("#img");
  img instanceof HTMLImageElement && (img.src = "new.jpg");
```

- 정답

**(숙제2) 바꾸고 싶은 html 요소가 많습니다.**

```
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
<a class="naver" href="naver.com">링크</a>
```

> 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸고 싶은 겁니다. 자바스크립트 코드를 어떻게 짜야할까요?
> 

```jsx
let naver = document.querySelectorAll(".naver");
  naver.forEach((x) => {
    x instanceof HTMLAnchorElement && (x.href = "https://kakao.com");
  });
```

- 정답