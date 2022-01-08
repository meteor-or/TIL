# SendingHTMLfileToServer&NodemonLibrary

생성일: 2022년 1월 3일 오전 8:42

# NodemonLibrary

- 설치하는 이유 : 코드 작성하고 서버를 껐다키기 귀찮아서
- 설치와 실행 방법
    - `npm install -g nodemon`
    - 터미널에 `nodemon server.js` 입력
    - 오류가 뜬다면 `set-executionpolicy unrestricted` 입력

# SendingHTMLfileToServer

```jsx
app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html')
})
```

- 서버에 HTML 파일 전송하기
    - server.js에 작성
    - index.html 생성