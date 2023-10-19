//? [피로도]
//TODO <문제 설명>
//TODO XX게임에는 피로도 시스템(0 이상의 정수로 표현합니다)이 있으며, 일정 피로도를 사용해서 던전을 탐험할 수 있습니다.
//TODO 이때, 각 던전마다 탐험을 시작하기 위해 필요한 "최소 필요 피로도"와 던전 탐험을 마쳤을 때 소모되는 "소모 피로도"가 있습니다.
//TODO "최소 필요 피로도"는 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도를 나타내며,
//TODO "소모 피로도"는 던전을 탐험한 후 소모되는 피로도를 나타냅니다. 예를 들어 "최소 필요 피로도"가 80,
//TODO "소모 피로도"가 20인 던전을 탐험하기 위해서는 유저의 현재 남은 피로도는 80 이상 이어야 하며,
//TODO 던전을 탐험한 후에는 피로도 20이 소모됩니다.
//TODO 이 게임에는 하루에 한 번씩 탐험할 수 있는 던전이 여러개 있는데, 한 유저가 오늘 이 던전들을 최대한 많이 탐험하려 합니다.
//TODO 유저의 현재 피로도 k와 각 던전별 "최소 필요 피로도", "소모 피로도"가 담긴 2차원 배열 dungeons 가 매개변수로 주어질 때,
//TODO 유저가 탐험할수 있는 최대 던전 수를 return 하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! k는 1 이상 5,000 이하인 자연수입니다.
//! dungeons의 세로(행) 길이(즉, 던전의 개수)는 1 이상 8 이하입니다.
//! dungeons의 가로(열) 길이는 2 입니다.
//! dungeons의 각 행은 각 던전의 ["최소 필요 피로도", "소모 피로도"] 입니다.
//! "최소 필요 피로도"는 항상 "소모 피로도"보다 크거나 같습니다.
//! "최소 필요 피로도"와 "소모 피로도"는 1 이상 1,000 이하인 자연수입니다.
//! 서로 다른 던전의 ["최소 필요 피로도", "소모 피로도"]가 서로 같을 수 있습니다.

//* <입출력 예>	
//* k	dungeons	                result
//* 80	[[80,20],[50,40],[30,10]]	3

//::::

function solution(k, dungeons) {
    function getAllCases(arr) {
        if (arr.length === 0) return [[]];
        if (arr.length === 1) return [arr];

        let allCases = [];

        for (let i = 0; i < arr.length; i++) {
            let currentElem = arr[i];
            let restElems = arr.slice(0, i).concat(arr.slice(i + 1));
            let remainingElems = getAllCases(restElems);

            for (let elem of remainingElems) {
                allCases.push([currentElem, ...elem]);
            }
        }
        return allCases;
    }

    const cases = getAllCases(dungeons);
    let visitedDungeons = 0;

    for (let currentDungeons of cases) {
        let fatigue = k;
        let count = 0;
        for (let dungeon of currentDungeons) {
            if (dungeon[0] <= fatigue) {
                fatigue -= dungeon[1];
                count++;
            } else {
                break;
            }
        }
        visitedDungeons = Math.max(visitedDungeons, count);
    }

    return visitedDungeons;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]])); // 3

//-------------------------------------------------------------------------------------------

//? [다른 풀이]

function solution2(k, dungeons) {
    let answer = [];
    let visited = Array(dungeons.length).fill(false);

    function dfs(k, visitedNum) {
        answer.push(visitedNum);

        for (let i = 0; i < dungeons.length; i++) {
            const [need, cost] = dungeons[i];

            if (k >= need && !visited[i]) {
                visited[i] = true;
                dfs(k - cost, visitedNum + 1);
                visited[i] = false;
            }
        }
    }

    dfs(k, 0);
    return Math.max(...answer);
}

console.log(solution2(80, [[80, 20], [50, 40], [30, 10]])); // 3

//-------------------------------------------------------------------------------------------