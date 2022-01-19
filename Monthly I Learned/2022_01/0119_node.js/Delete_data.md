# Delete_data

생성일: 2022년 1월 13일 오후 2:37

## HTML에서 DELETE 요청하는 방법

delete 요청을 HTML 상에서 불가능하다. from 태그에 method는 POST, GET 두 개 밖에 되지 않는다. Delete, Put은 되지 않는다. 이를 해결하기 위해서 세 가지 방법이 있다. **라이브러리(method-override), AJAX, POST요청한다**. 라이브러리를 사용할 경우는 form에서 DELETE 요청이 가능해진다. 이번에는 Ajax를 통해서

### AJAX란?

> 서버에 요청하는 것을 도와주는 Javascirpt 문법이다. 장점은 새로고침 없이 데이터를 불러올 수 있다.

```jsx
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script>
  $.ajax({
    method : 'DELETE',
    url : '/delete',
    data : '_id: 1'
  }).done(function(result){
    //AJAX 성공시 실행할 코드는 여기
  }).fail(function(err){
    //실패시 실행할 코드는 여기
  });
</script>
```

- ajax 기본 문법이다. [https://api.jquery.com/jquery.ajax/](https://api.jquery.com/jquery.ajax/) 문법 예시는 해당 링크에서 확인 가능하다.

## DELETE시 서버가 해야할 일

### deleteOne 함수 사용해서 DB 데이터 삭제하기

```jsx
(list.ejs)

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script>
  $.ajax({
    method : 'DELETE',
    url : '/delete',
    data : { _id : 1 }
  }).done(function(결과){
    AJAX 성공시 실행할 코드는 여기
  })
</script>
```

```jsx
app.delete("/delete", function (req, res) {
  console.log(req.body);
  req.body._id = parseInt(req.body._id);
  db.collection("post").deleteOne();
});
```

- data에 게시물 id를 담아서 요청을 보내면 req.body에 담긴다. 이때 들어온 값의 \_id의 값이 string으로 들어오기 때문에 정수형으로 변환해야한다.
- 이렇게 코드를 적었을 때 생기는 문제점이 두 가지 있다. 첫 번째는 새로고침 할 때마다 자동적으로 실행된다는 점이고, 두 번째는 스크립트 태그 안에 바로 ajax 코드를 적으면 새로고침 할 때마다 실행된다. 삭제 버튼을 누를 때만 실행시키고 싶으면 제이쿼리 문법을 사용해서 구현한다.

```jsx
$(".delete").click(function () {
  $.ajax({
    method: "DELETE",
    url: "/delete",
    data: { _id: e.target.dataset.id },
  }).done(function (결과) {
    //AJAX 성공시 실행할 코드는 여기
  });
});
```

## JQuery UI 기능 활용 & 여러가지 응답 방법

### 삭제가 되는 눈속임을 주자

```jsx
list.ejs;

$(".delete").click(function (e) {
  $.ajax({
    method: "DELETE",
    url: "/delete",
    data: { _id: e.target.dataset.id },
  })
    .done((result) => {
      console.log("게시글 삭제 성공했어요.");
      $(this).parent("li").fadeOut();
    })
    .fail((xhr, textStatus, errorThrown) => {
      console.log(xhr, textStatus, errorThrown);
    });
});
```

- 게시물을 클릭하면 그 부모 요소인 li가 사라지는 애니메니션을 준다. 만약 오류가 있을 경우 로그로 출력한다.
- `Uncaught TypeError: $(...).parecnt is not a function` 만약 이런 오류가 뜬다면 스크립트 위치 문제다. Jquery, popper, bootstrap을 head 태그 안에 넣는다. Jquery가 Bootstrap 보다 위에 위치해야 한다.

### 응답방법

```jsx
server.js;

app.delete("/delete", function (req, res) {
  req.body._id = parseInt(req.body._id);
  post.deleteOne(req.body, function (err, result) {
    console.log("삭제완료");
    res.status(200).send("성공");
  });
});
```

- status는 응답 코드를 보낼 수 있다.

![Delete_data/Untitled.png](Delete_data%20abbab7ce060e490a8b90615817639059/Untitled.png)

- 응답코드를 통해 어떤 문제인지 파악할 수 있는 오류를 보낼 수 있다.
