//? [isSubsetOf] Daily Coding_no.24
//TODO <문제 설명>
//TODO 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.

//! <제한 사항>
//! base, sample은 number 타입을 요소로 갖는 임의의 배열이고, length는 100 이하입니다.
//! boolean 타입을 리턴해야 합니다.
//! base, sample 내에 중복되는 요소는 없다고 가정합니다.
//! 시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.

//* <입출력 예>
//* base=[1, 2, 3, 4, 5]        sample=[1, 3]               result=true
//* base=[1, 2, 3, 4, 5]        sample=[6, 7]               result=false
//* base=[10, 99, 123, 7]       sample=[11, 100, 99, 123]   result=false


//::::

//? 나의 풀이
//? 답은 나오나, 실행시간 초과로 테스트 실패
// const isSubsetOf = function (base, sample) {

//     let filtered = sample.filter((x) => base.includes(x))
//     return filtered.length === sample.length ? true : false
// };

//-------------------------------------------------------------------------------------------

//? Reference
const isSubsetOf = function (base, sample) {
    // naive solution: O(M * N)
    // return sample.every((item) => base.includes(item));

    // 각 배열을 정렬: O(N * logN), O(M * logM)
    // N >= M 이므로, O(N * logN)
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);

    const findItemInSortedArr = (item, arr, from) => {
        for (let i = from; i < arr.length; i++) {
            if (item === arr[i]) return i;
            else if (item < arr[i]) return -1;
        }
        return -1;
    };

    let baseIdx = 0;
    for (let i = 0; i < sample.length; i++) {
        baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
        if (baseIdx === -1) return false;
    }
    return true;
};

console.log(isSubsetOf([1, 2, 3, 4, 5], [1, 3])); // true
// console.log(isSubsetOf([1, 2, 3, 4, 5], [6, 7])); // false
// console.log(isSubsetOf([10, 99, 123, 7], [11, 100, 99, 123])); // false

//-------------------------------------------------------------------------------------------