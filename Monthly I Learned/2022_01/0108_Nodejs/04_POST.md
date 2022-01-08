# POST

생성일: 2022년 1월 3일 오전 9:36

# POST

```jsx
app.use(express.urlencoded({extended: true}))
```

- body-parser 라이브러리 코드 추가

```jsx
app.post('/add',(req, res)=> {
     res.send('전송완료')
     console.log(req.body.title)
     console.log(req.body.date)
 })
```

- server.js 에 post 요청 코드 작성

```jsx
<form action="/add" method="POST">
            <div class="form-group">
                <h1>기록하기</h1>
                <label for="exampleFormControlTextarea1">오늘의 할일</label>
                <input type="text" name="title" placeholder="오늘의 할일" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Due date</label>
                <input type="text" name="date" placeholder="Due date" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">저장하기</button>
        </form>
```

- wirte.html에 input 태그에 작성한 name이 title과 date.