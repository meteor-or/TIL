# RestfulAPI

생성일: 2022년 1월 3일 오전 10:07

# RestfulAPI

## **API란?**

Application Programming Interface, 서로 다른 프로그램간에 소통할 수 있게 도와주는 통신 규약이다.

'서버와 고객간의 통신 규약'으로 ‘서버에게 요청해서 데이터 가져오는 방법' 이 바로 API다.

## **REST API는 무엇인가**

Representational State Transfer으로 API 디자인 방법입니다.

### **1. Uniform Interface**

- 균일한 인터페이스를 만들자.
- 하나의 URL로는 하나의 데이터를 가져와야한다.
- 간결하고 예측 가능하도록.
- URL 이름짓기 관습을 잘 따라야한다.

### **2. Client-server 역할 구분하기**

### **3. Stateless**

### **4. Cacheable**

### **5. Layered System**

### **6. Code on Demand**

**URL 이름짓기 관습**

- **단어들을 동사보다는 명사 위주로 구성함**
- **응용해서 다른 정보들을 쉽게 가져올 수 있을 정도로 일관성 있음**
- **대충 봐도 어떤 정보가 들어올지 예측이 가능함**
- **띄어쓰기는 언더바\_대신 대시-기호-사용**
- **파일 확장자 쓰지 말기 (.html 이런거)**
- **하위 문서들을 뜻할 땐 / 기호를 사용함 (하위폴더같은 느낌)**
