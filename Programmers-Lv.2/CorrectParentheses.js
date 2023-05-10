//? [올바른 괄호]
//TODO <문제 설명>
//TODO 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.
//TODO 예를 들어
//TODO "()()" 또는 "(())()" 는 올바른 괄호입니다.
//TODO ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
//TODO '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고,
//TODO 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

//! <제한 사항>
//! 문자열 s의 길이 : 100,000 이하의 자연수
//! 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

//* <입출력 예>	
//* s=>	            answer=>
//* "()()"	        true
//* "(())()"	    true
//* ")()("	        false
//* "(()("	        false

//::::

function solution(s) {
    const arr = s.split("");
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] === "(" ? count++ : count--;
        if (count < 0) return false;
    }
    return count === 0 ? true : false;
}
console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false

//-------------------------------------------------------------------------------------------

// [처음 풀이]
// function solution(s) {
//     const arr = s.split("");
//     let left = 0;
//     let right = 0;
//     if (arr[0] === ")" || arr[arr.length - 1] === "(") return false;

//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] === "(") {
//             left++;
//         } else if (arr[i] === ")") {
//             right++;
//         }
//     }
//     if (left === right) return true;
//     else return false;
// }