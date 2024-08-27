// $().ready(function() {
//     // console.log("hi");

//     $('select:eq(0)').change(function() {
//         let select = $('select:eq(0) > option:selected').eq(0).val();
//             $('input:text:eq(4)').val(select);
//     })

//     $('input:checkbox').click(function() {
//         let select = $('input:checkbox:checked').val();
//         console.log(select);
//         $('p').html(`선택된 취미는 ${select}입니다.`);
//         // 중복 처리를 못함..
//     });
// });

$().ready(function () {
    // 중복체크 버튼 클릭 이벤트
    $('#checkDuplicate').click(function () {
        // 1. input 창에서 입력한 값을 가져오기
        let userId = $('#userId').val();

        // 2. 윈도우창을 열기
        // open(); : 새로운 창 띄우기
        // open(url, windowName); 
        // url : 새로운 창이 열릴 때 새 탭에서 불러올 페이지의 url을 지정한다.
        //      ex) www.naver.com/login 등
        //      url이 없을 시 비워두거나 빈 문자열을 저장한다.
        // windowName : 새 창의 이름을 지정한다.

        let popup = window.open("", "popup", "top=200, left=350, width=300, height=200");
        // 팝업창 안에 
    });

    // 이메일 선택시 도메인 입력창에 선택한 이메일 도메인넣기
    // 1. 요소값 선택하기
    $('#email-select').change(function() {
        // this: 위치에 따라서 다르게 동작할 수 있다.
        //      현재는 이벤트 안의 this이기 때문에 발생한 이벤트 요소를 가져온다.
        let selectDomain = $(this).val();
        console.log(selectDomain);

        $('#email-domain').val(selectDomain);
    });

    // 취미 요소들에 이벤트를 추가
    // 값이 변경될 때 마다 이벤트 발생
    $('input[name=hobbies]').change(function() {
        // 여러 개의 취미를 클릭할 때마다 배열에 저장하기
        let selected = [];

        // 체크된 요소값 가져오기
        // console.log($('input[name=hobbies]:checked'));

        // each(): 선택된 요소들의 인덱스와 요소 자체를 리턴하며 인수로 지정된 함수를 반복해서 실행한다.
        $('input[name=hobbies]:checked').each(function() {
            selected.push($(this).val());
        });
        if(selected.length > 0) {
            // join(',')
            // 배열의 요소를 구분자를 이용해서 하나의 문자로 리턴한다. (자바와 같다)
            // $('#hobby-message').text('선택된 취미는 ' + selected.join(',') + '입니다.');
            $('#hobby-message').text(`선택된 취미는 ${selected} 입니다.`);
        } 
        // 이부분은 써도 되고, 안써도 된다.
        // else {
        //     $('#hobby-message').text(`선택된 취미는 없습니다.`);
        // }
    });

});