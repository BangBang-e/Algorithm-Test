//? [겹치는 선분의 길이]
//TODO <문제 설명>
//TODO 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가
//TODO [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때,
//TODO 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! //! lines의 길이 = 3
//! lines의 원소의 길이 = 2
//! 모든 선분은 길이가 1 이상입니다.
//! lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
//! -100 ≤ a < b ≤ 100

//* <입출력 예>
//* lines=[[0, 1], [2, 5], [3, 9]]	    result=2
//* lines=[-1, 1], [1, 3], [3, 9]]	    result=0
//* lines=[[0, 5], [3, 9], [1, 10]]	    result=8

//::::

function solution(lines) {
    let sorted = lines.sort((a, b) => {
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
    })
    let minNum = sorted[0][0]

    if (minNum < 0) {
        lines = lines.map((x) => x.map((y) => y + Math.abs(minNum)))
    }

    let emptyArr = [];
    for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            if (emptyArr[j] === undefined) {
                emptyArr[j] = 1
            }
            else emptyArr[j]++
        }
    }
    return emptyArr.filter((x) => x >= 2).length
}
console.log(solution([[0, 1], [2, 5], [3, 9]])); // 2
console.log(solution([[-1, 1], [1, 3], [3, 9]])); // 0
console.log(solution([[0, 5], [3, 9], [1, 10]])); // 8

//-------------------------------------------------------------------------------------------