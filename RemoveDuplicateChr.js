//? [중복된 문자 제거]
//TODO <문제 설명>
//TODO 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를
//TODO 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ my_string ≤ 110
//! my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
//! 대문자와 소문자를 구분합니다.
//! 공백(" ")도 하나의 문자로 구분합니다.
//! 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

//* <입출력 예>
//* "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.
//* "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

//::::

function solution(my_string) {
    
    let obj = {};
    [...my_string].map((x) => {
        if(!(x in obj)){
            obj[x] = 1;
        }
    })
    return Object.keys(obj).join('');
}
console.log(solution("people")); // "peol"
console.log(solution("We are the world")); // "We arthwold"

//-------------------------------------------------------------------------------------------