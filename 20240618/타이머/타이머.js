// 자바스크립트 함수 중에서 타이머기능
// 콜백함수 : 함수를 바로 실행하는 것이 아니라 몇 초 후에 실행해라

// setTimeout(function(){실행할 코드 작성}, 기다릴 시간);
// 첫번째 인자: 몇 초 후에 function(){실행할 코드}
// 두번째 인자: ms (1s = 1000ms)

// 타이머 함수
// setTimeout(
//     function () {
//         console.log('안녕');
//     }, 2000
// );

// function hide() {
//     // 5초가 지나면 hide 실행
//     // div 태그를 안보이게 숨긴다.
//     // console.log(document.getElementById('a'));
//     let alerts = document.querySelector('#a');
//     console.log(alerts);
//     alerts.style.display='none';
// }

// 바로 실행!
// hide();

// div를 5초 있다가 안보이게 할 것!
// setTimeout(
//     hide, 5000
// );

// 몇 초마다 코드를 실행하고 싶으면 setTimeout()코드를 연달아서 여러 개 쓰면 된다.
// setInterval(function(){실행코드}, 기다릴 시간);
// clearInterval(타이머함수);
// setInterval(function(){
//     console.log('안녕!');
// }, 1000);

/* 1초 마다 계속 실행하면 된다. setInterval 
문자를 4로 바꿔주세요!
문자를 3으로 바꿔주세요!
문자를 2로 바꿔주세요!
문자를 1로 바꿔주세요!
문자를 0으로 바꿔주세요!
*/


