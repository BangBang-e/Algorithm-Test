//? [k의 개수]
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>


//::::

function solution(i, j, k) {
    var answer = 0;
    for(let x=i; x<=j; x++){
        if(String(k).split('').includes(k)){
            answer += 1
        }
    }
    return +answer;
}
console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0

//-------------------------------------------------------------------------------------------