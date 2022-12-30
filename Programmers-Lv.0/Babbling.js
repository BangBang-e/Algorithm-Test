//? [옹알이 (1)]
//TODO <문제 설명>
//TODO 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을
//TODO 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때,
//TODO 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ babbling의 길이 ≤ 100
//! 1 ≤ babbling[i]의 길이 ≤ 15
//! babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
//! 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
//! 문자열은 알파벳 소문자로만 이루어져 있습니다.

//* <입출력 예>
//* babbling=["aya", "yee", "u", "maa", "wyeoo"]                result=1
//* babbling=["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]        result=3

//::::

function solution(babbling) {
    answer = 0;
    const arr = ["aya", "ye", "woo", "ma"];

    for (let i = 0; i < babbling.length; i++) {
        let tempStr = babbling[i];
        let rpCnt = 0;
        for (let j = 0; j < arr.length; j++) {
            if (tempStr.includes(arr[j])) {
                tempStr = tempStr.replace(arr[j], "_");
                rpCnt++;
            }
        }
        let compareStr = "";
        for (let k = 0; k < rpCnt; k++) {
            compareStr += "_";
        }
        if (tempStr === compareStr) {
            answer++;
        }
    }
    return answer;
}
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3

//-------------------------------------------------------------------------------------------

//? [2022.12.30]
function solution2(babbling) {
    let words = ["aya", "ye", "woo", "ma"];
    let newArr = [];
    babbling.forEach((x) => {
        words.forEach((y) => {
            if (x.includes(y)) {
                x = x.replace(y, 1);
                newArr.push(x);
            }
        });
    });
    return newArr.filter((el) => !isNaN(Number(el))).length;
}
console.log(solution2(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution2(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3