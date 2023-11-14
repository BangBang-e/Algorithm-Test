//? [방문 길이]
//TODO <문제 설명>
//TODO 게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.
//TODO U: 위쪽으로 한 칸 가기
//TODO D: 아래쪽으로 한 칸 가기
//TODO R: 오른쪽으로 한 칸 가기
//TODO L: 왼쪽으로 한 칸 가기
//TODO 캐릭터는 좌표평면의(0, 0) 위치에서 시작합니다.좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.
//TODO 예를 들어, "ULURRDLLU"로 명령했다면 이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다.
//TODO 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)
//TODO 단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

//! <제한 사항>
//! dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
//! dirs의 길이는 500 이하의 자연수입니다.

//* <입출력 예>	
//*     dirs	      answer
//*     "ULURRDLLU"	  7
//*     "LULLLLLLU"	  7

//::::

function solution(dirs) {
    const move = {
        'U': [0, 1],
        'D': [0, -1],
        'L': [-1, 0],
        'R': [1, 0]
    }
    let visited = new Set();
    let coordinate = [0, 0];

    for (let dir of dirs) {
        let nx = coordinate[0] + move[dir][0];
        let ny = coordinate[1] + move[dir][1];

        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

        visited.add(`${coordinate[0]}${coordinate[1]}${nx}${ny}`);
        visited.add(`${nx}${ny}${coordinate[0]}${coordinate[1]}`);
        coordinate = [nx, ny];
    }
    return visited.size / 2;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7

//-------------------------------------------------------------------------------------------