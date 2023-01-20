//? [체육복]
//TODO <문제 설명>
//TODO 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
//TODO 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
//TODO 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
//TODO 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
//TODO 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
//TODO 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
//TODO 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

//! <제한 사항>
//! 전체 학생의 수는 2명 이상 30명 이하입니다.
//! 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
//! 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
//! 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
//! 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
//! 은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

//* <입출력 예>
//*     n=>   	lost=>	    reserve=>	return=>
//*     5   	[2, 4]	    [1, 3, 5]	5
//*     5   	[2, 4]	    [3]	        4
//*     3   	[3]	        [1]	        2

//::::

function solution(n, lost, reserve) {
    //* 체육복 1벌을 가진 n만큼의 배열 생성
    let arr = new Array(n).fill(1);

    //* 도둑맞은 친구는 체육복을 0으로 바꿈
    for (let i = 0; i < lost.length; i++) {
        arr[lost[i] - 1] = 0;
    }
    //* 여분이 있는 친구는 체육복을 2으로 바꿈
    for (let i = 0; i < reserve.length; i++) {
        arr[reserve[i] - 1] += 1;
    }
    //* 근접한 친구가 체육복을 2개 가지고 있으면 1 양도받음
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0 && arr[i - 1] === 2) {
            arr[i] = 1;
            arr[i - 1] = 1;
        } else if (arr[i] === 0 && arr[i + 1] === 2) {
            arr[i] = 1;
            arr[i + 1] = 1;
        }
    }
    //* 그래도 체육복이 없는 친구를 제외한 배열의 길이 반환
    return arr.filter(x => x !== 0).length;
}
console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2

//-------------------------------------------------------------------------------------------

//? [고차함수 활용]

function solution2(n, lost, reserve) {
    //* 체육복 1벌을 가진 n만큼의 배열 생성
    let arr = new Array(n).fill(1);

    //* 도둑맞은 친구는 체육복을 0으로 바꿈
    lost.forEach((i) => arr[i - 1]--);
    //* 여분이 있는 친구는 체육복을 2으로 바꿈
    reserve.forEach((i) => arr[i - 1]++);

    //* 근접한 친구가 체육복을 2개 가지고 있으면 1 양도받음
    arr.map((elem, idx) => {
        if (elem === 0 && arr[idx - 1] === 2) {
            arr[idx]++;
            arr[idx - 1]--;
        } else if (elem === 0 && arr[idx + 1] === 2) {
            arr[idx]++;
            arr[idx + 1]--;
        }
    })
    //* 그래도 체육복이 없는 친구를 제외한 배열의 길이 반환
    return arr.filter((elem) => elem !== 0).length
}
console.log(solution2(5, [2, 4], [1, 3, 5])); // 5
console.log(solution2(5, [2, 4], [3])); // 4
console.log(solution2(3, [3], [1])); // 2