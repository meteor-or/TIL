`const db = client.db(<db이름>)`

## Create

- db.collection.insertOne()
- db.collection.insertMany()

```jsx
client.connect((err) => {
  const db = client.db("todoapp");

  db.collection("post").insertOne({ name: "야호", _id: 1 }, (err, result) => {
    console.log("저장완료1");
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  });
});
```

서버가 연결되면 todoapp 데이터 베이스에 "post" 콜렉션 안에 `{name : '야호', _id : 1}` 데이터 값을 넣는다. 만약 성공 했을 시 콘솔에 저장완료를 출력한다. 이후 서버를 8080포트에 연결하고 콜솔에 `listening on 8080` 로그를 출력한다.

## Read

- db.collection.find(query, projection)
- db.collection.findOne(query, projection)

```jsx

collection(<콜랙션이름>).find({찾고 싶은 데이터})

app.get('/list', function(요청, 응답){
  db.collection('post').find().toArray(function(에러, 결과){
    console.log(결과)
    응답.render('list.ejs', { posts : 결과 })
  })
})

```

/list url로 들어가면 post 콜렉션의 모든 데이터를 가져오고 그 데이터를 array로 선언한다. 이후 posts 안에 이 데이터를 넣어서 list.ejs로 보낸다.

## Update

- db.collection.updateOne()
- db.collection.updateMany()
- db.collection.replaceOne()

```jsx
db.collection('counter')
	.updateOne( {요런 이름의 자료를} , {이렇게 수정해주세요} , function(에러, 결과){
  console.log('수정완료')
})

app.post("/add", function (요청, 응답) {
  const counter = db.collection("counter");

  counter.findOne((err, result) => {
    console.log(result.totalPost);
    let 총게시물갯수 = result.totalPost;

    post.insertOne(
      { _id: 총게시물갯수 + 1, 제목: 요청.body.title, 날짜: 요청.body.date },
      function (에러, 결과) {
        counter.updateOne(
          { name: "게시물개수" },
          { $inc: { totalPost: 1 } },
          (err, result) => {
            err && console.log(err);
          }
        );
      }
    );
  });
});
```

## Delete

- db.collection.deleteMany()
- db.collection.deleteOne()

```jsx
app.delete("/delete", function (req, res) {
  req.body._id = parseInt(req.body._id);
  post.deleteOne(req.body, function (err, result) {
    console.log("삭제완료");
    res.status(200).send("성공");
  });
});
```
