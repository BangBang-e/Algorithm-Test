//? [수박수박수박수박수박수?]
//TODO <문제 설명>
//TODO 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
//TODO 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

//! <제한 사항>
//! n은 길이 10,000이하인 자연수입니다.

//* <입출력 예>
//* n=3	return="수박수"
//* n=4	return="수박수박"

//::::

function solution(n) {
    let answer = ""
    while (answer.length !== n) {
        answer.length % 2 === 1 ? answer += "박" : answer += "수"
    }
    return answer
}
console.log(solution(3)); // "수박수"
console.log(solution(4)); // "수박수박"
console.log(solution(12)); // "수박수박수박수박수박수박"

//-------------------------------------------------------------------------------------------