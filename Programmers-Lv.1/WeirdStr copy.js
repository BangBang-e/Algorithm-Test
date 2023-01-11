//? [숫자 짝꿍]
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function solution(X, Y) {
    let answer = [];
    let x = [...X].sort((a, b) => b - a);
    let y = [...Y].sort((a, b) => b - a);
    console.log(x)
    console.log(y)



}
console.log(solution("100", "2345")); // "-1"
// console.log(solution("100", "203045")); // "0"
// console.log(solution("100", "123450")); // "10"
// console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"

//-------------------------------------------------------------------------------------------