// script 태그가 무조건 한 번 실행된다. - defer 기입

function createImg() {
    // 라디오 버튼을 클릭하고 이미지 표시 버튼을 클릭하면 이미지가 생성되어 div 태그 안쪽으로 추가되어야 한다.
    
    // 1. 라디오 버튼 가져오기
    let radios = document.getElementsByName('radioBtn');

    // img 태그를 추가할 요소값을 가져온다.
    let div = document.getElementById('imageView');
    
    // 2. 실제 경로를 가지고 있는 value 저장
    let radioValue = '';
    for(let radio of radios) {
        if(radio.checked) {
            radioValue = radio.value;
        }
    }

    // 기존에 표시되던 img 태그를 제거하고 새로 생성하는 img 태그를 넣어주기
    // 삭제할 태그 선택
    // 마지막 태그를 선택할 때 사용하는 명령문 lastElementChild
    let removeImg = div.lastElementChild;
    div.removeChild(removeImg);

    // 3. img 이미지 태그 생성 <img>
    let img = document.createElement('img');

    // 속성값 설정
    img.setAttribute('src', radioValue);

    // html 문서에 추가하기
    div.appendChild(img);
}

function removeImg() {
    let div = document.getElementById('imageView');

    div.innerHTML = '<br/>'; // div 안의 nodelist까지 싹 다 지우기 때문에 완전한 빈 공간으로 만들면 안된다.
}