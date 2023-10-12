"use strict";
process.stdin.resume(); //표준 입력 스트림을 열기 (이 라인이 호출되면 Node.js 애플리케이션은 사용자의 입력을 기다리며 종료되지 않음)
process.stdin.setEncoding("utf-8"); //표준 입력 스트림의 인코딩을 utf-8로 설정 (문자열로 처리할 수 있게됨)
var inputString = ""; //사용자로부터 받은 모든 입력을 저장하는 변수 선언
var inputLines = []; //입력을 개행 문자(\n) 기준으로 분리한 후 저장하는 배열 선언
var currentLine = 0; //현재 처리하고 있는 라인의 인덱스를 저장하는 변수 선언
process.stdin.on("data", function (inputStdin) {
    //이벤트 리스너를 추가
    inputString += inputStdin; //사용자로부터 입력을 받을 때마다 inputString에 추가
});
process.stdin.on("end", function () {
    //사용자가 입력을 완료 시(보통 Ctrl+D를 눌러 종료)
    inputLines = inputString.split("\n"); //inputString을 개행 문자를 기준으로 분리 후, inputLines 배열에 저장
    inputString = ""; //inputString 초기화
    main(); //main() 함수 호출
});
function readLine() {
    return inputLines[currentLine++]; //현재 처리 중인 라인(inputLines[currentLine])을 반환 후, currentLine 증가
}
function main() {
    var a = parseInt(readLine().trim(), 10);
    var b = parseInt(readLine().trim(), 10);
    var sum = a + b;
    console.log(sum);
}
