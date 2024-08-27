// // 1초 마다 안녕! 출력한다.
// let interval = setInterval(function () {
//     console.log('안녕');
// }, 1000);

// // 5초 후에 멈추기
// setTimeout(function(){
//     clearInterval(interval);
//     console.log("멈춤 확인");
// }, 5000);

// html div태그의 숫자를 하나씩 감소하면서 0보다 작아지면 멈추기

// 초기값 카운트 설정
let count = 10;

// DOM
// - 브라우저가 웹페이지를 js객체화 하는 방식
// - document : 웹 페이지 문서 정보를 모두 지니고 있는 객체

let intervalId = setInterval(function(){
    // div태그요소를 가져온다. 
    let divNum = document.querySelector('#num');
    // count 변수를 하나씩 감소한다. 
    count--;
    // 이를 html에 적용한다. count값이 마이너스가 되면 멈추기
    if(count >= 0) {
        divNum.innerHTML = count;
    } else {
        // 멈추기
        clearInterval(intervalId);
    }
}, 1000);