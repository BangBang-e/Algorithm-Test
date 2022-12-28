//? [연속된 수의 합]
//TODO <문제 설명>
//TODO 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다.
//TODO 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

//! <제한 사항>
//! 1 ≤ num ≤ 100
//! 0 ≤ total ≤ 1000
//! num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

//* <입출력 예>
//* num=3	total=12	result=[3, 4, 5]
//* num=5	total=15	result=[1, 2, 3, 4, 5]
//* num=4	total=14	result=[2, 3, 4, 5]
//* num=5	total=5	    result=[-1, 0, 1, 2, 3]

//::::

function solution(num, total) {
    let arr = []
    let initVal = Math.ceil(total/num)-Math.floor(num/2)
    for (let i=0; i<num; i++){
        arr.push(initVal+i)
    }
    return arr
} 
console.log(solution(3, 12)); // [3, 4, 5]
console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
console.log(solution(4, 14)); // [2, 3, 4, 5]
console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]

//-------------------------------------------------------------------------------------------