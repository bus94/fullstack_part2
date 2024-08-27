function a4() {
    $('li > span').css('color', 'orange');
}

// 자손(공백)
function a5() {
    $('li span').css('color', 'green');
}

// nth-child(), nth-last-child()
// 같은 부모 요소를 가지는 형제 요소 중에 특정 순서에 있는 요소를 선택하는 선택자다
function a6() {
    // $('li').eq(0); 아래와 같은 의미이다.
    // $('li:eq(0)');

    // 홀수의 요소만 선택하고 싶은 경우
    // $('li:nth-child(odd)').css('background', 'dodgerblue');
    // $('li:nth-child(even)').css('background', 'dodgerblue');

    // 3번째 인덱스부터 전부 선택해라
    // n은 자동으로 0부터 1씩 증가하고, 정수로 되어있다.
    $('li:nth-child(n)').css('background', 'dodgerblue');
}

// 첫 번째 요소 선택 first
// 마지막 요소 선택 last
function a7() {
    // 같은 부모 요소를 가지는 형제들 중에서 첫번째
    $('li:first-child').css('background', 'dodgerblue');
}

function a8() {
    // 같은 부모 요소를 가지는 형제들 중에서 첫번째
    $('li:last-child').css('background', 'dodgerblue');
}
