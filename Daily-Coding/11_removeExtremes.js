//? [removeExtremes] Daily Coding_no.11
//TODO <문제 설명>
//TODO 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

//! <제한 사항>
//! string 타입을 요소로 갖는 배열
//! arr[i].length는 20 이하
//! 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
//! 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.


//* <입출력 예>
//* arr=['a', 'b', 'c', 'def', '', ''], result=['a', 'b', 'c', '']
//* arr=['a', 'b', 'c', 'def', 'c'], result=['a', 'b', 'c']
//* arr=['where', 'is', 'the', 'longest', 'word'], result=['where', 'the', 'word']

//::::

//? [for문 사용]

function removeExtremes1(arr) {
    let min = 20;
    let max = 0;
    let minWord = 0;
    let maxWord = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= max) {
            max = arr[i].length;
            maxWord = i
        }
        if (arr[i].length <= min) {
            min = arr[i].length;
            minWord = i
        }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if ((i !== minWord) && (i !== maxWord)) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeExtremes1(['a', 'b', 'c', 'def', '', ''])); // ['a', 'b', 'c', '']
console.log(removeExtremes1(['where', 'is', 'the', 'longest', 'word'])); // ['where', 'the', 'word']

//-------------------------------------------------------------------------------------------

//? [filter 사용]

function removeExtremes2(arr) {
    let maxWordIndex = 0;
    let minWordIndex = 0;
    let max = 0;
    let min = 20;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= max) {
            max = arr[i].length;
            maxWordIndex = i;
        }
        if (arr[i].length <= min) {
            min = arr[i].length;
            minWordIndex = i;
        }
    }

    const result = arr.filter((x, index) => {
        if ((index !== minWordIndex) && (index !== maxWordIndex)) {
            return true
        }
        return false;
    })
    return result;
}

console.log(removeExtremes2(['a', 'b', 'c', 'def', 'c'])); // ['a', 'b', 'c']
console.log(removeExtremes2(['where', 'is', 'the', 'longest', 'word'])); // ['where', 'the', 'word']

//-------------------------------------------------------------------------------------------
