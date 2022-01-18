## **API란?**

Application Programming Interface, 서로 다른 프로그램간에 소통할 수 있게 도와주는 통신 규약이다.

'서버와 고객간의 통신 규약'으로 ‘서버에게 요청해서 데이터 가져오는 방법' 이 바로 API다.

## **REST API는 무엇인가**

말그대로 REST한 통신규약(API)이다.REST는 Representational State Transfer로 분산 하이퍼 미디어 시스템을 위한 아키텍쳐 스타일이다. 상호 운용성(interoperability)을 제공하는 것 중에 하나이다. 여기까지 설명을 봤을 때 뜬 구름 잡는 듯한 느낌이 강하다. 그럼 어째서 REST API가 등장했는지에 대해서 알아보자.

## REST API가 왜 나타났을까?

### 어떻게 인터넷에서 정보를 공유할 것인가? (1991)

> 모든 정보를 하이퍼텍스트로 연결한다.

표현 형식은 HTML, 식별자는 URI, 전송 방법은 HTTP를 선택한다.

### 어떻게 기존에 웹을 망가뜨리지 않고 HTTP를 향상시킬 수 있을까?(1998)

> HTTP Object Mode ⇒ REST

Roy T. Fielding은 이미 웹이 급속도로 성장하는 와중에 HTTP를 수정하는 상황에 닥쳤다. 어떻게 하면 기존에 존재하는 웹과 호환성을 맞추면서 HTTP 성능을 향상시킬까 고민하다가 HTTP Object Model를 만든다. 이게 바로 4년 후에 REST(1998) 발표하고 그 후 2년 뒤 2000년에 논문 발표한다.

### API는 언제 등장했을까?(1998)

첫등장은 REST하지 않았다. 마이크로 소프트사에서 1998년도에 SOAP라는 프로토콜을 발표한다. 그 후 2년 뒤 2000년에 Saleforce라는 회사에서 SOAP 프로토콜을 사용한 API가 공개한다. 이게 최초의 API이다.

![image](https://user-images.githubusercontent.com/82145837/149723792-80a7cfb1-ac16-41f5-8215-0f10f613fba5.png)

4년 뒤, 2004년 REST 기법을 사용한 flickr API가 공개된다. 한 눈에 봐도 훨씬 코드가 짧다. 이후 사람들은 SOAP는 복잡하고 규칙이 많고 어렵다고 느껴져서 기피한다. 반대로 REST 인기는 급속도로 성장한다.

### 대REST API 시대?

SOAP와 대결에서 REST는 완전히 승리했고 모두 REST API를 사용하는 시대가 왔다. 하지만 정작 REST를 정의한 Roy Fielding은 현재 존재하는 대부분의 REST API가 REST하지 않다고 한다. REST는 위에서 설명했듯이 아키텍쳐 스타일이다. 그럼 아키텍쳐 스타일은 제약 조건들의 집합이다. 제약 조건을 모두 지켜야 REST를 따른다고 말할 수 있다.

## REST API의 조건

이 조건은 6가지로 구성되어 있다. 오늘날 웹은 HTTP만 잘 따라도 대부분 조건을 지킬 수 있다. 문제는 Uniform Interface다.

### **1. Uniform Interface**

- Resource Indentifier(URI)
  - URI 이름짓기 관습
    - 단어들을 동사보다는 명사 위주로 구성함
    - 응용해서 다른 정보들을 쉽게 가져올 수 있을 정도로 일관성 있음
    - 대충 봐도 어떤 정보가 들어올지 예측이 가능함
    - 띄어쓰기는 언더바\_대신 대시-기호-사용
    - 파일 확장자 쓰지 말기 (.html 이런거)
    - 하위 문서들을 뜻할 땐 / 기호를 사용함 (하위폴더같은 느낌)
- Resource Representations
- Self-Descriptive Message
  메세지가 스스로를 설명해야 한다 → 메세지가 간결하고 예측 가능해야한다.
- HATEOAS(**H**ypermedia **A**s **T**he **E**ngine **O**f **A**pplication **S**tate)
  애플리케이션 상태는 Hyperlink를 이용해서 전이가 되어야한다

이 Uniform Interface를 위한 네 가지 조건 중 밑의 Self-Descriptive Message와 HATEOAS가 대부분 지켜지지 않고 있다. 이유는 API가 대부분 json 형식으로 전달되기 때문이다.

```jsx
"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
```

이러한 형태의 json 파일이 있다면 어떤 todo list를 위한 제목인지, 영화 제목인지 파일 자체로 파악되지 않는다. 이 문제를 해결하기 위해서는 link, location 헤더를 사용하면 된다.

### **2. Client-server 역할 구분**

클라이언트와 서버를 서로 의존하지 않고 독립적으로 성장하게 한다. UI, DB, Server를 분리하여 확장성을 높인다.

### **3. Stateless**

각각의 요청은 독립적으로 처리되야 한다. 예를들면 요청1이 성공해야 요청2를 보내주는 요청 간의 의존성이 존재하는 코드는 작성해서 안된다. 요청에 필요한 모든 정보를 실어 보내는 것이 좋다.

### **4. Cacheable**

요청에 응답한 자료는 캐싱이 가능해야한다. 캐싱이 가능하다고 표시해주거나, 캐싱 기간을 명시해줘야한다. 클라이언트에 동일한 요청이 들어왔을 때 응답 데이터를 재사용해줘야 한다. 보통 이런 일은 브라우저가 알아서 해주기 때문에 크게 신경쓸 필요 없다.

### **5. Layered System**

여러 단계를 거쳐서 요청을 처리해야한다. DB 저장하는 곳, 요청 처리하는 곳 이런 계층이 있다면 이 둘이 마음대로 상호작용 할 수 없도록 한다.

### **6. Code-on-Demand (optional)**

서버는 고객에게 실제 실행 가능한 코드를 전송해줄 수도 있다.

## 요약

- REST는 REST한 조건 6가지를 따르는 HTTP 통신 규약이다.
- 오늘날 대부분 REST API는 사실 REST를 따르고 있지 않다.
- REST의 제약 조건 중 특히 Self-decriptive와 HATEOAS를 만족하지 못한다.
- REST는 긴 시간에 걸쳐 진화하는 웹 어플리케이션을 위한 것
- REST를 따를것 인지는 API를 설계하는 사람이 스스로 판단해야 한다.
- REST를 따르겠다면, Self-descriptive와 HATEOAS를 만족해야한다.
  - Self-decritpive는 custom media type이나 profile link relation등으로 가능하다.
  - HATEOAS는 HTTP 헤더나 본문에 링크를 담아 만족시킨다
- REST를 따르지 않겠다면, “REST를 만족하지 않는 REST API”의 명칭을 결정해야한다.
  - HTTP API라고 부르던지 이대로 REST API라고 부르던지(대신 REST API 제작자 roy가 싫어한다.)

---

**참고자료**

[Day1, 2-2. 그런 REST API로 괜찮은가](https://www.youtube.com/watch?v=RP_f5dMoHFc)
