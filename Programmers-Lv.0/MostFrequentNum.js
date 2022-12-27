//? [최빈값 구하기]
//TODO <문제 설명>
//TODO 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때,
//TODO 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

//! <제한 사항>
//! 0 < array의 길이 < 100
//! 0 ≤ array의 원소 < 1000

//* <입출력 예>
//* array=[1, 2, 3, 3, 3, 4]	result=3
//* array=[1, 1, 2, 2]	        result=-1
//* array=[1]	                result=1

//::::

function solution(array) {
    let obj = {}  // 빈 객체 선언
    for (let el of array) {  // 배열 요소를 key, 요소의 갯수를 value로 하는 객체를 만듬
        if (obj[el] === undefined) obj[el] = 1
        else obj[el]++
    }
    sortedArr = Object.entries(obj).map(el => el[1]).sort((a, b) => (b - a))  // 객체의 value들을 요소로 하는 배열을 내림차순으로 정렬
    if (sortedArr[0] === sortedArr[1]) return -1 // 만약 첫 번째 인덱스(가장 갯수가 많은 숫자)와 두 번째가 같으면 '-1' 반환
    else return +(Object.keys(obj).find(key => obj[key] === sortedArr[0])) // 아니면, value로 객체의 키 찾아서 반환
}
console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1

//-------------------------------------------------------------------------------------------