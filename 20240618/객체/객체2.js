const dog = {
    name: '댕댕이',
    age: 2,
    sound: '멍멍',

    // 변수만 묶는 것이 아니라 함수를 가질 수 있다.
    // key에 함수를 할당할 때 함수의 이름은 의미가 없다.
    // 익명함수를 만들어서 사용할 수 있다.
    // 객체에 정의한 함수에서 객체의 멤버를 참조할 땐 자신을 의미하는 "this"를 붙여야한다.
    print: function() {
        console.log(this.sound);
    }
    // key에 할당하지 않고 바로 함수를 정의는 할 수 있다. 밑처럼 사용하는 것은 지양한다.
    // print() {
        
    // }
};

// Object 객체 안에 함수를 실행할 때는 
// 함수실행 → key()

dog.print();

// 객체 선언과 동시에 함수를 만들 수도 있고 따로 추가할 수 있다. (주입)
// 객체 외부에서 객체에 주입할 함수를 만들 수 있다.
const cat = {
    name: '냥냥이',
    sound: '야옹'
};
console.error("추가 전: " + cat); // 출력했을 때 나오는 결과는 실제 에러는 아니다
console.warn("추가 전: " + cat);

const say = function() {
    console.log(this.sound);
}

cat.say = say;
console.warn("추가 후: " + cat);

// 선언한 함수를 객체에 추가하기
// 추가 하기 위한 변수명이 결국 함수명이 된다.
cat.say();

