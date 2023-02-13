//? 08_[GCD] 빼빼로 데이
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function divideChocolateStick(M, N) {
    // 유클리드 호제법
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    const GCD = gcd(M, N);

    let result = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(GCD)); i++) {
        if (GCD % i === 0) {
            result.push([i, M / i, N / i]);
            if (i * i < GCD) {
                let j = GCD / i;
                result.push([j, M / j, N / j]);
            }
        }
    }
    result.sort((a, b) => a[0] - b[0]);
    return result;
}
console.log(divideChocolateStick(4, 8)); // [[1, 4, 8], [2, 2, 4], [4, 1, 2]]

//-------------------------------------------------------------------------------------------