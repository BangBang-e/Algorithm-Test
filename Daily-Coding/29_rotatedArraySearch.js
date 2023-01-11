//? [rotatedArraySearch] Daily Coding_no.29
//TODO <문제 설명>
//TODO 부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.
//TODO -부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
//TODO -예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.

//! <제한 사항>
//! rotated에 중복된 요소는 없습니다.
//! target이 없는 경우, -1을 리턴해야 합니다.
//! 단순히 처음부터 끝까지 찾아보는 방법(O(N)) 대신 다른 방법(O(logN))을 탐구해 보세요.

//* <입출력 예>
//* rotated=[4, 5, 6, 0, 1, 2, 3]        target=2               result=5
//* rotated=[4, 5, 6, 0, 1, 2, 3]        target=100               result=-1

//::::

const rotatedArraySearch = function (rotated, target) {
    let low = 0; //10
    let high = rotated.length - 1; //12

    while (low <= high) {
        let mid = parseInt((high + low) / 2); //mid=11
        if (rotated[mid] === target) return mid;

        if (rotated[low] < rotated[mid]) {
            if (target < rotated[mid] && rotated[low] <= target) high = mid - 1;
            else low = mid + 1;
        } else if (rotated[mid] < rotated[high]) {
            if (target <= rotated[high] && rotated[mid] < target) low = mid + 1;
            else high = mid - 1;
        } else return -1
    }
}
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)); // 5
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], -1)); // -1
console.log(rotatedArraySearch([10, 11, 12, 3, 6, 7, 8, 9], 11)); // 1
console.log(rotatedArraySearch([10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8)); // 11

//------------------------------------------------------------------------------------------ -