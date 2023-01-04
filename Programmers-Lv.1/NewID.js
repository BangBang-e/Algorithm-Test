//? [신규 아이디 추천]
//TODO <문제 설명>
//TODO 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다.
//TODO "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때,
//TODO 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
//TODO 다음은 카카오 아이디의 규칙입니다.
//? 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
//? 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
//? 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
//? 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
//? 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
//? 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//?      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
//? 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
//TODO 신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때,
//TODO "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

//! <제한 사항>
//! new_id는 길이 1 이상 1,000 이하인 문자열입니다.
//! new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
//! new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.

//* <입출력 예>
//*	new_id="...!@BaT#*..y.abcdefghijklm"
//*	result="bat.y.abcdefghi"

//*	new_id="z-+.^."
//*	result="z--"

//*	new_id="=.="
//*	result="aaa"

//*	new_id="123_.def"
//*	result="123_.def"

//*	new_id="abcdefghijklmn.p"
//*	result="abcdefghijklmn"

//::::

function solution(new_id) {
    const regExp = /[0-9a-z-._]/g
    let result = new_id.toLowerCase()
        .match(regExp).join('')
        .replace(/[.]{2,}/g, '.')
        .replace(/^[.]|[.]$/g, '');
    if (result === '') result = 'a';
    if (result.length > 15) {
        result = result.slice(0, 15);
        if (result[14] === '.') return result.slice(0, 14)
    }
    while (result.length <= 2) {
        result += result[result.length - 1];
    }
    return result;
}
console.log(solution("...!@BaT#*..y.abcdefghijklm")); // "bat.y.abcdefghi"
console.log(solution("z-+.^.")); // "z--"
console.log(solution("=.=")); // "aaa"
console.log(solution("123_.def")); // "123_.def"
console.log(solution("abcdefghijklmn.p")); // "abcdefghijklmn"

//-------------------------------------------------------------------------------------------