//? [numberSearch] Daily Coding_no.18
//TODO <문제 설명>
//TODO 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지)
//TODO 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

//! <제한 사항>
//! 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
//! 숫자(digit)는 연속해서 등장하지 않습니다.

//* <입출력 예>
//* str='Hello6 '                           result=1
//* str='Hello6 9World 2,'                  result=2
//* str='Hello6 9World 2, Nic8e D7ay!'      result=2
//* str=''                                  result=0
//* str='Sou2bgPJkS7Lp5r2j6jeWOts8X'        result=2

//::::

function numberSearch(str) {
    let arr = str.split('')
    let count = 0;
    let num = 0;

    if(str.length === 0){
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            continue;
        } else if (isNaN(arr[i])) {
            count++;
        } else {
            num += +arr[i]
        }
    }
    return Math.round(num / count)
}
console.log(numberSearch('Hello6 ')); // 1
console.log(numberSearch('Hello6 9World 2,')); // 2
console.log(numberSearch('Hello6 9World 2, Nic8e D7ay!')); // 2
console.log(numberSearch('')); // 0
console.log(numberSearch('Sou2bgPJkS7Lp5r2j6jeWOts8X')); // 2

//-------------------------------------------------------------------------------------------