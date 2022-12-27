//? [분수의 덧셈]
//TODO <문제 설명>
//TODO 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2,
//TODO num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로
//TODO 담은 배열을 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 0 <denum1, num1, denum2, num2 < 1,000

//* <입출력 예>		
//* denum1=1    num1=2      denum2=3    num2=4      result=[5, 4]
//* denum1=9    num1=2      denum2=1    num2=3      result=[29, 6]

//::::

function solution(denum1, num1, denum2, num2) {

    let denum = num1*denum2 + num2*denum1 // 결과 분자
    let num = num1*num2 // 결과 분모
    let result = 1
    for (let i=2; i<=Math.min(denum, num); i++){
        if (denum%i===0 && num%i===0) result = i
    }
    return [denum/result, num/result]
}
console.log(solution(1, 2, 3, 4)); // [5, 4]
console.log(solution(9, 2, 1, 3)); // [29, 6]

//-------------------------------------------------------------------------------------------