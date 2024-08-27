$().ready(function () {
    // 이벤트 추가
    // loadPosts
    $('#loadPosts').click(function () {
        // console.log("실행");
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: 'GET',

            // 성공시
            // 데이터를 보내준다. 그 데이터를 받을 수 있는 매개변수를 하나 만든다.
            // ajax() 메서드 자체에서 데이터를 주고 받을 때 자동으로 변환해준다.
            // object → JSON 타입
            // JSON → object 타입으로 변환
            success: function (data) {
                console.log(data);
                $('#data').append(
                    '<p>ID: ' + data.id + '<br><br>Title: ' + data.title + '<br><br>body: ' + data.body + '</p>'
                );
            },

            // 실패시
            error: function (e) {
                console.log("에러!");
            }
        });
    });

    // loadComments
    $('#loadComments').click(function () {
        // 클릭이 되면 실행하는 함수
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/comments/1",
            method: 'GET',

            success: function (d) {
                console.log(d);
                $('#data').append(
                    '<p>ID: ' + d.id + '<br><br>Title: ' + d.title + '<br><br>body: ' + d.body + '</p>'
                );
            },

            error: function (e) {
                // 매개변수를 넣어놓으면 에러 객체가 반환된다.
                console.log(e.status);
            }
        });
    });

    // loadAlbums
    $('#loadAlbums').click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/albums/1",
            method: 'GET',
            success: function (d) {
                console.log(d);
                // 기존 내용 지우기
                $('#data').empty();

                // 새로운 내용 추가하기
                $('#data').append(
                    '<p>ID: ' + d.id + '<br><br>Title: ' + d.title + '<br><br>body: ' + d.body + '</p>'
                );
            },
            error: function (e) {
                console.log(e.status);
            }
        });
    });

    // 여러 개의 데이터를 가져오는 함수
    // loadPhotos
    $('#loadPhotos').click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos?_limit=5",
            method: 'GET',
            success: function (d) {
                // console.log(d);
                // 위에서 받아온 데이터가 여러 개이므로 배열 형태로 온다.
                $('#data').empty();

                for (let obj1 of d) {
                    console.log(obj1);
                    $('#data').append(
                        '<p>ID: ' + obj1.id + '<br><br>Title: ' + obj1.title + '<br><br>body: ' + obj1.body + '<br><br>Url: ' + obj1.url + '</p><br>'
                    );
                }
            },
            error: function (e) {
                console.log(e.status);
            }
        });
    });

});