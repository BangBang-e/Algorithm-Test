//? [콜라 문제]
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function solution(a, b, n) {
    let bottle = n;
    let prize = 0;

    while (bottle >= a) {
        prize += Math.floor(bottle / a) * b
        bottle = Math.floor(bottle / a) * b + (bottle % a);

    } return prize;
}
console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9

//-------------------------------------------------------------------------------------------