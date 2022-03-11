try {
  nonExistentFunction();
	//이곳의 코드를 실행
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
	//에러가 발생하면, 여기부터 싱행
	//err는 에러 객체
}	finally{
	//에러 발생 여부와 상관없이 try/cathch 이후에 실행됨
}

/**
 * 1. 먼저 try 문이 실행
 * 2. 에러가 없다면, try 마지막 줄까지 실행되고, catch 블록은 건너뜀
 * 3. 에러가 있다면, try 안 코드 실행이 중단되고, catch 블록으로 제어 흐름이 넘어감 
 */