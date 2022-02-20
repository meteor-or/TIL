> 문자열을 일정한 구분자로 잘라서 배열로 저장

## String.prototype.split()

```
const str = '우리 집 강아지는 털이 푹신푹신하다.';

const words = str.split(' ');
console.log(words);//Array ["우리", "집", "강아지는", "털이", "푹신푹신하다."]
console.log(words[3]);//강아지는

const chars = str.split('');
console.log(chars[8]); //는

const strCopy = str.split();
console.log(strCopy); //Array ["우리 집 강아지는 털이 푹신푹신하다."]
```
1. **파라미터를 입력하지 않은 경우**   
	  문자열 전체를 length 가 1인 배열에 담아 return
2. **limit 파라미터 값** 지정하기  
	 두 번째 파라미터 값인 limit 지정시, 지정한 개수만큼만 배열 안에 return
