//? [computeSquareRoot] Daily Coding_no.17
//TODO <문제 설명>
//TODO 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

//! <제한 사항>
//! number 타입의 정수 (num >= 2)
//! number 타입을 리턴해야 합니다.
//! 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)
//! Math.sqrt 사용은 금지됩니다.

//* <입출력 예>
//* num=9   result=3
//* num=6   result=2.45

//::::

//? [Reference]

function computeSquareRoot(num) {
    let answer = 1;
    const diffs = [1, 0.1, 0.01, 0.001];

    for (let i = 0; i < diffs.length; i++) {
        while (answer ** 2 < num) {
            answer += diffs[i];
        }

        if (answer ** 2 === num) {
            return answer;
        } else {
            answer = answer - diffs[i];
        }
    }
    return Number(answer.toFixed(2));
}
console.log(computeSquareRoot(9)); // 3
console.log(computeSquareRoot(6)); // 2.45

//-------------------------------------------------------------------------------------------

//? [은정님 방법]

function computeSquareRoot1(num) {
    // answer 를 두번 곱하면  num 이 나오는 수를 찾는다. 
    let answer = 0
    let low = 0
    let high = 0
    // 1 단위로 낮은answer와 높은answer 사이를 구한다 -> 낮은answer+
    for (let i=1; i<num; i++){
        if (i**2 <= num && (i+1)**2 >= num){
            low = i
            high = i+1
            answer = low
        }
    }
    // 0.1 단위로 낮은answer와 높은answer 사이를 구한다 -> 낮은answer+
    for (let i=low; i<high; i=i+0.1){
        if (i**2 <= num && (i+1)**2 >= num){
            low = i
            high = i+1
            answer = low
        }
    }
    // 0.01 단위로 낮은answer와 높은answer 사이를 구한다 -> 낮은answer+
    for (let i=low; i<high; i=i+0.01){
        if (i**2 <= num && (i+1)**2 >= num){
            low = i
            high = i+1
            answer = low
        }
    }
    // 0.001 단위로 낮은answer와 높은answer 사이를 구한다 -> 낮은answer+    
    for (let i=low; i<high; i=i+0.001){
        if (i**2 <= num && (i+1)**2 >= num){
            low = i
            high = i+1
            answer = low
        }
    } // 소수점 두자리까지
    return Number(answer.toFixed(2))
}
console.log(computeSquareRoot1(9)); // 3
console.log(computeSquareRoot1(6)); // 2.45

//-------------------------------------------------------------------------------------------

//? [OtherWay-long ver.]

function otherWay1(num) {
    let findInteger;
    let findDecimal;
    let findDecimal2;
    let findDecimal3;

    for (let i = 1; i < num; i++) {
        if (i ** 2 <= num && num < (i + 1) ** 2) findInteger = i;
    }

    for (let i = findInteger; i < findInteger + 1; i += 0.1) {
        if (i ** 2 <= num && num < (i + 0.1) ** 2) findDecimal = i;
    }

    for (let i = findDecimal; i < findDecimal + 0.1; i += 0.01) {
        if (i ** 2 <= num && num < (i + 0.01) ** 2) findDecimal2 = i;
    }

    for (let i = findDecimal2; i < findDecimal2 + 0.01; i += 0.001) {
        if (i ** 2 <= num && num < (i + 0.001) ** 2) findDecimal3 = i;
    }

    return +findDecimal3.toFixed(2);
}
console.log(otherWay1(9)); // 3
console.log(otherWay1(6)); // 2.45

//-------------------------------------------------------------------------------------------

//? [OtherWay-short ver.]

function otherWay2(num) {
    const decimals = [1, 0.1, 0.01, 0.001];
    let init = 0;

    for (let i = 0; i < decimals.length; i++) {
        for (let j = init + decimals[i]; j < num; j += decimals[i]) {
            if (j ** 2 <= num && num < (j + decimals[i]) ** 2) init = j;
        }
    }
    return +init.toFixed(2);
}
console.log(otherWay2(9)); // 3
console.log(otherWay2(6)); // 2.45

//-------------------------------------------------------------------------------------------