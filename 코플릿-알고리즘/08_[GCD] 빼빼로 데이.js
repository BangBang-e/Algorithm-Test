//? 09_(Advanced) [멱집합] 집밥이 그리워
//TODO <문제 설명>

//! <제한 사항>

//* <입출력 예>

//::::

function missHouseMeal(sideDishes) {
    sideDishes = sideDishes.sort();
    const result = [];
    function recursion(subset, start) {
        result.push(subset);

        for (let i = start; i < sideDishes.length; i++) {
            recursion([...subset, sideDishes[i]], i + 1);
        }
    }
    recursion([], 0);

    return result;
}
console.log(missHouseMeal(["eggroll", "kimchi", "fishSoup"])); // 

//-------------------------------------------------------------------------------------------