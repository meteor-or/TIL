# Insert_data

생성일: 2022년 1월 13일 오전 9:01

## EJS로 html에 db 넣기

### EJS (Embedded JavaScript Template)

node.js에서 사용하는 서버 데이터를 HTML에 쉽게 넣을 수 있도록 도와주는 HTML 렌더링 템플릿 엔진이다. 

**설정**

```jsx
app.set("view engine", "ejs");
```

- 시작하기 전에 ejs 사용할 거라고 선언해준다.

### ejs파일 만들기

- 작업 폴더 내에 views라는 폴더를 생성하고 그 안에 ejs 확장자로 파일을 생성한다
- html 문법과 거의 똑같다.

**기본문법**

- 주석 <%# ... %>
- JS코드 <% ... %>
- 변수 출력<%= ... %>
- 태그 내부 공백 제거<%_ ... _%>

```jsx
<% for(let i = 0; i < posts.length; i++) { %>
    <h4>할 일 제목 : <%= posts[i].제목 %></h4>
    <p>할 일 마감날짜 : <%= posts[i].날짜 %></p>
    <% }%>
```

## DB 데이터 읽기

```jsx
db.collection('post').find() 
db.colleciton('post').findOne()
```

- 해당 문법을 사용하면 mongodb의 데이터를 추출할 수 있다.

```jsx
(server.js)

app.get('/list', function(요청, 응답){
  db.collection('post').find().toArray(function(에러, 결과){
    console.log(결과)
    응답.render('list.ejs')
  })
})
```

- 모든 데이터를 array 형태로 가져오려면 이러한 형태로 코드를 짜면된다.

```jsx
(server.js)

app.get('/list', function(요청, 응답){
  db.collection('post').find().toArray(function(에러, 결과){
    console.log(결과)
    응답.render('list.ejs', { posts : 결과 })
  })
})
```

- 데이터를 list.ejs 파일에 보내고 싶으면 render 코드 뒤에 `{post: 결과}` 형태로 구현하면 된다.

```jsx
(views/list.ejs)

<h4><%= posts[1].제목 %></h4>
<p><%= posts[1].날짜 %></p>
```

- 제목과 날짜를 단순 하드코딩으로 보여주고 싶으면 이러한 형태로 코드를 구현한다.

```jsx
(views/list.ejs)

<% for (var i = 0; i < posts.length; i ++) { %>
  <h4><%= posts[i].제목 %></h4>
  <p><%= posts[i].날짜 %></p>
<% } %>
```

- 반복문을 사용해서 조금도 유동적인 코드도 짤 수 있다.