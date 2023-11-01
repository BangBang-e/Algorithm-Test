//? [모음사전]
//TODO <문제 설명>
//TODO 사전에 알파벳 모음 'A', 'E', 'I', 'O', 'U'만을 사용하여 만들 수 있는, 길이 5 이하의 모든 단어가 수록되어 있습니다.
//TODO 사전에서 첫 번째 단어는 "A"이고, 그다음은 "AA"이며, 마지막 단어는 "UUUUU"입니다.
//TODO 단어 하나 word가 매개변수로 주어질 때, 이 단어가 사전에서 몇 번째 단어인지 return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! word의 길이는 1 이상 5 이하입니다.
//! word는 알파벳 대문자 'A', 'E', 'I', 'O', 'U'로만 이루어져 있습니다.

//* <입출력 예>	
//*     word	    result
//*     "AAAAE"	    6
//*     "AAAE"	    10
//*     "I"	        1563
//*     "EIO"	    1189

//::::

let idx = 0;
const result = {};
const vowels = [..."AEIOU"];

function solution(word) {
    dfs("", 0);
    return result[word];
}

function dfs(word, length) {
    if (length > 5) return;
    result[word] = idx++;
    vowels.forEach((vowel) => {
        dfs(word + vowel, length + 1);
    });
};

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189

//-------------------------------------------------------------------------------------------
