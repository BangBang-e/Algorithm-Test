//? [소수 찾기]
//TODO <문제 설명>
//TODO 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
//TODO 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
//TODO (1은 소수가 아닙니다.)

//! <제한 사항>
//! n은 2이상 1000000이하의 자연수입니다.

//* <입출력 예>
//*     n=>  	result=>
//*     10  	4
//*     5	    3

//::::

function solution(n) {
    let primeNum = new Array(n - 2)

    for (let i = 2; i <= n; i++) {
        primeNum[i - 2] = i;
    }

    for (let i = 2; i <= n; i++) {
        if (primeNum[i - 2] === 0) continue; // 이미 지워진 수라면 건너뛰기

        for (let j = 2 * i; j <= n; j += i) {
            primeNum[j - 2] = 0;  // 아니면, 그 배수부터 출발하여 가능한 모든 숫자 지우기
        }
    }
    return primeNum.filter((x) => x !== 0).length;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3

//-------------------------------------------------------------------------------------------