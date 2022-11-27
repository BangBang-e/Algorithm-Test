//? [배열 원소의 길이]
//TODO <문제 설명>
//TODO 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를
//TODO 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ strlist 원소의 길이 ≤ 100
//! strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

//* <입출력 예>
//* ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
//* ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.

//::::

function solution(strlist) {
    var answer = [];
    for(el of strlist){
        answer.push(el.length);
    }
    return answer;
}
console.log(solution(["We", "are", "the", "world!"])); // [2, 3, 3, 6]
console.log(solution(["I", "Love", "Programmers."])); // [1, 4, 12]

//-------------------------------------------------------------------------------------------