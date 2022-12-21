//? [문자열 정렬하기 (1)]
//TODO <문제 설명>
//TODO 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라
//TODO 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

//! <제한 사항>
//! 1 ≤ my_string의 길이 ≤ 100
//! my_string에는 숫자가 한 개 이상 포함되어 있습니다.
//! my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

//* <입출력 예>
//* my_string = "hi12392", result = [1, 2, 2, 3, 9]
//* my_string = "p2o4i8gj2", result = [2, 2, 4, 8]
//* my_string = "abcde0", result = [0]

//::::

function solution(my_string) {

    return [...my_string].map((x) => +x).filter((x) => !isNaN(x)).sort();
} // return [배열로 변환].map(각 요소 숫자형으로 변환).filter(NaN이 아닌 요소만 걸러냄).sort(오름차순으로 정렬);
console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(solution("abcde0")); // [0]

//-------------------------------------------------------------------------------------------