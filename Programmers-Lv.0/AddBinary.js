//? [이진수 더하기]
//TODO <문제 설명>
//TODO 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때,
//TODO 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! return 값은 이진수를 의미하는 문자열입니다.
//! 1 ≤ bin1, bin2의 길이 ≤ 10
//! bin1과 bin2는 0과 1로만 이루어져 있습니다.
//! bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

//* <입출력 예>	
//* bin1="10",      bin2="11",  	result="101"
//* bin1="1001",    bin2="1111",	result="11000"

//::::

function solution(bin1, bin2) {

    let bin11 = parseInt(bin1, 2);
    let bin22 = parseInt(bin2, 2);
    
    let dec = bin11 + bin22;
    return dec.toString(2);
}
console.log(solution("10", "11")); // "101"
console.log(solution("1001", "1111")); // "11000"

//-------------------------------------------------------------------------------------------