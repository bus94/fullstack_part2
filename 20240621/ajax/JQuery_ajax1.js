// 서버 - 유저가 데이터를 요청하면 데이터를 보내주는 간단한 프로그램일 뿐이다.

// 서버에 데이터를 요청할 때는
// 1. 어떤 데이터인지 url로 잘 기재해야한다.
// 2. 어떤 방법으로 요청할지 결정 get/post 데이터를 보내준다.

// get 요청
// - 서버에 있던 데이터를 읽고 싶을 때
// post 요청
// - 내가 서버에 데이터를 보내고 싶을 때
// get/post 요청을 보내면 브라우저가 새로고침

// put/delete 요청
// - 동일 url로 전송할 때 고정해서 보낼 수 있다.
// - spring boot에서 자세히 할 예정 (spring)

// 자바스크립트 object 타입
// json 타입과 유사하다
// 모바일이나 파일 시스템 혹은 여러 가지 다양한 프로그램 언어와 호환성이 좋다.
let test = {
    "name" : "hee",
    "age" : 26,
    "address" : "서울시"
};

// 자바스크립트 object 객체를 Json타입으로 변경
// Json은 모두 문자타입으로 바뀌기 때문에 string으로 타입을 확인할 수 있다.
// 직렬화
let json = JSON.stringify(test);
console.log(json);
console.log(typeof json);

let json2 = JSON.stringify(true);
console.log(json2);
console.log(typeof json2); // string

// 역직렬화
// JSON 타입으로 서버와 통신해서 데이터를 텍스트 기반으로 받아왔다.
// JSON 타입을 Object 타입으로 변환
let obj1 = JSON.parse(json);
console.log(obj1);
console.log(typeof obj1); // object
console.log(obj1.address);

// Ajax 동작 방식
// 1. request(요청)
// - 브라우저가 서버에 정보를 요청한다.
// 2. 서버의 동작
// - 서버는 JSON,XM 등의 형식으로 데이터를 전달한다.
// 3. response(응답)
// - 브라우저에서 이벤트가 발생하여 내용을 처리한다.

// $.ajax({
//     type:"전송방식 get/post",
//     url:"url주소를 작성",
//     contentType:"json/xml/text", 
//     json: JSON 형식의 데이터로 배열, 객체를 포함하는 문자열
//     xml: 태그형식으로 데이터를 주고 받음
//     text: 일반적인 문자열 string
//     html: HTML을 포함한 문자열 기본적으로 MIME 유형
// 
//     success : 성공시 실행하는 함수
//     erro : 실패시 실행하는 함수
// 
//     complete : 요청 완료 시 실행하는 함수 성공여부 관계없이 무조건 실행
// });

