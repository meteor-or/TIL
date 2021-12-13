> html에서 `<script>`태그의 위치는 어디가 가장 좋을까?

## 1.`<head></head>` 안에 위치시키기

### 1.1. 👎 속성없이 `<script>`만 넣기

```html
<!DOCTYPE html>
<html lang=ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
    <script src="main.js"></script>
</head>
<body>
</body>
</html>
```

![image](https://user-images.githubusercontent.com/82145837/143546774-ca3a8cea-5c82-49ef-996a-9c6c3b7f4618.png)

- 이러면 html을 파싱하는 중에 js 파일을 다운로드 받고 실행 시킨 후에 다시 html 실행 시킨다.
- 만약 스크립트 파일이 크거나 인터넷이 느리다면 사용자의 화면에 아무것도 보이지 않는 시간이 길어져서 딱히 좋은 방법이 아니다.
  <br>

### 1.2. `<script async>` 로 넣기

![image](https://user-images.githubusercontent.com/82145837/143547136-61fc0584-40c1-4618-9a2f-6651b9bf7cd6.png)

- `<script async src="main.js"></script>`
- HTML 파싱중 js를 동시에 다운로드 받다가 js 다운로드가 끝나면 js를 실행한다.
- 장점 : 다운로드 받는 시간 절약가능
- 단점 : html이 파싱되기 전에 실행되기 때문에 뭐 queryselector를 이용해서 html을 조작한다고 하면 그 시점에 아직 정의되지 않을 수도 있다.

![](https://images.velog.io/images/meteor-or/post/5ef7da4f-b72e-4070-b993-3564c3961fb6/Untitled.png)

- 만약 스크립트가 여러 개라면 이런 식으로 난리난다.
  <br>

### 1.3. `<script defer>` 로 넣기

![](https://images.velog.io/images/meteor-or/post/818b93a0-5b30-4462-9747-7988988bb694/image.png)

- `<script defer src="main.js"></script>`
- 파싱을 하다가 병렬로 js를 다운로드 시켜놓고 파싱이 끝나면 js를 실행한다.

<br><br>

## 2.<body\>끝 부분에 위치 시키기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>title</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

![image](https://user-images.githubusercontent.com/82145837/143546868-4dc81c28-bb64-472b-b98e-8ec4410dff61.png)

- 만약 사이트가 js에 의존적으로 작동하는 사이트라면 파싱이 되더라도 컨텐츠를 보지 못하는 시간이 길어진다.
- IE 10 미만에서 `async` `defer`이 제대로 작동하지 않기 때문에 이 방법이 가장 권장된다. (점유율이 낮아서 신경써야할 정도는 아닌듯)
  <br><br>

## 3. 결론은?

1. `<head><head/>` 안에 넣는다!
2. 다른 파일에 종속적이거나 의존하지 않은 파일, 먼저 실행되어야 하는 파일 → `<script async>`
3. 다른 파일에 종속적이고 의존한다면 → `<script defer>`
4. 웬만해서는 `defer`속성 쓰면 될 것 같다.

<br>

---

**참고자료**

[](https://velog.io/@gga01075/script%EC%9D%98-%EC%9C%84%EC%B9%98%EC%99%80-%EC%86%8D%EC%84%B1)

[[JS] Script삽입 위치(head, body, async, defer 비교)](https://velog.io/@anjaekk/JS-Script%EC%82%BD%EC%9E%85-%EC%9C%84%EC%B9%98head-body-async-defer-%EB%B9%84%EA%B5%90)

[자바스크립트 2. 콘솔에 출력, script async 와 defer의 차이점 및 앞으로 자바스크립트 공부 방향 | 프론트엔드 개발자 입문편 (JavaScript ES5+)](https://www.youtube.com/watch?v=tJieVCgGzhs&t=291s)

[: 스크립트 요소 - HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)

[async vs defer attributes](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

[브라우저의 역할과 스크립트의 로드 시점](https://webclub.tistory.com/630)
