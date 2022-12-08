//? [소인수분해]
//TODO <문제 설명>
//TODO 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
//TODO 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로
//TODO 담은 배열을 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 2 ≤ n ≤ 10,000

//* <입출력 예>
//* n=12	    result=[2, 3]
//* n=17	    result=[17]
//* n=420	    result=[2, 3, 5, 7]

//::::

function solution(n) {
    const yaksu = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) yaksu.push(i);
    }
    return yaksu.filter((x) => {
        let cnt = 0;
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) cnt++
        }
        if (cnt === 2) return true;
        else return false;
    })
}
console.log(solution(12)); // [2, 3]
console.log(solution(17)); // [17]
console.log(solution(420)); // [2, 3, 5, 7]

//-------------------------------------------------------------------------------------------