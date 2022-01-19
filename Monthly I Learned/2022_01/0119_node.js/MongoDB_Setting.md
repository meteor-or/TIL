# MongoDB_Setting

생성일: 2022년 1월 3일 오전 10:43

# Mongo DB Atlas 가입+초기셋팅

[MongoDB Atlas: Cloud Document Database](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_apac_rlsamulti_search_core_brand_atlas_desktop_rlsa&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646476&adgroup=131761130772&gclid=Cj0KCQiAt8WOBhDbARIsANQLp948b20k-WcPTYIswi5cBmvi7KanaqhwI4aefECZ4GYoG_g-I2F6DmcaAqgbEALw_wcB)

- 구글에 Mongodb atlas 홈페이지를 방문, 회원가입

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985-1.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985-1.png)

- 무료 티어를 선택한다.

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-2.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-2.png)

- 서버 위치를 한국과 가장 가까운 곳으로 설치한다.

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-2.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-2.png)

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985.png)

- Database Access 메뉴에서 DB 접속용 아이디/비번을 생성한다.

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-1.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-1.png)

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-1.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-1.png)

- Network Access 메뉴에서 IP를 추가한다.

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985-2.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%985-2.png)

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-3.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%986-3.png)

![https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-3.png](https://codingapple.com/wp-content/uploads/2020/01/%EC%BA%A1%EC%B2%987-3.png)

- Database / collection 만든다.

## db와 서버 연결

![Untitled](MongoDB_Setting/Untitled.png)

- 메인 페이지에서 Connect 버튼을 클릭하고 Connect your application으로 들어간다.

![Untitled](MongoDB_Setting/Untitled%201.png)

- 해당 example코드를 복사해서 그대로 server.js에 붙여 넣는다

```jsx
const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://metemon0515:JPM9zdmbvIzPfPyZ@cluster0.qcffm.mongodb.net/todoapp?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  err && console.log(err);

  app.listen("8081", function () {
    console.log("listening on 8081");
  });
});
```
