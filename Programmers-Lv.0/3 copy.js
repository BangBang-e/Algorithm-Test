//? [안전지대]
//TODO <문제 설명>
//TODO 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
//TODO 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
//TODO 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

//! <제한 사항>
//! board는 n * n 배열입니다.
//! 1 ≤ n ≤ 100
//! 지뢰는 1로 표시되어 있습니다.
//! board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

//* <입출력 예>
//* board=[[0, 0, 0, 0, 0],
//*        [0, 0, 0, 0, 0],
//*        [0, 0, 0, 0, 0],
//*        [0, 0, 1, 0, 0],
//*        [0, 0, 0, 0, 0]]
//* result=16

//* board=[[0, 0, 0, 0, 0],
//*        [0, 0, 0, 0, 0],
//*        [0, 0, 0, 0, 0],
//*        [0, 0, 1, 1, 0],
//*        [0, 0, 0, 0, 0]]
//* result=13

//::::

function solution(board) {
    for(let y=0; y<board.length; y++){
        for(let x=0; x<board[y].length; x++){
            // 내가 1일 때
            if (board[y][x]===1) {
                // 내가 맨 윗줄이 아닐 때 -> 내 밑에는 무적권 '위 험 지 역'
                if (y !== 0 && board[y-1][x] !== 1) {board[y-1][x] = []}
                // 내가 맨 밑줄이 아닐 때 -> 내 위에는 무적권 '위 험 지 역'
                if (y !== board.length-1 && board[y+1][x] !== 1) {board[y+1][x] = []}
                // 내가 맨 왼쪽줄이 아닐 때 -> 내 오른쪽에는 무적권 '위 험 지 역'
                if (x !== 0 && board[y][x-1] !== 1) {board[y][x-1] = []}
                // 내가 맨 오른쪽줄이 아닐 때 -> 내 왼쪽에는 무적권 '위 험 지 역'
                if (x !== board[y].length-1 && board[y][x+1] !== 1) {board[y][x+1] = []}
                
                // 내가 왼쪽위 모서리 아닐 때 -> 내 왼쪽위에는 무적권 '위 험 지 역'
                if (y !== 0 && x !== 0 && board[y-1][x-1] !== 1) {board[y-1][x-1] = []}
                // 내가 오른쪽위 모서리 아닐 때 -> 내 오른쪽위에는 무적권 '위 험 지 역'
                if (y !== 0 && x !== board[x].length-1 && board[y-1][x+1] !== 1) {board[y-1][x+1] = []}
                // 내가 왼쪽밑 모서리 아닐 때 -> 내 왼쪽밑에는 무적권 '위 험 지 역'
                if (y !== board.length-1 && x !== 0 && board[y+1][x-1] !== 1) {board[y+1][x-1] = []}
                // 내가 오른쪽밑 모서리 아닐 때 -> 내 오른쪽밑에는 무적권 '위 험 지 역'
                if (y !== board.length-1 && x !== board[x].length-1 && board[y+1][x+1] !== 1) {board[y+1][x+1] = []}
            }
        }
    }
    return board.flat().filter(el=>el===0).length
}
  console.log(solution([[0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0], 
                        [0, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0]])); // 16

  console.log(solution([[0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0], 
                        [0, 0, 1, 1, 0],
                        [0, 0, 0, 0, 0]])); // 13

  console.log(solution([[0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1],
                        [0, 0, 0, 1, 0], 
                        [0, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0]])); // 9

  console.log(solution([[1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1]])); // 0

//-------------------------------------------------------------------------------------------