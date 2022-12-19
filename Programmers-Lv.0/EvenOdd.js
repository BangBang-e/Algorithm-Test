//? [짝수 홀수 개수]
//TODO <문제 설명>
//TODO 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중
//TODO 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 1 ≤ num_list의 길이 ≤ 100
//! 0 ≤ num_list의 원소 ≤ 1,000

//* <입출력 예>
//* num_list = [1, 2, 3, 4, 5], result = [2, 3]
//* num_list = [1, 3, 5, 7], result = [0, 4]
//::::

function solution(num_list) {
    let even = num_list.filter(el => el % 2 === 0).length;
    let odd = num_list.filter(el => !(el % 2 === 0)).length;

    return [even, odd];
}
console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]

//-------------------------------------------------------------------------------------------