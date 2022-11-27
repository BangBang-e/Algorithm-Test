//? [한 번만 등장한 문자]
//TODO <문제 설명>
//TODO 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로
//TODO 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
//TODO 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

//! <제한 사항>
//! 0 < s의 길이 < 1,000
//! s는 소문자로만 이루어져 있습니다.

//* <입출력 예>
//* s = "abcabcadc", result = "d"
//* s = "abdc", result = "abcd"
//* s = "hello", result = "eho"
//::::

function solution(s) {
    let obj = {};

    for (i = 0; i < s.length; i++) {    // 빈 객체에 각 문자를 key값으로,
        if (obj[s[i]] === undefined) {  // 문자의 갯수를 value값으로 하는 
            obj[s[i]] = 0;              // 프로퍼티 생성
        }                               // obj = {h:1, e:1, l:2, o:1}
        obj[s[i]]++
    }
    for (let elem in obj) {   // 객체를 순회하며
        if (obj[elem] > 1) {  // value값이 1이상인 프로퍼티 삭제
            delete obj[elem]  // obj = {h:1, e:1, o:1}
        }
    }
    const keysOfObj = Object.keys(obj); // 객체에서 key값만 추출 -> ['h', 'e', 'o']
    return keysOfObj.sort().join('')    // 추출한 key 오름차순으로 정렬 후 문자열로 join
}
console.log(solution("hello")); // "eho"

//-------------------------------------------------------------------------------------------

//? [더 간단한 풀이!]

function anotherWay(s) {
    let res = []; // 빈 배열 선언
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    // 문자열 요소별로 순회 -> 정방향 인덱스 순서와 역방향 인덱스 순서가 같다면 빈 배열에 push -> ['a', 'l', 'e']
    // ex) ['a', 'p', 'p', 'l', 'e'] -> a의 정방향과 역방향으로 세어도 s[0], true
    // ex) ['a', 'p', 'p', 'l', 'e'] -> p의 정방향은 s[1], 역방향은 s[2], false
    return res.sort().join(''); // 오름차순으로 정렬 후 문자열로 join
}
console.log(anotherWay("apple"));

//-------------------------------------------------------------------------------------------