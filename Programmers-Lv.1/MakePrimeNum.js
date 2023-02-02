//? [소수 만들기]
//TODO <문제 설명>
//TODO 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
//TODO 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
//TODO nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를
//TODO return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
//! nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

//* <입출력 예>
//* nums=>	        result=>
//* [1,2,3,4]	    1
//* [1,2,7,6,4]	    4

//::::

function solution(nums) {
    const isPrime = (n) => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const primeNum = [];

    for (let a = 0; a < nums.length; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            for (let c = b + 1; c < nums.length; c++) {
                const sum = nums[a] + nums[b] + nums[c];
                if (isPrime(sum)) {
                    primeNum.push(sum);
                }
            }
        }
    }
    return primeNum.length;
}
console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4

//-------------------------------------------------------------------------------------------