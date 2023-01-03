//? [숫자 문자열과 영단어]
//TODO <문제 설명>
//TODO 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때
//TODO 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
//TODO 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
//? 1478 → "one4seveneight"
//? 234567 → "23four5six7"
//? 10203 → "1zerotwozero3"
//TODO 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
//TODO s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ s의 길이 ≤ 50
//! s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
//! return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

//* <입출력 예>
//* s="one4seveneight"	    result=1478
//* s="23four5six7"	        result=234567
//* s="2three45sixseven"	result=234567
//* s="123"	                result=123

//::::

function solution(s) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
    let answer = s;
    while (true) {
        if (!isNaN(answer)) break;
        answer = answer.replace(
            /zero|one|two|three|four|five|six|seven|eight|nine/i,
            (str) => arr.indexOf(str)
        );
    }
    return Number(answer);
}
console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567

//-------------------------------------------------------------------------------------------

function solution2(s) {
    let result = s;
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
    arr.forEach((element, index) => {
        if (result.includes(element)) {
            result = result.replaceAll(element, index);
        }
    });
    return parseInt(+result);
}
console.log(solution2("one4seveneight")); // 1478
console.log(solution2("23four5six7")); // 234567
console.log(solution2("2three45sixseven")); // 234567