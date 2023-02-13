//? 07_[조합] 블랙잭은 지겨워
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function boringBlackjack(cards) {
    let count = 0;

    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            for (let k = j + 1; k < cards.length; k++) {
                let result = cards[i] + cards[j] + cards[k];
                if (isPrime(result)) {
                    count++;
                }
            }
        }
    }
    function isPrime(some) {
        for (let i = 2; i <= Math.floor(Math.sqrt(some)); i++) {
            if (some % i === 0) {
                return false;
            }
        }
        return true;
    }
    return count;
}
console.log(boringBlackjack([1, 2, 3, 4])); // 1
console.log(boringBlackjack([2, 3, 4, 8, 13])); // 3

//-------------------------------------------------------------------------------------------