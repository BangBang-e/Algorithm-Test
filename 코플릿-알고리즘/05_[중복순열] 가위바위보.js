//? 05_[중복순열] 가위바위보
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function rockPaperScissors(num) {
    num = num || 3;
    let arr = ["rock", "paper", "scissors"];
    let result = [];

    function recursion(count, played) {
        if (count === 0) {
            result.push(played);
            return;
        } else {
            for (let i = 0; i < arr.length; i++) {
                let arr1 = played.concat(arr[i]);
                recursion(count - 1, arr1);
            }
        }
    }
    recursion(num, []);
    return result;
};
console.log(rockPaperScissors(3));
// [
//     ['rock', 'rock', 'rock'],
//     ['rock', 'rock', 'paper'],
//     ['rock', 'rock', 'scissors'],
//     ['rock', 'paper', 'rock'],
//     ['rock', 'paper', 'paper'],
//     ['rock', 'paper', 'scissors'],
//     ['rock', 'scissors', 'rock'],
//     ['rock', 'scissors', 'paper'],
//     ['rock', 'scissors', 'scissors'],
//     ['paper', 'rock', 'rock'],
//     ['paper', 'rock', 'paper'],
//     ['paper', 'rock', 'scissors'],
//     ['paper', 'paper', 'rock'],
//     ['paper', 'paper', 'paper'],
//     ['paper', 'paper', 'scissors'],
//     ['paper', 'scissors', 'rock'],
//     ['paper', 'scissors', 'paper'],
//     ['paper', 'scissors', 'scissors'],
//     ['scissors', 'rock', 'rock'],
//     ['scissors', 'rock', 'paper'],
//     ['scissors', 'rock', 'scissors'],
//     ['scissors', 'paper', 'rock'],
//     ['scissors', 'paper', 'paper'],
//     ['scissors', 'paper', 'scissors'],
//     ['scissors', 'scissors', 'rock'],
//     ['scissors', 'scissors', 'paper'],
//     ['scissors', 'scissors', 'scissors']
// ]

//-------------------------------------------------------------------------------------------