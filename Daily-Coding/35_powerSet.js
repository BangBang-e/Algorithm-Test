//? [powerSet] Daily Coding_no.35
//TODO <문제 설명>
//TODO 하나의 집합을 의미하는 문자열을 입력받아 각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.

//! <제한 사항>
//! str: string 타입의 공백이 없는 알파벳 소문자 문자열
//! arr[i]는 각 부분집합을 구성하는 원소를 연결한 문자열입니다.
//! arr[i]는 알파벳 순서로 정렬되어야 합니다.
//! 집합은 중복된 원소를 허용하지 않습니다.
//! 부분집합은 빈 문자열을 포함합니다.
//! arr은 사전식 순서(lexical order)로 정렬되어야 합니다.


//* <입출력 예>
//* 배열(arr)을 리턴해야 합니다.
//* arr[i]는 각 부분집합의 원소로 구성된 문자열
//*     abc=>
//*     ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
//*     jjump=>
//*     ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']

//::::

const powerSet = function (str) {
    // 정렬
    const sorted = str.split('').sort();

    // 중복 제거
    const deduplicated = sorted.reduce((acc, item) => {
        if (acc[acc.length - 1] === item) {
            return acc;
        } else {
            return acc.concat(item);
        }
    });

    let subSets = [];
    const pickOrNot = (idx, subset) => {
        // base case
        if (idx === deduplicated.length) {
            // 마지막 문자까지 검토한 경우
            subSets.push(subset);
            return;
        }

        // recursive case
        // idx번째 문자가 포함되지 않는 경우
        pickOrNot(idx + 1, subset);

        // idx번째 문자가 포함되는 경우
        pickOrNot(idx + 1, subset + deduplicated[idx]);
    };
    pickOrNot(0, '');
    return subSets.sort();
};
console.log(powerSet('abc'));
// ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
console.log(powerSet('jjump'));
// ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']

//--------------------------------------------------------------------------------------------