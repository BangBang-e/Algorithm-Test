//? [숫자 짝꿍]
//TODO <문제 설명>
//TODO 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
//TODO (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다.
//TODO X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
//TODO 예를 들어, X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
//TODO 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다
//TODO (X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
//TODO 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

//! <제한 사항>
//! 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
//! X, Y는 0으로 시작하지 않습니다.
//! X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.

//* <입출력 예>
//* X=>	        Y=>	        result=>
//* "100"	    "2345"	    "-1"
//* "100"	    "203045"	"0"
//* "100"	    "123450"	"10"
//* "12321"	    "42531"	    "321"
//* "5525"	    "1255"	    "552"

//::::

function solution(X, Y) {

    let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let obj1 = {}
    let obj2 = {}


    for (el of X) {
        if (number.includes(el)) {
            if (!obj1[el]) {
                obj1[el] = 0
            } obj1[el]++
        }
    }

    for (el of Y) {
        if (number.includes(el)) {
            if (!obj2[el]) {
                obj2[el] = 0
            } obj2[el]++
        }
    }

    let obj1Key = Object.keys(obj1)
    let obj2Key = Object.keys(obj2)
    let arrKey = []
    for (el of obj1Key) {
        if (obj2Key.includes(el)) {
            arrKey.push(el)
        }
    }

    let result3 = arrKey.map(ele => {
        if (obj1[ele] < obj2[ele]) {
            ele = obj1[ele]
        } else {
            ele = obj2[ele]
        }
        return ele
    })

    let temp = []
    let count = 1
    arrKey.map((ele, idx) => {
        count = 1
        while (count <= result3[idx]) {
            count++
            temp.push(ele)
        }
        return ele
    })


    const set = [...new Set(temp)]

    if (temp.length === 0) return '-1'
    else if (set[0] === '0' && set.length === 1) {
        return '0'
    }
    return temp.sort((a, b) => b - a).join('')
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"

//-------------------------------------------------------------------------------------------

//? [다른 풀이]]
function solution2(X, Y) {
    let answer = '';
    let x = [...X];
    let y = [...Y];

    for (let i = 0; i < 10; i++) {
        let xx = x.filter(ele => +ele === i).length
        let yy = y.filter(ele => +ele === i).length

        answer += String(i).repeat(Math.min(xx, yy))
    }
    if (answer === '') {
        return "-1"
    } else if (+answer === 0) {
        return "0"
    } else {
        return answer.split("").sort((a, b) => Number(b) - Number(a)).join("")
    }
}
console.log(solution2("100", "2345")); // "-1"
console.log(solution2("100", "203045")); // "0"
console.log(solution2("100", "123450")); // "10"
console.log(solution2("12321", "42531")); // "321"
console.log(solution2("5525", "1255")); // "552"