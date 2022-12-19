//? [배열의 유사도]
//TODO <문제 설명>
//TODO 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어
//TODO 질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ s1, s2의 길이 ≤ 100
//! 1 ≤ s1, s2의 원소의 길이 ≤ 10
//! s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다.
//! s1과 s2는 각각 중복된 원소를 갖지 않습니다.

//* <입출력 예>
//* s1 = ["a", "b", "c"], s2 = ["com", "b", "d", "p", "c"], result = 2
//* s1 = ["n", "omg"], s2 = ["m", "dot"], result = 0

//::::

function solution(s1, s2) {
    const result = s1.filter((x) => s2.includes(x));
    return result.length;
}
console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); // 2
console.log(solution(["n", "omg"], ["m", "dot"])); // 0

//-------------------------------------------------------------------------------------------