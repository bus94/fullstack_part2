/*
const name = "seohee";
const age = 20;
const hei = 170.1;
const wei = 40;

function print(name, age) {
    console.log(name);
    console.log(age);
}

print("이서희", 20);

// 자바 스크립트에서 기본타입을 사용해서 여러 개의 인자를 변수들을 추가하면 매개변수 길이가 점점 늘어나게 도니다.

// 1. 가변인자 ...변수명
// 2. 객체 (Object) 여러 타입을 그룹으로 묶어서 저장하는 기능

// {}
const obj1 = {};

// key:value (키값으로 저장)
const dog = {
    name : '강아지',
    age : 2
}

// object에 담긴 메모리는 따로 있고 변수 메모리 공간에 저장되기엔 너무 큰 데이터라 dog, obj 변수의 메모리에는 주소가 저장된다.
// 자바 클래스랑 비슷하다.
console.log(dog);
console.log(dog.name);
console.log(dog.age);

function printA(animal) {
    console.log(`동물의 이름: ${animal.name} 나이: ${animal.age}`);
}

// 함수실행
printA(dog);

// 위에 있는 object 객체 안에 각각의 key를 이용해서 값을 변경
dog.name = "멍멍이";
print(dog.name);

dog.age = 3;
print(dog.age);

const cat = {
    name : '냥냥이',
    age : 2
}

//dog = cat;

print(dog.name);

// 위에서 각각의 key를 이용해서 data를 변경할 땐 가능하다. 그 각각의 key를 저장하는 메모리 주소는 변경할 수 없다. (이유: const 이기 때문)

// Object
//  자바스크립트의 타입
//  관련 있는 데이터나 함수의 묶음이다.

// 만약 토끼에 대한 정보를 저장하려면 이름, 나이를 또 저장해야한다.
const rabbit = {
    name : '토깽이',
    age : 1
};

// object 끼리 동일한 변수명이 중복되어 생길 수 있다. → class 문법 생겼다.
*/

const rabbit = {
    name : '토깽이',
    age : 1
};

// object 여러 개의 key를 가지고 있다. 그 안에 key가 존재하는지 확인
// in

console.log(rabbit);
// name이라는 key가 있어?
// → key in object_타입의_변수명
// in 연산자 통해 실행하면 key가 있다면 true, 없다면 false 반환
console.log('name' in rabbit); // true
console.log('age' in rabbit); // true
console.log('color' in rabbit); // false

console.log("-------------------");
// 반복을 이용해서 하나씩 꺼낼 때
for(let key in rabbit) {
    console.log(key + ": " + rabbit[key]);
}
console.log("-------------------")
// object에서 keys() 메서드
// key만 뽑아 올 때 배열형태
const key = Object.keys(rabbit);
console.log(key);

// Object에서 values()메서드
// Object.values(rabbit);

// key, value을 한꺼번에 뽑아오고 싶을 경우
const en = Object.entries(rabbit);
console.log(en); // 0: ['name', '토깽이'], 1: ['age', 1]

// 위에서 2차원 배열로 뽑아온다.
console.log(en[0]); // ['name', '토깽이']
console.log(en[0][0]); // name

// 만약 key 삭제
// delete rabbit.name;
// print(rabbit);

