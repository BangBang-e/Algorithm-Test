//? [대문자와 소문자]
//TODO <문제 설명>
//TODO 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로
//TODO 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ my_string의 길이 ≤ 1,000
//! my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

//* <입출력 예>
//* my_string="cccCCC", result="CCCccc"
//* my_string="abCdEfghIJ", result="ABcDeFGHij"

//::::

function solution(my_string) {
    let result = '';
    let arr = my_string.split('');

    for(let i=0; i<arr.length; i++){
        if(arr[i].match(new RegExp(/^[A-Z]/)) !== null){
            result += arr[i].toLowerCase();
        } else if(arr[i].match(new RegExp(/^[a-z]/)) !== null){
            result += arr[i].toUpperCase();
        }
    }
    return result;
}

console.log(solution("cccCCC")) // "CCCccc"
console.log(solution("abCdEfghIJ")) // "ABcDeFGHij"

//-------------------------------------------------------------------------------------------