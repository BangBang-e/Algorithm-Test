//? [머쓱이보다 키 큰 사람]
//TODO <문제 설명>
//TODO 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다.
//TODO 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가
//TODO 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를
//TODO return 하도록 solution 함수를 완성해보세요.

//! <제한 사항>
//! 1 ≤ array의 길이 ≤ 100
//! 1 ≤ height ≤ 200
//! 1 ≤ array의 원소 ≤ 200

//* <입출력 예>
//* array = [149, 180, 192, 170], height = 167, result = 3
//* array = [180, 120, 140], height = 190, result = 0

//::::

function solution(array, height) {
    var answer = 0;
    for (el in array) {
        if (array[el] > height) {
            answer++;
        }
    }
    return answer;
}
console.log(solution([149, 180, 192, 170], 167)); // 3
console.log(solution([180, 120, 140], 190)); // 0

//-------------------------------------------------------------------------------------------