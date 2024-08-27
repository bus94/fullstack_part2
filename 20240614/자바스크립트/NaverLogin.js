function check(event){
    event.preventDefault();
    const tempId = document.getElementById('idInput').value;
    const tempPw = document.getElementById('pwInput').value;

    console.log(tempId);
    console.log(tempPw);

    if(tempId === 'a1234' && tempPw === '1234') {
        alert('로그인 성공!');
    } else {
        alert('로그인 실패!');
    }
}