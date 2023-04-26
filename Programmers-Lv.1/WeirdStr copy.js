//? [문자열 나누기]
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>
//*     s=>	                result=>	
//*     "banana"	        3
//*     "abracadabra"	    6
//*     "aaabbaccccabba"	3

//::::

function solution(s) {
    let stack = [];
    let result = 0;
    const arr = s.split('')

    arr.forEach((word) => {
        stack.push(word);
        let equal = stack.filter((x) => x === stack[0]);
        let different = stack.filter((x) => x !== stack[0]);

        if (equal.length === different.length) {
            result++;
            stack = [];
        }
    });
    if (stack.length > 0) result++
    return result
}
console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3

//-------------------------------------------------------------------------------------------