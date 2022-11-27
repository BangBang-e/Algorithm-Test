//? [직각삼각형 출력하기]
//TODO <문제 설명>
//TODO "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
//TODO 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

//! <제한 사항>
//! 1 ≤ n ≤ 10

//* <입출력 예>
//* 3
//* n이 3이므로 첫째 줄에 * 1개, 둘째 줄에 * 2개, 셋째 줄에 * 3개를 출력합니다.

//::::

// readline === Readable Stream에서 한 번에 한 줄 씩 데이터를 읽기 위한 인터페이스를 제공하는 모듈
const readline = require('readline'); // readline 모듈 불러오기
const rl = readline.createInterface({ // 인터페이스 생성하기
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' '); // <입력받는 값을 처리하는 코드>
}).on('close', function () {
    // console.log(Number(input[0]));
    for (let i = 0; i < Number(input[0]); i++) { // <입력이 끝나고 실행할 코드>
        console.log('*'.repeat(i + 1)) // += *로 input만큼 반복
    }
});
// <입력 부분>

// 1. rl.on(): 인터페이스가 가지는 on()메서드를 사용해 이벤트와 콜백함수를 전달합니다.
//    위 코드에서 사용된 이벤트로는 "line" 이벤트와 출력 부분에 사용하는 "close" 이벤트가 있습니다.
// 2. “line”: 입력받는 값을 한 줄씩 읽어 문자열 타입으로 전달하는 역할 하는 이벤트입니다.
// 3. <입력 받는 값을 처리하는 코드>: "line" 이벤트로 받은 내용을 적절하게 처리하는 코드입니다.
// 4. rl.close(): 인터페이스를 종료함으로써 무한히 입력받는 것을 방지합니다.
//    즉 rl.close()가 호출되면 입력이 끝났다는 것이고, 다음에 "close"이벤트를 발생시켜
//    입력값을 활용하여 출력값을 도출하는 코드를 작성하게 됩니다.

//::::

// <출력 부분>

// 1. "close": 더이상 입력되는 값이 없을 때 실행되는 이벤트입니다.
// 2. <입력이 끝나고 실행할 코드>: 입력이 종료되었음을 알리는
//    "close"이벤트가 호출된 다음 입력값을 활용해 출력값을 도출하는 코드를 작성합니다.

//-------------------------------------------------------------------------------------------

//? [별 찍기 (1)]

function starOutput1(input) {
    let output = '';
    for (let i = 1; i <= Number(input); i++) {
        output += ("*".repeat(i) + '\n')
    }
    return output;
}
console.log(starOutput1("3"))
// * 
// ** 
// ***

//-------------------------------------------------------------------------------------------

//? [별 찍기 (2)]

function starOutput2(input) {
    let output = '';
    for (let i = 1; i <= Number(input); i++) {
        output += (" ".repeat(input[0] - i) + "*".repeat(i) + '\n')
    }
    return output;
}
console.log(starOutput2("3"))
//   *
//  **
// ***

//-------------------------------------------------------------------------------------------

//? [별 찍기 (3)]

function starOutput3(input) {
    let output = '';
    for (let i = 0; i < Number(input); i++) {
        output += ("*".repeat(input[0] - i) + '\n')
    }
    return output;
}
console.log(starOutput3("3"))
// ***
// **
// *

//-------------------------------------------------------------------------------------------

//? [별 찍기 (4)]

function starOutput4(input) {
    let output = '';
    for (let i = 0; i < Number(input); i++) {
        output += (" ".repeat(i) + "*".repeat(input[0] - i) + '\n')
    }
    return output;
}
console.log(starOutput4("3"))
// ***
//  **
//   *

//-------------------------------------------------------------------------------------------

//? [별 찍기 (5)]

function starOutput5(input) {
    let output = '';
    for (let i = 1; i <= input; i++) {
        output += ' '.repeat(input[0] - i) + '*'.repeat(i * 2 - 1) + '\n'
    }
    return output;
}
console.log(starOutput5("3"))
//   *
//  ***
// *****

//-------------------------------------------------------------------------------------------

//? [별 찍기 (6)]

function starOutput6(input) {
    let output = '';
    for (let i = 1; i <= input; i++) {
        output += ' '.repeat(i - 1) + '*'.repeat((input[0] * 2) - (2 * i - 1)) + '\n'
    }
    return output;
}
console.log(starOutput6("3"))
// *****
//  ***
//   *

//-------------------------------------------------------------------------------------------