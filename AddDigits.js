//? [자릿수 더하기]
//TODO <문제 설명>
//TODO 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 0 ≤ n ≤ 1,000,000

//* <입출력 예>
//* 1234 -> 1 + 2 + 3 + 4 = 10을 return합니다.
//* 930211 -> 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

//::::

function solution(n) {
    var answer = 0;
    for (let i = 0; i < String(n).length; i++) { // 문자형으로 변환한 뒤 길이만큼 순회
        answer += Number(String(n)[i]); // 각 요소를 숫자로 다시 변환하여 answer에 더함
    }
    return answer;
}
console.log(solution(1234)); // 10
console.log(solution(930211)); // 16

//-------------------------------------------------------------------------------------------
