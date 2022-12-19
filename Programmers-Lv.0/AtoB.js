//? [A로 B 만들기]
//TODO <문제 설명>
//TODO 문자열 before와 after가 매개변수로 주어질 때,
//TODO before의 순서를 바꾸어 after를 만들 수 있으면 1을,
//TODO 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 0 < before의 길이 == after의 길이 < 1,000
//! before와 after는 모두 소문자로 이루어져 있습니다.

//* <입출력 예>
//* before="olleh"  after="hello"	result=1
//* before="allpe"  after="apple"	result=0

//::::

function solution(before, after) {
    let arr1 = before.split('').sort().join('')
    let arr2 = after.split('').sort().join('')
    
    if(arr1 === arr2){
        return 1;
    }else {
        return 0;
    }
}
console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0

//-------------------------------------------------------------------------------------------