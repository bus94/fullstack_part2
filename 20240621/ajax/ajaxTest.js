// https://jsonplaceholder.typicode.com/users
// 데이터를 10개만 가져와서 부트스트랩 이용해서 테이블로 출력하기

// 출력하는 열의 이름
// id, name, username, email, address(city), phone 번호까지 테이블로 출력하기

// $().ready(function () {
//     $('tbody').ready(function () {
//         $.ajax({
//             url: "https://jsonplaceholder.typicode.com/users?_limit=10",
//             method: 'GET',
//             success: function (data) {
//                 console.log(data);
//                 for (let obj of data) {

//                     $('#data').append(
//                                // '<tr> <br>' 
//                                // + ' <td>' + obj.id + '</td>' +
//                                // + ' <td>' + obj.name + '</td>' + 
//                                // + ' <td>' + obj.username + '</td>' +
//                                // + ' <td>' + obj.email + '</td>' +
//                                // + ' <td>' + obj.address.city + '</td>' +
//                                // + ' <td>' + obj.phone + '</td>' 
//                               // +'</tr>'
//                                          `<tr>
//                                       <td>${obj.id}</td>
//                                       <td>${obj.name}</td>
//                                       <td>${obj.username}</td>
//                                       <td>${obj.email}</td>
//                                       <td>${obj.address.city}</td>
//                                      <td>${obj.phone}</td>
//                                  </tr>`
//                             );
                         
//                 }
//             },
//             error: function (error) {
//                 console.log(error.status);
//             }
//         });

//     });
// });

// 자바 스크립트 다운로드 되면 바로 실행 한 번만!
$().ready(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users?_limit=5",
        method: 'GET',
        success: function (list) {
            console.log(list);
            // 1. 성공했다면 배열을 테이블에 추가해야된다. 요소값 가져오기
            let tableBody = $('#userTableBody');
            tableBody.empty(); // 기존 지우기

            // 2.
            for (let user of list) {
                let row =
                `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.phone}</td>
                </tr>`;

                tableBody.append(row);
            }
        },
        error: function (error) {
            console.log(error.status);
        }
    });
});