// 자바스크립트에서 html의 요소들을 가지고 올 수 있는 함수들

// 함수를 만들어서 입력하는 텍스트가 버튼이 클릭되면 실행할 수 있는 함수를 만든다.

/*
function 함수명(매개변수) {
    실행할 문장
}
*/

// 함수를 실행하고 싶으면 함수 호출 → 함수명();
// function find() {
//     console.log("함수다");
// }
// find();

// function find(num, num2) {
//     console.log("함수다");
// }
// find(10, 20);

function find(event) {
    // 폼 태그의 제출 때문에 화면이 새로고침되어서 함수 안의 콘솔 내용이 자꾸 지워진다.
    event.preventDefault(); /* 폼태그 제출 막기 */

    // 자바스크립트에서 html의 요소들을 가져올 때 사용하는 함수가 있다.
    // 문서의 구조를 가지고 있는 타입
    // getElementById() 아이디 속성이 괄호 안의 이름으로 하나의 요소값을 찾아온다.
    const temp = document.getElementById('nameInput').value;
    console.log(temp);

    if (temp === '안녕') {
        alert('맞다!');
    } else {
        alert('아니다!');
    }
}
