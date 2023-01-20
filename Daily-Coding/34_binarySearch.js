//? [binarySearch] Daily Coding_no.34
//TODO <문제 설명>
//TODO 오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

//! <제한 사항>
//! 인자 1 : Number number 타입을 요소로 갖는 배열
//! 인자 2 : number 타입의 정수
//! 이진탐색 알고리즘(O(logN))을 사용해야 합니다.
//! 단순한 배열 순회(O(N))로는 통과할 수 없는 테스트 케이스가 존재합니다.
//! target이 없는 경우, -1을 리턴해야 합니다.

//* <입출력 예>
//* arr=[0, 1, 2, 3, 4, 5, 6]       target=2        result=3
//* arr=[4, 5, 6, 9]                target=100      result=-1

//::::

const binarySearch = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = parseInt((right + left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 2)); // 3
console.log(binarySearch([4, 5, 6, 9], 100)); // -1

//--------------------------------------------------------------------------------------------