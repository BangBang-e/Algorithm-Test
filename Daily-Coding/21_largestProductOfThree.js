//? [largestProductOfThree] Daily Coding_no.21
//TODO <문제 설명>
//TODO 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.
//TODO 인자: number 타입을 요소로 갖는 임의의 배열

//! <제한 사항>
//! number 타입을 리턴해야 합니다.
//! 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
//! 배열의 요소는 음수와 0을 포함하는 정수입니다.
//! 배열의 길이는 3 이상입니다.

//* <입출력 예>
//* arr=[2, 1, 3, 7]      result=42 (= 2 * 3 * 7)
//* arr=[-1, 2, -5, 7]     result=35 (= -1 * -5 * 7)

//::::

const largestProductOfThree = function (arr) {
    if (arr.length === 3 && arr.includes(0)) return 0;

    let newArr = arr.slice().sort((a, b) => a - b)
    let mixedNum = newArr[0] * newArr[1] * newArr[newArr.length - 1]
    let allPositive = newArr.reverse().splice(0, 3).reduce((a, b) => a * b)

    return Math.max(allPositive, mixedNum)
};
console.log(largestProductOfThree([2, 1, 3, 7])); // 42
console.log(largestProductOfThree([-1, 2, -5, 7])); // 35
console.log(largestProductOfThree([-5, -4, -3, -1, 999, 10000])); // 200000
console.log(largestProductOfThree([0, 2, 3])); // 0

//-------------------------------------------------------------------------------------------