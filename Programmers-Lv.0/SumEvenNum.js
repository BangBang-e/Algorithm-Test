//? [짝수의 합]
//TODO <문제 설명>
//TODO 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을
//TODO return 하도록 solution 함수를 작성해주세요.

//! <제한 사항>
//! 0 < n ≤ 1000

//* <입출력 예>
//* n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
//* n이 4이므로 2 + 4 = 6을 return 합니다.

//::::

function solution(n) {
    var answer = 0;
    for(i=2; i<=n; i+=2){
        answer += i;
    }
    return answer;
}
console.log(solution(10)); // 30
console.log(solution(4)); // 6

//-------------------------------------------------------------------------------------------