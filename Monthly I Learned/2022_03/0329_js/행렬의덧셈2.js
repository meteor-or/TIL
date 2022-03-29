function solution(arr1, arr2) {
	var answer = [[]];
	return answer;
}

const arr1 = [[1,2],[2,3]]
const arr2 = [[3,4],[5,6]]

const sum = (array1, array2) => {
	return array1.map((item, index) => item.map((innerItme, innerIndex) => innerItme + array2[index][innerIndex]) )
}


console.log(sum(arr1, arr2))

//forEach 각 요소를 순회하면서 콜백을 실행
//map 각 요소를 순회하면서 콜백을 실행하고 실행결과를 모은 새 배열을 return 한다.