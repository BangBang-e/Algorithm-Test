//? [팩토리얼]
//TODO <문제 설명>
//TODO i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
//TODO 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
//TODO 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 0 < n ≤ 3,628,800

//* <입출력 예>
//* 10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.
//* 3! = 6, 4! = 24입니다. n이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.
//::::

function solution(n) {
    var answer = 0;
    let f = 1;
    let i = 1;
    while(true){
        f *= i; // f * i++ 반복
        if(f > n)break; // n 이하일 때 까지
        i++;
        answer++; // 횟수 카운트 === 조건을 만족하는 가장 큰 정수
    }
    return answer;
}
console.log(solution(3628800)); // 10
console.log(solution(7)); // 3

//-------------------------------------------------------------------------------------------