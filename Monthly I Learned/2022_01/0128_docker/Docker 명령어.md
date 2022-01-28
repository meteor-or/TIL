# Docker 명령어

Created: 2022년 1월 28일 오전 9:54
Tag: devops

![Untitled](img/Untitled.png)

## docker run | 컨테이너 생성하기

```jsx
docker run <image> <command>

docker run alpine ls
docker run hello-world ls
```

- docker → 도커 클라이언트 언급
- run → 컨테이너 생성 및 실행
- <image> → 해당 컨테이너를 위한 이미지
- <command> → 이미지가 가진 시작 명령어를 무시하고 이 커맨드를 실행

`docker run alpine ls`

![Untitled](img/Untitled%201.png)

- `ls` 는 현재 디렉토리의 파일 리스트를 보여준다.

`docker run hello-world ls`

![Untitled](img/Untitled%202.png)

- hello-world에는 `ls` 커맨드가 존재하지 않기 때문에 실행되지 않는다. 이처럼 한 이미지에는 파일 뿐만 아니라 커맨드까지 포함되어 있다.

## docker ps | 작동중인 컨테이너 보기

```jsx
docker ps
```

![Untitled](img/Untitled%203.png)

1. **CONTAINER ID**

   컨테이너의 고유한 아이디 값

2. **IMAGE**

   컨테이너 생성시 사용한 도커 이미지

3. **COMMAND**

   컨테이너 시작시 실행될 명령어

   대부분 이미지에 내장되어 있으므로 별도 설정 X

4. **CREATED**

   컨테이너가 생성된 시간

5. **STATUS**

   컨테이너의 상태

6. **PORTS**

   컨테이너가 개방한 포트와 호스트에 연결한 포트

7. **NAMES**

   컨테이너 고유한 이름

   컨테이너 생성시 —name 옵션으로 이름을 설정하지 않으면 임의의 값이 설정된다.

`docker ps -a`

- 사용중이지 않은 컨테이너까지 보기

## docker create, docker start | 컨테이너 시작

```jsx
docker create <이미지 이름>
docker start <시작할 컨테이너 아이디/ 이름>
```

![Untitled](img/Untitled%204.png)

`docker run`은 `docker create`와 `docker start` 이 하는 기능을 모두 포함한다. docker create시 이미지를 읽어서 파일 스냅샷을 하드디스크 안에 넣어준다. docker start시 시작시 실행될 명령어까지 컨테이너 안에 들어가서 실행된다.

![Untitled](img/Untitled%205.png)

이러면 밑에 생성된 컨테이너의 아이디가 나온다. 이 아이디를 복사해서 `docker strart <컨테이너 아이디>`로 해주면 docker가 실행된다.

## docker stop vs docker kill | 컨테이너 중지

```jsx
docker stop <중지할 컨테이너 아이디/이름>
docker kill <중지할 컨테이너 아이디/이름>
```

![Untitled](img/Untitled%206.png)

- stop은 천천히 시스템을 중지시킨다면, kill은 기다리지 않고 바로 컨테이너를 중지시킨다. 강제종료 같은 느낌인듯

## docker rm | 컨테이너 삭제

```jsx
docker rm <중지할 컨테이너 아이디/이름>
```

![Untitled](img/Untitled%207.png)

`docker system prune` : 한번에 컨테이너, 이미지, 네트워크 삭제

## docker exec | 실행중인 컨테이너에 명령어 전달

```jsx
docker exec -it <컨테이터아이디> <명령어>

docker exec -it <컨테이터아이디> <sh bash zsh poswershell>

docker exec -i -t cbioportal-database-container bash
```

- `docker run` vs `docker exec`
  - `docker run`은 새로운 컨테이너를 만들어서 실행
  - `docker exec`는 이미 실행중인 컨테이너에 명령어를 전달
- 한 컨테이너에 다른 명령어를 사용할 경우 `docker exec -it <특정컨테이너아이디> <명령어>` 이 긴 명령어를 계속 적어야한다.
- 예를 들면 `docker exec -it <특정컨테이너아이디> ls` `docker exec -it <특정컨테이너아이디> echo "hello"` 이런 식으로 `docker exec -it <특정컨테이너>` 가 반복된다.
- 이걸 해결하려면 <명령어> 부분에 sh를 적어주면 된다. 꼭 sh가 아니라 bash, powersell, zsh 등 본인이 원하는 터미널로 들어갈 수 있다.

![Untitled](img/Untitled%208.png)

- `#`이 나타나면 성공이다. 여기서 바로 해당 컨테이너에서 명령어를 입력할 수 있다.
