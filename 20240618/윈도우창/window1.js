function openWin() {
    // 새로운 페이지를 열기 위해서는 window 현재 페이지 객체를 사용한다.(새창)
    window.open();
    // 새로운 탭으로 새로운 전체 페이지가 생긴다.
}

function registerForm() {
    // 감춰 놓은 id속성이 register로 지정된 div 태그를 화면에 보이게 한다.
    document.getElementById('register').style.display = 'block';
    document.body.style.backgroundColor = 'gray';

    // 배경에 있는 로그인 버튼을 비활성화 하기
    // const namelist = document.getElementsByName('btn'); - 배열 리스트로 값을 가져옴
    // console.log(namelist);
    // 로그인 버튼이므로 [1]값
    const namelist = document.getElementsByName('btn')[1];
    // 로그인 버튼 누르면 비활성화 시키는 속성 설정
    // disabled = '값';
    namelist.disabled = 'disabled';

    // 공통되는 내용이 없을 경우에는 TagName(input)을 이용한다.
    // 배열 형태로 받게 되고, 그 중에서 하나씩 반복해서 비활성화해주면 된다.
    const textlist = document.getElementsByTagName('input');
    
}