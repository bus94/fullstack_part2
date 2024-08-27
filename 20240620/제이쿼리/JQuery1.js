// 제이쿼리 작성법
// 제이쿼리의 시작은 $로 시작한다.
// $('css 셀렉터').메서드();
// 위의 $('css 셀렉터') 하나만 가져오는 것이 아니라 여러 개를 찾아온다.
// 그래서 배열 형태(object)로 데이터를 받아서 온다.

// 무조건 한 번 실행해야되는 문장들은 아래 있는 함수처럼 사용이 가능하다. - 프로그램이 시작된다는 내용
// $().ready(function() {
//     console.log("연결");
// });

function imgSize() {
    // 자바스크립트
    // document.getElementsByTagName('img')[0].style.width = '100px';
    // 파일을 수정하면 브라우저 자체가 새로고침이 된다.

    // JQuery
    // $('img').css('속성key', '속성값');
    // $('img').css('width', '100px');
    // $('img').css('height', '200px');

    // 위의 코드 한 줄로
    // $('img').css({'width':'100px', 'height':'200px'});

    $('img').css({'width': '100px', 'height': '200px'}).css('opacity', '0.5');

}

function highLight() {
    // ul 리스트 배경색을 원하는 색으로 변경
    $('#list').css('background', 'pink');

    // ul 요소 중에 첫번째 요소에 css를 변경할 때 사용하는 메서드
    // 첫번째 요소들을 접근할 때 사용한다.

    // 필터링 함수
    // first()
    // 아래의 코드는 자바스크립트에서 let temp = document.getElementById('list'); 와 같은 내용
    $('#list li').first().css('background', 'skyblue');

    // last()
    $('#list li').last().css('background', 'yellowgreen');

    // 내가 원하는 요소에 접근하는 방법
    // eq(index) - index는 0부터 시작
    $('#list li').eq(1).css('background', 'dodgerblue');

    // slice(시작, 끝 + 1);
    // 모든 배열에서 슬라이싱 - 문자를 자르거나 범위값을 지정할 때는 끝나는 번호의 데이터는 포함하지 않는다. (끝+1)
    $('#list li').slice(2,6).css('background', 'chocolate');
}

// 버튼을 클릭했을 때만 실행, 이미지를 추가하는 함수
function addImg() {
    // 요소값을 선택된 div 내부로 추가
    // .append(): 선택된 요소의 마지막에 추가
    // .prepend(): 선택된 요소의 맨 앞에 추가
    $('div').append('<img src="./img/img03.jpg">');
    $('div').prepend('<img src="./img/img01.jpg">');

    // 선택된 요소값 외부에 추가
    // .before(): 선택된 요소의 앞에 추가된다.
    // .after() : 선택된 요소의 뒤에 추가한다.
}

// 버튼을 클릭했을 때만 실행, 이미지를 숨기는 함수
function hideImg() {
    // .hide(): 선택한 요소를 css 자동으로 조정해서 사라지게 한다.

    // 모든 img태그를 선택한 후 전부 숨긴다.
    // $('img').hide();
    // $('img').css('display':'none');

    // 필터 함수를 이용해서 원하는 인덱스 요소만 숨기기할 수 있다.
    // first(), last(), eq(index)

    // hide의 특별한 기능 - 천천히 사라지는 효과
    // hide(ms);
    $('img').hide(2000);
}