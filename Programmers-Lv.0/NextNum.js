//? [다음에 올 숫자]
//TODO <문제 설명>
//TODO 등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
//TODO 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 2 < common의 길이 < 1,000
//! -1,000 < common의 원소 < 2,000
//! 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
//! 공비가 0인 경우는 없습니다.

//* <입출력 예>
//* common=[1, 2, 3, 4]	    result=5
//* common=[2, 4, 8]	    result=16

//::::

function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) { // 등차수열인지 확인
        return common[common.length-1]+common[1]-common[0] // 등차수열일 시 마지막 숫자에 등차 만큼 더함
    } else {
        return common[common.length-1]*(common[1]/common[0]) // 등비수열일 시 마지막 숫자에 등비 만큼 곱함
    }
}
console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16

//-------------------------------------------------------------------------------------------