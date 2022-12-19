//? [compressString] Daily Coding_no.20
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function compressString(str) {
    let count = 1;
    let result = ''
    // 반복되는지 확인 후 count세기
    // 3글자 이상 연속될 때 -> `${count}${str[i]}`
    // 그 외일 때 -> 1번인지 2번인지 갯수 만큼 추가 ex. a, bb

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++; 
        }else if (count >= 3) {
            result += `${count}${str[i]}`
            count = 1;
        }else if(count <= 2){
            result += str[i].repeat(count)
            count = 1;
        }
    }
    return result;
}
console.log(compressString('abc')); // abc
console.log(compressString('wwwggoppopppp')); // 3wggoppo4p
console.log(compressString('EQTWVOQQQVDVRC')); // EQTWVO3QVDVRC

//-------------------------------------------------------------------------------------------