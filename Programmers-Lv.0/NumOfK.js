//? [k의 개수]
//TODO <문제 설명>
//TODO 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때,
//TODO i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! 1 ≤ i < j ≤ 100,000
//! 0 ≤ k ≤ 9

//* <입출력 예>
//* i=1	    j=13	k=1	    result=6
//* i=10	j=50	k=5	    result=5
//* i=3	    j=10	k=2	    result=0

//::::

function solution(i, j, k) {
    var answer = '';
    for(let x=i; x<=j; x++){
        
        answer += x
    }
    return answer.split(k).length-1;
}
console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0

//-------------------------------------------------------------------------------------------