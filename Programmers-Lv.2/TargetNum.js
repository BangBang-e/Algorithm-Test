//? [타겟 넘버]
//TODO <문제 설명>


//! <제한 사항>


//* <입출력 예>	
//*     numbers	            target	return
//*     [1, 1, 1, 1, 1]	    3	    5
//*     [4, 1, 2, 1]	    4	    2

//::::

function solution(numbers, target) {
    let answer = 0;

    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    dfs(0, 0);

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2

//-------------------------------------------------------------------------------------------