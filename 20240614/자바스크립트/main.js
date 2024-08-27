// 자바스크립트 주석
// html - 뼈 → 웹의 내용을 작성
// css - 피부, 근육 → 디자인
// 자바스크립트는 웹의 동작을 구하는 것

// 자바스크립트 html의 내용을 변경할 수 있다.
// 속성, 스타일도 변경 가능하다.

// 자바스크립트는 객체 기반의 스크립트 언어
// 타입을 명시할 필요가 없다.

// System.out.println()과 똑같은 역할

console.log("Hello");

// 변수
// - 값 저장
// 변수 선언 시 타입 x
// var, let

// 변수 선언 x
// 선언하기도 전에 값이 할당 될 수 있다.
// undefined
// - 공간을 어딘가에는 만들었다. 근데 값이 없다.
// 아래의 코드와 같은 상황에서 출력되는 경우를 hoisting현상 이라고 한다. 
// hoisting현상에 의해 'a'라는 문자가 저장되지 않았음에도 a라는 공간에 10이라는 수가 저장되는 경우를 볼 수 있다.
// a = 10;
// console.log(a);
// var a;
// console.log(a);
// 따라서 변수는 선언을 항상 제일 위로 끌어 올려주는 것이 좋다.

// let은 var의 단점을 보완하기 위해서 나왔다.
// 변수를 만들고 초기화하지 않으면 undefined!
// console.log(b);
// let b;
// console.log(b);

let b;
console.log(b);

// 전역변수
let global_name = "hee";

// 지역변수
// 중괄호와 중괄호 안에 선언한 변수
// 중괄호 지역을 벗어나면 실행이 되지 않는다.
{
    let name = "seo";
    console.log(global_name);
    console.log(name);
}

console.log(global_name);
console.log(name);

// 변수 안에 값을 변경 못하게 막는 키워드
const a = 10;
console.log(a);

// a = 1000; 에러발생!
//TypeError: Assignment to constant variable

// const 장점
// 1. 보안상 이유
// 2. 동시에 값을 변경하지 못하게 막을 수 있다.
// 3. 코드 변경 시 실수를 방지할 수 있다.

// 자바스크립트 타입
// number
const num1 = 10;
const num2 = 17.1;

// typeof 변수명 → 해당 변수명의 타입을 출력 (보통 크롤링 할 때 쓰임)
console.log(typeof num1);
console.log(typeof num2);

// 숫자가 아닌 것을 숫자로 나눌 때 에러
const nan = 'not' / 5;
console.log(nan);

// 문자 string
// 문자 + 문자 연결 가능하다.
const name2 = 'Hello';
const name3 = name2 + ' World';

console.log(name2);
console.log(typeof name2);
console.log(name3);
console.log(typeof name3);

// boolean
// 참과 거짓 저장하는 변수
const result = true;

// null
const result2 = null;
console.log(typeof result2);

let text = 'hello';
console.log(text.charAt(0));

// 문자와 숫자 → String으로 변환해서 연결한다. (문자 연결하듯 출력)
text = '7' + 5;
console.log(text);
