//indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. 일치하는 값이 없으면 -1을 반환합니다. 


const paragraph = '우리 집 강아지 탄이는 털이 갈색이다, 탄이';

const searchTerm = '탄이';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`첫 번째 "${searchTerm}" 라는 단어는 문장 ${indexOfFirst}번째에 존재합니다.`);
// expected otput: "The index of the first "dog" from the beginning is 40"

console.log(`두 번째 "${searchTerm}" 는 ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}번째에 존재합니다.`);
