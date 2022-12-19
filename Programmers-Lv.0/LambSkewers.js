//? [양꼬치]
//TODO <문제 설명>
//TODO 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
//TODO 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
//TODO 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면
//TODO 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 0 < n < 1,000
//! n / 10 ≤ k < 1,000
//! 서비스로 받은 음료수는 모두 마십니다.

//* <입출력 예>
//* 10인분을 시켜 서비스로 음료수를 하나 받아 총 10 * 12000 + 3 * 2000 - 1 * 2000 = 124,000원입니다.
//* 64인분을 시켜 서비스로 음료수를 6개 받아 총 64 * 12000 + 6 * 2000 - 6 * 2000 =768,000원입니다.
//::::

function solution(n, k) {
    var answer = 0;
    answer = (n * 12000) + ((k - Math.floor(n / 10)) * 2000);
    return answer;
}
console.log(solution(10, 3)); // 124000
console.log(solution(64, 6)); // 768000

//-------------------------------------------------------------------------------------------