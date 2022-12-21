//? [로그인 성공?]
//TODO <문제 설명>
//TODO 머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와
//TODO 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를
//TODO return하도록 solution 함수를 완성해주세요.
//TODO * 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
//TODO * 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

//! <제한 사항>
//! 회원들의 아이디는 문자열입니다.
//! 회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.
//! 회원들의 패스워드는 숫자로 구성된 문자열입니다.
//! 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
//! id_pw의 길이는 2입니다.
//! id_pw와 db의 원소는 [아이디, 패스워드] 형태입니다.
//! 1 ≤ 아이디의 길이 ≤ 15
//! 1 ≤ 비밀번호의 길이 ≤ 6
//! 1 ≤ db의 길이 ≤ 10
//! db의 원소의 길이는 2입니다.

//* <입출력 예>
//* id_pw=  ["meosseugi", "1234"]
//* db=     [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]
//* result= "login"

//* id_pw=  ["programmer01", "15789"]
//* db=     [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]
//* result= "wrong pw"

//* id_pw=  ["rabbit04", "98761"]
//* db=     [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]
//* result= "fail"

//::::

function solution(id_pw, db) {
    let filteredDb = db.filter((el) => id_pw[0] === el[0])
    if (filteredDb.length === 0) return 'fail'
    for (let el of filteredDb) {
        if (el[1] === id_pw[1]) return 'login'
        else return 'wrong pw'
    }
}

console.log(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]])); // "login"
console.log(solution(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]])); // "wrong pw"
console.log(solution(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]])); // "fail"

//-------------------------------------------------------------------------------------------