//? [구슬을 나누는 경우의 수]
//TODO <문제 설명>
//TODO 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
//TODO 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
//TODO balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
//TODO [Hint] 서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다 -> n! / (n-m)! * m!

//! <제한 사항>
//! 1 ≤ balls ≤ 30
//! 1 ≤ share ≤ 30
//! 구슬을 고르는 순서는 고려하지 않습니다.
//! share ≤ balls

//* <입출력 예>
//* balls=3     share=2	    result=3
//* balls=5     share=3	    result=10

//::::

function solution(balls, share) {
    let n = 1
    let nm = 1 
    for (let i=balls; i>share; i--){
        n *= i
    }
    for (let k=(balls-share); k>0; k--){
        nm *= k
    }
    return Math.floor(n / nm)
}
console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); // 10

//-------------------------------------------------------------------------------------------