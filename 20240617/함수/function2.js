console.log("연결!");

function btn() { 
    document.getElementById('hello').style.fontSize = '16px'; 
}

function 알림창열기() {
    const var1 = document.getElementById('alert-box').style.display = 'block';
    console.log(var1);
}

function 알림창닫기() {
    const var1 = document.getElementById('alert-box').style.display = 'none';
    console.log(var1);
}

/* 
function 함수명() {
    축약하고 싶은 긴 코드
}

function 함수명(매개변수){
    매개변수에 데이터가 전달되지 않으면 undefined
}

가변인자는 '...'을 앞에 붙여 인수를 선언하면 인수가 배열로 만들어진다.
배열로 받는 모든 데이터는 Object객체로 나온다.
*/
/*
function printAll(...args) {
    // 배열로 들어온 매개변수의 값을 하나씩 꺼내서 사용하고 싶다면

    // 1) 일반 반복문 이용
    // for(let i = 0; i < args.length; i++){
    //     console.log(args[i]);
    // }

    // 2) 향상된 for문 이용
    // 배열의 첫 번째 인덱스의 값을 변수에 넣고 반복을 시작하고 마지막 인덱스의 값을 변수에 넣고 반복을 한 후 종료한다.
    for(let temp of args) {
        console.log(temp);
    }

    // console.log(typeof args); // object
    // console.log('배열에 저장된 데이터: ' + args);
    // console.log('배열의 개수: ' + args.length);
}
printAll('홍길동');
console.log("-----------------------");

printAll('홍길동', '이익준');
console.log("-----------------------");

printAll('홍길동', '이익준', '이서희');
console.log("-----------------------");
*/

// 익명함수
// 자바스크립트는 변수에 함수를 할당 할 수 있으므로 익명으로 만든 함수를 변수에 할당해서 사용 또는 실행 할 수 있다.
// 변수 이름이 함수 이름처럼 사용
const print = function () {
    console.log('print의 익명함수 실행');
}
// 익명함수를 할당한 변수를 함수 이름처럼 사용한다.
print();

const printA = print; // printA에 print의 함수를 할당할 수 있다.
printA();

// 일반함수도 저장 가능
function sum(a, b) {
    return a + b;
}
console.log(sum(10,30));

// 일반 변수에 함수를 집어 넣을 때는 함수명으로 기입
const sumA = sum;
console.log(sumA(10,30));
