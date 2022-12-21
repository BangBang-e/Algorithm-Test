//? [숫자 비교하기]
//TODO <문제 설명>
//TODO 정수 num1과 num2가 매개변수로 주어집니다.
//TODO 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 0 ≤ num1 ≤ 10,000
//! 0 ≤ num2 ≤ 10,000

//* <입출력 예>
//* num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.
//* num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.
//* num1이 7이고 num2가 99이므로 다릅니다. 따라서 -1을 return합니다.

//::::

function solution(num1, num2) {
    var answer = 0;
    num1 === num2 ? answer = 1 : answer = -1;
    // 삼항 연산자를 사용하여 num1 과 num2가 같은지 비교 후
    // true일 시 answer = 1, false일 시 answer = -1
    return answer;
}
console.log(solution(2, 3)); // -1
console.log(solution(11, 11)); // 1

//-------------------------------------------------------------------------------------------