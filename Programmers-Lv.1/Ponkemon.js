//? [이상한 문자 만들기]
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function solution(nums) {
    let typeNum = [...new Set(nums)].length;
    let takeNum = nums.length / 2;

    return typeNum > takeNum ? takeNum : typeNum
}
console.log(solution([3, 1, 2, 3])); // 2

//-------------------------------------------------------------------------------------------