// 이미지를 변경하기 위해서는 버튼을 눌렀을 때 이동할 수 있는 요소들을 가져와야 된다.
// document.getElementsByTagName('a');
let a = document.querySelectorAll('a');
let img = document.querySelectorAll('img')[0];

// 이미지 사진의 기준을 잡는다.
let count = 3;

console.log(a);

// 이벤트 생성
a[0].addEventListener('click',function() {
    console.log(a[0]);
    // 이미지를 이전으로 이동
    count = --count < 1 ? 5 : count;
    // 요소 값 안에 속성을 수정할 때는 setAttribute('속성key', '속성value');
    // 이미지 경로를 수정한다.
    img.setAttribute('src','./img/img0' + count + '.jpg');
});

a[1].addEventListener('click', function() {
    console.log(a[1]);
    // 이미지를 이후로 이동
    count = ++count > 5 ? 1 : count;
    console.log('5보다 큰지 확인하는 count: ' + count);
    img.setAttribute('src', `./img/img0${count}.jpg`);
});

// 타이머 기능 중에서 몇 초 마다 실행
// setInterval("몇 초마다 실행!", "3초");
function autoSlide() {
    // 이미지를 이후로 이동
    count = ++count > 5 ? 1 : count;
    console.log('5보다 큰지 확인하는 자동 count: ' + count);
    img.setAttribute('src', `./img/img0${count}.jpg`);
}
setInterval(autoSlide, 3000);

// 이전 버튼이든 이후 버튼이든 둘 중 하나를 클릭하면 자동으로 setInterval를 멈추기
function stopAutoSlied() {
    clearInterval(autoSlideInt);
}

// 버튼을 클릭하면 이미지가 자동으로 움직이는것이 멈춘다. 
// 만약 몇 초 동안 버튼을 클릭하지 않으면 다시 움직이기!

