//? [공 던지기]
//TODO <문제 설명>
//TODO 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
//TODO 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
//TODO 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때,
//TODO k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 2 < numbers의 길이 < 100
//! 0 < k < 1,000
//! numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
//! numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.

//* <입출력 예>
//* numbers=[1, 2, 3, 4]        k=2     result=3
//* numbers=[1, 2, 3, 4, 5, 6]  k=5     result=3
//* numbers=[1, 2, 3]           k=3     result=2

//::::

function solution(numbers, k) {
    let oddArr = numbers.filter(el => el % 2 === 1)
    let evenArr = numbers.filter(el => el % 2 === 0)
    let newArr = [...oddArr, ...evenArr]

    if (numbers.length % 2 === 0) {
        for (let i = 0; i < k; i++) {
            answer = oddArr[i % oddArr.length]
        }
    } else {
        for (let j = 0; j < k; j++) {
            answer = newArr[j % newArr.length]
        }
    }
    return answer;
}
console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2

//-------------------------------------------------------------------------------------------

//? [다른 풀이]
const otherWay = (numbers, k) => numbers[(k * 2 - 1) % numbers.length - 1]

console.log(otherWay([1, 2, 3, 4], 2)); // 3
console.log(otherWay([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(otherWay([1, 2, 3], 3)); // 2

//-------------------------------------------------------------------------------------------