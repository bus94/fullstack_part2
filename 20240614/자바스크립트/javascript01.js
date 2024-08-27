// 웹 문서에 출력하겠다!
// write() 줄바꿈 없음
document.write(4 * 5);
document.write("<br>");
document.write("집에 가고싶다<br>");
document.write("2시간 남았다!<br>");

console.log("나이: " + 20);

console.log('1 + 1 = ' + (1 + 1));
console.log('1 + 1 = (1 + 1)');
console.log(`1 + 1 =  ${1 + 1}`);

// 산술연산자는 자바랑 똑같다.

console.log("===============");

console.log('5' - 2);
// 문자 → 숫자로 변경
// parseInt('5')
console.log(parseInt('5') + 2);

// 올림함수 Math.ceil()
// 내림함수 Math.floor()
// 반올림함수 Math.round()
// 제곱함수 Math.pow()

// ++, -- 똑같다.
let num = 2;
const num2 = num++;
const num3 = --num;

// +=, -=, *= 똑같다.
// 비교연산자도 똑같다.
// 대신, == : 데이터 타입은 구별하지 않고, 값만 비교하여 true, false 확인! 
// === : 데이터 타입까지 구별해서 비교!
console.log(`10 == 10 = ${10 == 10}`); // true
console.log(`10 == 10 = ${10 == '10'}`); // true
console.log(`10 == 10 = ${10 === '10'}`); // false

console.log(`10 != 10 = ${10 != 100}`); // true
// 문자지만 타입 구별 안하므로 값이 같아서 false 출력
console.log(`10 != 10 = ${10 != '10'}`); // false
// 데이터 타입 구별하여 타입이 다르므로 true
console.log(`10 != 10 = ${10 !== '10'}`); // true

// 논리연산자 and && / or || / not !

// 자바스크립트도 0을 제외한 모든 숫자를 true로 인식한다. 0은 모두 거짓으로 취급한다.

console.log(`!1 = ${!1}`); // false
console.log(`!1 = ${!0}`); // true
console.log(`!1 = ${!!3}`); // true

const name2 = 'seohee';

if (name2 === 'seohee') {
    console.log("맞다!");
    document.write("맞다!");
    // alert("문자 타입으로 저장"): 팝업창 출력
    alert("맞다!");
} else {
    console.log("아니다!");
    document.write("아니다!");
    alert("아니다!");
}

// 현재 나이는 20세
// 20세 이상이면 "성인", 미만이면 "청소년"
// ?
let age = 20;
console.log(age >= 20 ? '성인' : '청소년');
alert(age >= 20 ? '성인' : '청소년');

// 웹 브라우저를 저장해서 실행할 때마다 위에 있는 내용들이 계속 출력된다.
