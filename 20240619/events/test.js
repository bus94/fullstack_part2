// 이벤트 발생 시 처리 3단계
// 1. 감시 대상 지정
// 2. 특정 이벤트를 지속적으로 발생하는지 감시
// 3. 이벤트 발생하면 동작 수행

// 1. 메뉴를 저장하는 배열 선언
const menuCart = [];

// 2. 결과를 출력하는 요소값 가져오기
const resultDiv = document.querySelector('#order-list');

// 버튼들의 요소 가져오기 (자식 중에 button의 것만 가져오기)
const menuButtons = document.querySelectorAll('#practice button');

console.log(resultDiv);
console.log(menuButtons);

// 3. 각각의 버튼에 리스너(감시자)
for(let i = 0; i < menuButtons.length; i++) {
    // 감시를 시작
    menuButtons[i].addEventListener(
        'click', function (e) {
            // 4. 이벤트 발생 시 처리할 내용 수행

            // 클릭된 버튼 가져오기
            const btn = e.target;
            // console.log(btn);

            // 버튼이 가지고 있는 텍스트를 가져오기
            // innerText 요소 안에 text만 가져온다.
            const menuName = btn.innerText;
            console.log(menuName);

            // 장바구니 배열에 담기
            menuCart.push(menuName);

            // 장바구니 배열을 html 문서에 적용
            resultDiv.innerText = `>>[${menuCart}]이 주문되었습니다.`;
            
            // 1. menuCart 안에 중복되는 문자있으면 배열에 추가 안함

            // 2. 배열 안에 메뉴가 없다면 메뉴이름 추가, 있다면 중복 검사 후 메뉴이름 옆에 카운트 하기
            // ex) 짜장 - 짜장2
        }
    );
}