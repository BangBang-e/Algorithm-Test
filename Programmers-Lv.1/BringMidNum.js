//? [가운데 글자 가져오기]
//TODO <문제 설명>
//TODO 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
//TODO 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

//! <제한 사항>
//! s는 길이가 1 이상, 100이하인 스트링입니다.

//* <입출력 예>
//*   s=>     	return=>
//*   "abcde"	"c"
//*   "qwer"	"we"

//::::

function solution(s) {
    let arr = s.split('');
    if (arr.length % 2 === 0) {
        return arr.splice(Math.ceil((s.length / 2) - 1), 2).join('')
    } else return arr[Math.ceil(s.length / 2) - 1]
}
console.log(solution("abcde")); // "c"
console.log(solution("qwer")); // "we"

//-------------------------------------------------------------------------------------------