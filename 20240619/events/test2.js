function allCheck() {
    // name 속성값이 all인 체크박스에 의해 체크가 되면(true) 전부 체크한다 
    // 체크를 풀면(false) 전부 체크 해제된다.
    const checkBoxs = document.getElementsByName('chk');
    let allCheck = document.getElementsByName('all')[0].checked;

    for(let checkBox of checkBoxs) {
        checkBox.checked = allCheck;
    }

    // 
}

function chkSelect() {
    const checkBoxs = document.getElementsByName('chk');
    // console.log(checkBox);

    let flag = true;

    for(let checkBox of checkBoxs) {
        // 체크박스 안에 속성 checked 이용해서 구별(true/false) 후 적용하기
        // console.log(checkBox.checked);
        
        // 빨강, 파랑, 노랑, 검정 체크 박스 중에 하나라도 체크 풀리면 false
        // 그땐 전체 선택하는 버튼도 체크가 풀릴 수 있도록 flag값을 false로 변경 후 저장한다.
        if(!checkBox.checked) {
            flag = false;
        }
    }

    // 만약 위에서 전부 true이면 전체 선택 버튼을 체크로 보여주기
    document.getElementsByName('all')[0].checked = flag;
}

function selectColor() {
    // 선택 버튼을 클릭했을 때 
    const checkBoxs = document.getElementsByName('chk');
    // 체크 박스의 버튼들 중에서 checked가 true이면 각각의 색상으로 변경하기
    for(let checkBox of checkBoxs) {
        console.log(checkBox.value);
        console.log(typeof checkBox.value);

        if(checkBox.checked) {
            document.getElementById(checkBox.value).style.backgroundColor=checkBox.value;
        } else {
            document.getElementById(checkBox.value).style.backgroundColor='white';
        }
    }
    // 만약 checked가 false이면(체크가 풀리거나 체크가 안된 경우) 하얀색 배경으로 한다.
}

function clearColor() {
    // let div = document.getElementById('colorBox');
    
    let divs = document.querySelectorAll('#colorBox div');
    // console.log(divs);
    
    for(let div of divs) {
        div.style.backgroundColor='white';
    }

    // 전체 선택 체크박스 요소를 가져온다.
    let all = document.querySelectorAll('input');
    all[0].checked = false;

    allCheck();
}