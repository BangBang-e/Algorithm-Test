//? [다트 게임]
//TODO <문제 설명>
//TODO 카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다.
//TODO 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로,
//TODO 모두가 간단히 즐길 수 있다.
//TODO 갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다.
//TODO 다트 게임의 점수 계산 로직은 아래와 같다.
//? 1. 다트 게임은 총 3번의 기회로 구성된다.
//? 2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
//? 3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시
//?    점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
//? 4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은
//?    점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
//? 5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다.
//?    (예제 4번 참고)
//? 6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다.
//?    (예제 4번 참고)
//? 7. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다.
//?    (예제 5번 참고)
//? 8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
//? 9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
//TODO 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

//! <제한 사항>
//! "점수|보너스|[옵션]"으로 이루어진 문자열 3세트. 예) 1S2D*3T
//! 점수는 0에서 10 사이의 정수이다.
//! 보너스는 S, D, T 중 하나이다.
//! 옵선은 *이나 # 중 하나이며, 없을 수도 있다.
//! 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다. 예) 37

//* <입출력 예>
//*     dartResult	    answer
//* 	1S2D*3T	        37
//* 	1D2S#10S	    9
//* 	1D2S0T	        3
//* 	1S*2T*3S	    23
//* 	1D#2S*3S	    5
//* 	1T2D3D#	        -4
//* 	1D2S3T*	        59

//::::

function solution(dartResult) {
    let result = [];
    let score = 0;
    let answer = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
            score = 10;
            i += 2;
        }
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            score = dartResult[i];
        } else if (dartResult[i] === 'S') {
            result.push(score);
        } else if (dartResult[i] === 'D') {
            result.push(Math.pow(score, 2));
        } else if (dartResult[i] === 'T') {
            result.push(Math.pow(score, 3));
        } else if (dartResult[i] === '#') {
            result[result.length - 1] *= -1;
        } else if (dartResult[i] === '*') {
            result[result.length - 1] *= 2;
            result[result.length - 2] *= 2;
        }
    }
    return result.reduce((a, b) => +a + +b, 0);
}
console.log(solution("1S2D*3T")); // 37
console.log(solution("1D2S#10S")); // 9
console.log(solution("1D2S0T")); // 3
console.log(solution("1S*2T*3S")); // 23
console.log(solution("1D#2S*3S")); // 5
console.log(solution("1T2D3D#")); // -4
console.log(solution("1D2S3T*")); // 59

//-------------------------------------------------------------------------------------------