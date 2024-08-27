// main.js
// 버튼을 눌렀을 때 메뉴(서브메뉴)

// 햄버거 버튼의 요소를 찾아서 저장함.
// const : 블록(요소) 범위의 상수 선언
// addEventListener
// 지정한 이벤트가 대상에 전달 될 때마다 호출하는 함수 (클릭했을 때 실행할 내용)
const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

console.log(toogleBtn);
console.log(menu);
console.log(icons);

// classList.toggle(String)
// 1개의 인수만 있을 때 클래스 값 토글링을 한다. 클래스가 있으면 제거 false 반환, 존재하지 않으면 클래스 추가하고 true 반환
toogleBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});



