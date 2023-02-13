//? 06_[순열] 새로운 치킨 소스 레시피
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function newChickenRecipe(stuffArr, choiceNum) {
    let freshArr = stuffArr.filter((el) => String(el).slice(-3) !== "000");

    const recur = function (arr, choiceNum) {
        let result = [];
        if (choiceNum === 1) return arr.map((hand) => [hand]);

        arr.forEach((elem, idx, arr) => {
            const fixer = elem;
            const restArr = arr.filter((_, index) => index !== idx);
            const permuationArr = recur(restArr, choiceNum - 1);
            const combineFixer = permuationArr.map((elem) => [fixer, ...elem]);
            result.push(...combineFixer);
        });
        return result;
    };
    return recur(freshArr, choiceNum);
}
console.log(newChickenRecipe([1, 10, 1100, 1111], 2));
console.log(newChickenRecipe([10000, 10, 1], 3));
console.log(newChickenRecipe([11, 1, 10, 1111111111, 10000], 4));

//-------------------------------------------------------------------------------------------