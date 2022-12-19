//? [두 수의 합]
//TODO <문제 설명>
//TODO 정수 num1과 num2가 주어질 때, num1과 num2의 합을
//TODO return하도록 soltuion1 함수를 완성해주세요.

//! <제한 사항>
//! -50,000 ≤ num1 ≤ 50,000
//! -50,000 ≤ num2 ≤ 50,000

//* <입출력 예>
//* num1이 2이고 num2가 3이므로 2 + 3 = 5를 return합니다.
//* num1이 100이고 num2가 2이므로 100 + 2 = 102를 return합니다.
//::::

function solution1(num1, num2) {
    return num1 + num2;
}
console.log(solution1(2, 3)); // 5
console.log(solution1(100, 2)); // 102

//-------------------------------------------------------------------------------------------

//? [두 수의 차]
//TODO <문제 설명>
//TODO 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을
//TODO return하도록 soltuion2 함수를 완성해주세요.

//! <제한 사항>
//! -50,000 ≤ num1 ≤ 50,000
//! -50,000 ≤ num2 ≤ 50,000

//* <입출력 예>
//* num1이 2이고 num2가 3이므로 2 - 3 = -1을 return합니다.
//* num1이 100이고 num2가 2이므로 100 - 2 = 98을 return합니다.
//::::

function solution2(num1, num2) {
    return num1 - num2;
}
console.log(solution2(2, 3)); // 5
console.log(solution2(100, 2)); // 102

//-------------------------------------------------------------------------------------------

//? [두 수의 곱]
//TODO <문제 설명>
//TODO 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을
//TODO return하도록 soltuion3 함수를 완성해주세요.

//! <제한 사항>
//! 0 ≤ num1 ≤ 100
//! 0 ≤ num2 ≤ 100

//* <입출력 예>
//* num1이 3, num2가 4이므로 3 * 4 = 12를 return합니다.
//* num1이 27, num2가 19이므로 27 * 19 = 513을 return합니다.
//::::

function solution3(num1, num2) {
    return num1 * num2;
}
console.log(solution3(3, 4)); // 5
console.log(solution3(27, 19)); // 102

//-------------------------------------------------------------------------------------------

//? [두 수의 나눗셈]
//TODO <문제 설명>
//TODO 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에
//TODO 1,000을 곱한 후 정수 부분을 return 하도록 soltuion4 함수를 완성해주세요.

//! <제한 사항>
//! 0 < num1 ≤ 100
//! 0 < num2 ≤ 100

//* <입출력 예>
//* num1이 3, num2가 2이므로 3 / 2 = 1.5에 1,000을 곱하면 1500이 됩니다.
//* num1이 7, num2가 3이므로 7 / 3 = 2.33333...에 1,000을 곱하면 2333.3333.... 이 되며, 정수 부분은 2333입니다.
//* num1이 1, num2가 16이므로 1 / 16 = 0.0625에 1,000을 곱하면 62.5가 되며, 정수 부분은 62입니다.
//::::

function solution4(num1, num2) {
    return Math.floor(num1 / num2 * 1000);
}
console.log(solution4(3, 2)); // 5
console.log(solution4(7, 3)); // 102
console.log(solution4(1, 16)); // 102

//-------------------------------------------------------------------------------------------