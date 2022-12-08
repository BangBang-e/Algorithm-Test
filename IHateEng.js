//? [영어가 싫어요]
//TODO <문제 설명>
//TODO 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때,
//TODO numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

//! <제한 사항>
//! numbers는 소문자로만 구성되어 있습니다.
//! numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
//! 1 ≤ numbers의 길이 ≤ 50
//! "zero"는 numbers의 맨 앞에 올 수 없습니다.

//* <입출력 예>
//* numbers="onetwothreefourfivesixseveneightnine"      result=123456789
//* numbers="onefourzerosixseven"	                    result=14067

//::::

//? [구조분해할당 활용방법]

function solution(numbers) {
    const numArr = [
        ["zero", 0],
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9],
    ];
    while (isNaN(Number(numbers))) {
        numArr.map(([key, value]) => {
            numbers = numbers.replace(key, value);
        })
    }
    return +numbers;
}
console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067

//-------------------------------------------------------------------------------------------

//? [일반 객체 활용방법]

function otherway(numbers) {
    const numberObj = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    while (isNaN(Number(numbers))) {
        Object.keys(numberObj).map(el => {
            numbers = numbers.replace(el, numberObj[el]);
        })
    }
    return +numbers;
}
console.log(otherway("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(otherway("onefourzerosixseven")); // 14067

//-------------------------------------------------------------------------------------------