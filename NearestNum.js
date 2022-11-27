//? [가까운 수]
//TODO <문제 설명>
//TODO 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는
//TODO 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ array의 길이 ≤ 100
//! 1 ≤ array의 원소 ≤ 100
//! 1 ≤ n ≤ 100
//! 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

//* <입출력 예>
//* array = [3, 10, 28], n = 20, result = 28
//* array = [10, 11, 12], n = 13, result = 12
//::::

function solution(array, n) {
    var answer = 0;
    let minNum = Math.min(...array.map((x) => Math.abs(x - n))); // 배열요소와 입력한 수의 차가 가장 작은 수 구함
    sortArr = array.sort((a, b) => a - b); // 입력한 배열 오름차순으로 정렬
    answer = sortArr.find(a => Math.abs(a - n) === minNum); // 오름차순 배열 요소에 입력값을 뺀 것과 minNum과 같은 수 find
        // [3, 10, 28].find(a =>   [17, 10, 8] === 8 )
    return answer;
}
console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12

//-------------------------------------------------------------------------------------------