//? [외계행성의 나이]
//TODO <문제 설명>
//TODO 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
//TODO 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
//TODO a는 0, b는 1, c는 2, ..., j는 9입니다.
//TODO 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
//TODO 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! age는 자연수입니다.
//! age ≤ 1,000
//! PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.

//* <입출력 예>
//* age가 23이므로 "cd"를 return합니다.
//* age가 51이므로 "fb"를 return합니다.
//* age가 100이므로 "baa"를 return합니다.

//::::

function solution(age) {
    var answer = '';
    const alphabet = 'abcdefghij'
    return [...String(age)].map((elem)=> alphabet[elem]).join('');
}
console.log(solution(23)); // "cd"
console.log(solution(51)); // "fb"
console.log(solution(100)); // "baa"

//-------------------------------------------------------------------------------------------