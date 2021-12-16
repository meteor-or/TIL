function solution(numbers, hand) {
  var answer = "";
  let keypad = {
    1: [1, 1],
    2: [2, 1],
    3: [3, 1],
    4: [1, 2],
    5: [2, 2],
    6: [3, 2],
    7: [1, 3],
    8: [2, 3],
    9: [3, 3],
    "*": [1, 4],
    0: [2, 4],
    "#": [3, 4],
  };

  let currentLeftThumb = [1, 4]; //*
  let currentRightThumb = [3, 4]; //#

  numbers.forEach((num) => {
    let numLocation = keypad[num];
    if (numLocation[0] === 1) {
      // keypad 1,4,7,* 누르기
      currentLeftThumb = numLocation;
      answer += "L";
    } else if (numLocation[0] === 3) {
      // keypad 3,6,9,# 누르기
      currentRightThumb = numLocation;
      answer += "R";
    } else if (numLocation[0] === 2) {
      // keypad2,5,8,0 누르기
      let distanceL = getDistance(currentLeftThumb, numLocation);
      let distanceR = getDistance(currentRightThumb, numLocation);
      if (distanceL === distanceR) {
        if (hand === "left") {
          currentLeftThumb = numLocation;
          answer += "L";
        } else if (hand === "right") {
          currentRightThumb = numLocation;
          answer += "R";
        }
      } else if (distanceL < distanceR) {
        currentLeftThumb = numLocation;
        answer += "L";
      } else if (distanceL > distanceR) {
        currentRightThumb = numLocation;
        answer += "R";
      }
    }
  });
  return answer;
  function getDistance(arr1, arr2) {
    let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
    return result;
  }
}
