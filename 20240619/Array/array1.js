// 이모티콘 사용 - 윈도우 단축키: Window키 + .

// 배열
// -여러 개를 한 번에 저장하는 구조

// 1. new
//    새 객체를 만들 듯 new 키워드를 이용
const arr1 = new Array();

// 2. []
const fruits = ['🥝','🍇','🍉','🍎','🍓'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

console.log('==============================');

// 일반 for
// 향상 for
for(let fruit of fruits) {
    console.log(fruit);
}

console.log('==============================');

// forEach 문
fruits.forEach(function(fruit, index, arr1){
    console.log(fruit, index, arr1);
});

console.log('==============================');

// <배열에서 제공하는 함수>
// 배열 뒤에서 부터 추가
fruits.push('🥭','🍈');
console.log(fruits);

console.log('==============================');

// 배열 뒤에서 부터 삭제
fruits.pop();
console.log(fruits);

// 배열 앞에서 부터 추가
fruits.unshift('🍉','🥭');
console.log(fruits);

// 배열의 앞 부분 부터 삭제
fruits.shift();
console.log(fruits);

// split()
// 구분자
const fruits2 = '🥝,🍇,🍉,🍎,🍓';
console.log(fruits2.split(','));

// slice(시작,끝)
// 배열이나 문자를 자를 경우 → 시작은 데이터를 포함, 끝은 포함x
console.log(fruits);
const result1 = fruits.slice(2,4);
console.log(result1);

// 배열 연결
// concat(연결할배열, 연결할 배열);
console.log(fruits.concat(fruits2));
console.log(fruits.concat(fruits2.split(',')));


console.clear(); // 콘솔 지우기
console.log(fruits);
// 검색
// 검색해서 인덱스 번호 반환
// 만약 중복되는 데이터가 있을 경우 lastindexof() 통해 마지막부터 찾기
console.log(fruits.indexOf("🍎"));

// 문자가 포함되어있는지 검사
// 포함 되어있으면 true, 포함 되어있지 않다면 false
// 비밀번호 검사 할 때 사용
console.log(fruits.includes("🍎")); // true
console.log(fruits.includes("🍍")); // false

// 정렬
// 정렬할 때 숫자가 가장 먼저 정렬된다.
// 이후 영문자, 한글 순서
const arr2 = ['Abc', 1000, '한글'];
console.log(arr2.sort()); // 출력: [1000, 'Abc', '한글']
console.log(arr2.reverse()); // 출력: ['한글', 'Abc', 1000] - 정렬 후 reverse하면 정렬된 상태에서 reverse 적용된다.

const arr3 = ['Abc', 1000, '한글'];
console.log(arr3.reverse()); // 출력: ['한글', 1000, 'Abc']

console.clear();
// '문자'.includes('찾을 단어')
// 정규식
//   기호: / /
//   /찾을문자/.test(변수명)
// 정규식은 결과를 true, false로 반환
// 대소문자 구분된다.

// 'abc'라는 문자가 있어?
const result2 = /abc/.test('abcdefg'); 
console.log(result2); // 출력: true

// 알파벳 범위를 설정 []
// a ~ z 중에 아무 문자 하나가 있어?
const result3 = /[a-z]/.test('abcdefg');
console.log(result3); // 출력: true

// 대소문자 범위를 설정 []
result4 = /[a-zA-Z]/.test('하하A호호');
console.log(result4); // 출력: true

// 숫자 범위를 설정 []
// 0~9 사이 숫자 하나가 있어?
const result5 = /[0-9]/.test('1');
console.log(result5); // 출력: true

// 한글 범위 설정 []
// const result6 = /[ㄱ-ㅎ]/.test('반가');
// console.log(result6); // 출력: flase - ㄱ부터 ㅎ까지의 하나의 문자로만 가능
const result6 = /[가-힣]/.test('반가');
console.log(result6); // 출력: true

// 특수문자 포함해서 아무 문자 1개 이상 있어?
// const result7 = /\S/.test('abcde'); // \ + S(대문자여야함 - 소문자는 s라는 문자가 있는지 확인하게 됨)
// console.log(result7); // 출력: true
const result7 = /\S/.test('가'); 
console.log(result7); // 출력: true

console.clear();
// 시작하는 문자를 검사
// /^문자/
console.log(/^a/.test('adfd')); // 출력: true
console.log(/^a/.test('badfd')); // 출력: false

// 문자로 끝나는 검사
// /문자$/
console.log(/a$/.test('bcde')); // 출력: false

// or |
// ex) e 또는 f 중 하나를 포함해?
console.log(/(e|f)/.test('bcde')); // 출력: true
console.log(/(e | f)/.test('bcde')); // 출력: false - 공백 차이
console.log(/(e | f)/.test('bcde ')); // 출력: true - 공백 차이

// 중복적으로 찾을 때
// /찾을문자+/    /a+/  aaaa

// 이메일 clinihi@naver.com
// . : 정규식의 마침표를 의미 → 문자라는 표현을 위해 백슬래시(\) 기입하기 (특수문자들을 정규식 안에서 표현할 때 자주 쓰임)
const result8 = /\S+@\S+\.(com|co\.kr)/.test('clinihi@naver.com');
console.log(result8); // 출력: true

console.clear();

// ex) 이메일을 입력 받는 스크립트
// 자바스크립트로 확인 
function checkEm() {
    const checkEmail = document.getElementById('email').value;
    const resultEm = document.getElementById('resultEm');
    const isResultEm = /\S+@\S+\.(com|co\.kr)/.test(checkEmail);
    console.log(isResultEm);
    if(isResultEm) {
        resultEm.innerHTML = '이메일 사용 가능';
        resultEm.className = 'green';
    } else {
        resultEm.innerHTML = '이메일 사용 불가';
        resultEm.className = 'red';
    }
}

// /\s/ 공백검사 공백이면 true, 아니면 false