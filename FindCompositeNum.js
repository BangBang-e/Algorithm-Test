//? [합성수 찾기]
//TODO <문제 설명>
//TODO 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
//TODO 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를
//TODO return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ n ≤ 100

//* <입출력 예>
//* 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
//* 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

//::::

function solution(n) {
    let arr = [];
    
    for(let i=1; i<=n; i++){
        for(let j=2; j<i; j++){
            if(i%j === 0){
                arr.push(i);
            }
        }
    }
    let set = new Set(arr);
    let answer = [...set];
    return answer.length;
}
console.log(solution(10)); // 5
console.log(solution(15)); // 8

//-------------------------------------------------------------------------------------------