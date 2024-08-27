// 속성 선택자
// 태그와 태그에 지정된 속성 및 속성값으로 요소 찾기

// 태그이름[속성이름]
// - 지정된 속성을 가지고 있는 모든 요소를 선택한다.

function attributeSelector() {
    // 이미지 태그 중에 id속성을 가지는 요소값 찾기
    // let img = $('img[id]');

    // img 태그 중에 title 속성이 img02인 요소만 가져온다.
    // img02로 완전히 일치되는 문자의 요소만 적용되는 것이다. (포함과는 다른 일치의 개념)
    // let img = $('img[title=img02]');

    // 태그이름[속성이름~=문자열]
    // 지정된 문자열이 공백을 경계로 포함된 모든 요소를 선택한다.
    // → = 과 ~=(*=) 의 차이 ☞ 일치와 포함의 차이
    let img = $('img[title~=img02]');
    // let img = $('img[title*=img02]');
    
    // img02로 시작하는 모든 요소를 선택
    // ^=
    // let img = $('img[title^=img]');

    // 02로 끝나는 모든 요소를 선택
    // $=
    // let img = $('img[title$=02]');

    img.css('opacity', '0.2');
    console.log(img);
}

// 속성값을 얻어오는 함수
// attr(): 선택된 요소 집합의 첫번째 요소로 지정된 속성 값을 리턴하거나 선택된 요소의 지정된 속성을 전달받은 값으로 설정한다.
function changeImg() {
    // 값이 있으면 그대로 가져오고, 없으면 undefined
    console.log($('img').eq(0).attr('id'));
    console.log($('img:eq(4)').attr('title'));
    console.log($('img:eq(3)').attr('src'));
    
    // attr('속성이름', '속성값');
    // 인수로 지정된 속성의 값을 변경한다.
    $('img:eq(2)').attr('src', './images/img05.jpg');

    // removeProp()
    // - 지정된 프로퍼티를 제거한다.
    // removeAttr()
    // - 지정된 속성을 제거한다.
    

}