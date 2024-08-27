// function 아이디() {
//     alert('아이디를 입력하세요');
// }

// function 비밀번호() {
//     alert('비밀번호를 입력하세요');
// }

// function 아이디() {
//     const id = document.getElementById('아이디').style.display = 'block';
// }

// function 비밀번호() {
//     const id = document.getElementById('비밀번호').style.display = 'block';
// }

// function 아이디닫기() {
//     const id = document.getElementById('아이디').style.display = 'none';
// }

// function 비밀번호닫기() {
//     const id = document.getElementById('비밀번호').style.display = 'none';
// }

// 아이디 버튼을 클릭했을 때
// 토글 → 기존에 내용이 있으면 반대로 적용
// 창이 보이고 있는 상태에서 다시 한 번 버튼을 누르면 숨기는 기능

//  아이디를 입력하세요
function toggleInputMessage() {
    // 1. 요소값 검색
    const inputMessage = document.getElementById('input-message');
    console.log(inputMessage);

    if(inputMessage.style.display === 'none' || inputMessage.style.display === '') {
        inputMessage.style.display = 'block';
    } else {
        inputMessage.style.display = 'none';
    }
}

// 비밀번호를 입력하세요
function togglePasswordMessage() {
    const passwordMessage = document.getElementById('password-message');
    console.log(passwordMessage);

    if(passwordMessage.style.display === 'none' || passwordMessage.style.display === '') {
        passwordMessage.style.display = 'block';
    } else {
        passwordMessage.style.display = 'none';
    }
}

// "닫기" 버튼 - 모든 메세지를 숨긴다.
function hideMessages() {
    document.getElementById('input-message').style.display='none';
    document.getElementById('password-message').style.display='none';
}
