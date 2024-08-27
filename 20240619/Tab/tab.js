// 첫 번째 버튼을 누르면 orange 클래스명 부착
// 첫 번째 content도 show 클래스명 부착
// 두 번째 버튼을 누르면 orange 클래스명 해제
// 두 번째 content도 show 클래스명 해제
// 세 번째 버튼을 누르면 orange 클래스명 해제
// 세 번째 content도 show 클래스명 해제

// 1. 요소값
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// 2. 탭을 눌렀을 때 실행
// tabButtons[1].addEventListener('click', function() {
//     tabButtons[1].classList.add('orange');
//     tabButtons[0].classList.remove('orange');
//     tabButtons[2].classList.remove('orange');

//     tabContents[1].classList.add('show');
//     tabContents[0].classList.remove('show');
//     tabContents[2].classList.remove('show');
// });

// tabButtons[2].addEventListener('click', function() {
//     tabButtons[2].classList.add('orange');
//     tabButtons[0].classList.remove('orange');
//     tabButtons[1].classList.remove('orange');

//     tabContents[2].classList.add('show');
//     tabContents[0].classList.remove('show');
//     tabContents[1].classList.remove('show');
// });

// tabButtons[0].addEventListener('click', function() {
//     tabButtons[0].classList.add('orange');
//     tabButtons[1].classList.remove('orange');
//     tabButtons[2].classList.remove('orange');

//     tabContents[0].classList.add('show');
//     tabContents[1].classList.remove('show');
//     tabContents[2].classList.remove('show');
// });

// 제이쿼리
//  자바스크립트 문법이 너무 길어서 간단하게 줄여주는 문법이 있다.
// 단점: 하나만 찾아올 수가 없다.
// $(셀렉터).on();
// document.getElementsByName('all')

// dataset - html 안에 유저 몰래 정보를 숨기는 기능
//          - data-데이터이름='값'

// 반복문 사용
for(let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function() {
        // 1. 모든 탭에서 orange 클래스 제거
        for(let j = 0; j < tabButtons.length; j++) {
            tabButtons[j].classList.remove('orange');
            tabContents[j].classList.remove('show');
        }

        // 2. 클릭된 탭 버튼에 orange 클래스 추가
        tabButtons[i].classList.add('orange');
        tabContents[i].classList.add('show');
    });
}