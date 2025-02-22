// function add() {
//     const id = document.getElementById('id').value;
//     const pw = document.getElementById('pw').value;
//     const address = document.getElementById('address').value;
//     const phone = document.getElementById('phone').value;

//     let tbody = document.getElementsByTagName('tbody')[1];

//     let tr = document.createElement('tr');
//     tr.innerHTML = `<td>${id}</td><td>${pw}</td><td>${address}</td><td>${phone}</td>`;

//     tbody.appendChild(tr);
// }

function tableAdd(event) {
    // 추가 버튼을 클릭하면 폼 태그 안에 있는 모든 input 요소들을 가져오기

    // 아래의 코드로 진행할 경우 form을 클릭하면 서버로 전송하기 때문에 전송을 막는 이벤트를 추가해야한다.
    event.preventDefault();
    // let form = document.getElementsByTagName('input');
    // forms: 현재 문서의 form을 배열 형태로 저장하고 있는 자바스크립트 객체
    let form = document.forms[0];
    // console.log(form[0]);

    // form이_저장된_변수.name속성값.value
    // → form에서 지정한 name 속성을 가지고 요소에 입력된 값을 얻어올 수 있다.
    let values = [
        form.id.value,
        form.pw.value,
        form.address.value,
        form.phoneNumber.value
    ];
    // console.log(values);

    // 배열을 이용해서 각각의 값을 저장하고 form에 데이터가 모두 입력 되었는지 확인한다.
    // null, '', undefined
    // 아이디가 입력되지 않았으면 alert()
    // 비밀번호, 주소, 폰번호
    for (let i = 0; i < values.length; i++) {
        // 배열에서 첫번째 데이터부터 순서대로 꺼내오기
        let value = values[i];
        if (value == null || value.trim() == '' || value == undefined) {
            switch (i) {
                case 0:
                    alert("아이디를 입력하세요");
                    // 아이디가 입력되지 않았으므로 아이디 텍스트 상자의 내용을 지우고 포커스를 위치 시킨다.
                    form.id.value = '';
                    form.id.focus();
                    // 테이블에 추가할 아이디가 입력되지 않았기 때문에 tableAdd()함수를 종료시킨다.
                    return;

                case 1:
                    alert("비밀번호를 입력하세요");
                    form.pw.value = '';
                    form.pw.focus();
                    return;

                case 2:
                    alert("주소를 입력하세요");
                    form.address.value = '';
                    form.address.focus();
                    return;

                case 3:
                    alert("전화번호를 입력하세요");
                    form.phoneNumber.value = '';
                    form.phoneNumber.focus();
                    return;
            }
        }
    }

    // 배열에 저장된 데이터를 id 속성이 resultTable인 테이블에 추가하기
    // 1. resultTable 요소 가져오기
    // 2. 테이블에 추가할 tr을 만들기 <tr></tr>
    // 3. tr안에 td를 만들기 <td></td>
    // 4. 그 안에 value를 각각 넣어주기
    // 5. tr에 추가하기

    
    let tbody = document.getElementById('addtr');
    createRow(values);
    tbody.appendChild(createRow(values));

    // 테이블에 데이터를 추가한 후 다음 데이터를 입력받기 위해 텍스트 상자의 내용을 모두 제거한다.
    form.id.value = ''
    form.pw.value = ''
    form.address.value = ''
    form.phoneNumber.value = ''
    // 아이디 텍스트 상자로 포커스를 이동시킨다.
    form.id.focus()

}

// 한 행을 만들어서 tbody에 넘겨주는 함수
function createRow(values) {
    console.log(values);
    // 1. tr 태그
    // <tr></tr>
    let tr = document.createElement('tr');

    // 2. values 변수 안에 있는 값을 td로 넣어주기
    // 열의 개수 (인수로 넘어온 values 배열의 길이만큼)
    // 자동으로 반복해서 td를 만들어서 tr에 넣어준다.
    for (let value of values) {
        // <td></td> td태그 생성
        let td = document.createElement('td');
        // td 태그에 values배열에 저장된 데이터를 넣어준다.
        td.innerHTML = value;

        // tr태그에 td 태그를 넣어준다.
        tr.appendChild(td);

    }

    let td = document.createElement('td');
    td.innerHTML = `<input type="button" value="${values[0]}번 데이터삭제" class="btn btn-danger" onclick="removeCurrent(this)"/>`;
    tr.appendChild(td);

    console.log(tr);
    // tbody 태그에 추가할 tr태그를 리턴시킨다.
    return tr;
}

// 마지막 데이터부터 1행씩 
function removeLast() {
    // 테이블 요소값 가져오기 addtr
    let tbody = document.getElementById('addtr');
    // 삭제할 때는 removeChild()
    // 괄호 안에 삭제할 요소 lastChild
    tbody.removeChild(tbody.lastChild);
}

// 테이블 전체 삭제
function removeAll() {
    // tbody 태그를 공백으로 채운다.
    document.getElementById('addtr').innerHTML = '';
}

