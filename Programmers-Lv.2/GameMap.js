//? [게임 맵 최단거리]
//TODO <문제 설명>
//TODO ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.
//TODO 지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다.다음은 5 x 5 크기의 맵에,
//TODO 당신의 캐릭터가(행: 1, 열: 1) 위치에 있고, 상대 팀 진영은(행: 5, 열: 5) 위치에 있는 경우의 예시입니다.
//! https://school.programmers.co.kr/learn/courses/30/lessons/1844
//! (자세한 문제는 사이트 참고!)
//TODO 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요.
//TODO 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

//! <제한 사항>
//! maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
//! n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
//! maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
//! 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.

//* <입출력 예>	
//*     maps	                                                        answer
//*     [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
//*     [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1

//::::

function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = new Array(n).fill(false).map(() => new Array(m).fill(false));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const current = [{ x: 0, y: 0, distance: 1 }]
    visited[0][0] = true;

    while (current.length > 0) {
        const { x, y, distance } = current.shift();

        if (x === n - 1 && y === m - 1) return distance;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= n || ny >= m || maps[nx][ny] === 0) {
                continue;
            }

            if (!visited[nx][ny]) {
                current.push({ x: nx, y: ny, distance: distance + 1 });
                visited[nx][ny] = true;
            }
        }
    }
    return -1;
}

const test1 = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
]
console.log(solution(test1)); // 11

const test2 = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1]
]
console.log(solution(test2)); // -1

//-------------------------------------------------------------------------------------------
