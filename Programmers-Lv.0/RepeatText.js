//? [문자 반복 출력하기]
//TODO <문제 설명>
//TODO 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는
//TODO 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 2 ≤ my_string 길이 ≤ 5
//! 2 ≤ n ≤ 10
//! "my_string"은 영어 대소문자로 이루어져 있습니다.

//* <입출력 예>
//* my_string = "hello", n = 3, result = "hhheeellllllooo"

//::::

function solution(my_string, n) {
    var answer = '';
    
    let arr = my_string.split(''); // 문자열을 각 글자단위로 쪼갠다. -> ['h', 'e', 'l', 'l', 'o']
    answer = arr.map(x => x.repeat(n)).join(''); // 배열의 각 요소를 n만큼 반복하고, 문자열로 합친다.
    return answer;
}
console.log(solution("hello", 3)); // "hhheeellllllooo"

//-------------------------------------------------------------------------------------------