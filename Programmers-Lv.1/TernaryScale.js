//? [3진법 뒤집기]
//TODO <문제 설명>
//TODO 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를
//TODO return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! n은 1 이상 100,000,000 이하인 자연수입니다.

//* <입출력 예>
//* n=45	result=7
//* n=125	result=229

//::::

function solution(n) {
    let arr = n.toString(3).split('').reverse().join('')
    return parseInt(arr, 3)
}
console.log(solution(45)); // 7
console.log(solution(125)); // 229

//-------------------------------------------------------------------------------------------