// 웹 사이트를 시작 하면 무조건 1회는 실행한다.
// 필요할 때마다 사용하기 위해선 함수로 작성한다. → 대신 함수를 호출하지 않으면 함수는 실행하지 않으므로 실행하려면 호출해야한다.

function addAppend() {
    // 먼저 기준이 되는 태그를 가져온다.
    let fieldset = document.getElementById('addElement');
    // console.log(fieldset);
    // console.log(typeof fieldset);
    let p = document.createElement('p');
    p.innerHTML = '<b>fieldset 내부의 div태그 뒤에 추가</b>';

    // html 문서에 추가하기
    fieldset.appendChild(p);
}

function addBefore() {
    // 기준이 되는 태그 가져오기
    // 태그 생성하고 내용 채워준 후 앞쪽에 추가하기
    // insertBefore(태그1, 태그2) : 태그2 앞에 태그1을 삽입한다.
    let fieldset = document.getElementById('addElement');
    let p = document.createElement('p');
    p.innerHTML = '<b>fieldset 내부의 div태그 앞에 추가</b>';

    // div 태그가 하나 일 경우에는 사용해도 지장이 없다. 하지만 div 태그가 많다면 비효율적이다.
    // let div = document.getElementsByTagName('div')[0];

    let div = document.querySelectorAll('#addElement > div')[0];

    fieldset.insertBefore(p, div);
}

function moveElement() {
    // 필드셋에서 태그를 이동을 시킨다.
    // 기준이 되는 필드셋 요소 가져오기
    // children[인덱스]: 선택된 태그의 (인덱스)번째 해당되는 자식 요소를 얻어온다.
    // 얻어온 후 바디 태그 뒤쪽에 추가하기
    let fieldset = document.getElementById('addElement');
    console.log(fieldset.children[0]);
    console.log(fieldset.children[1]);

    // 특정 태그를 선택해서 다른 위치에 넣어주면 기존 위치에 있는 태그는 제거 된다. → 이동된다.
    let body = document.body;
    body.appendChild(fieldset.children[1]);
}