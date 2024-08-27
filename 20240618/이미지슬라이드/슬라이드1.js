// // 버튼 1번이 눌렸을 때 실행
// let slidebtn1 = document.getElementById("btn1");
// console.log(slidebtn1);

// // 이벤트 설정
// slidebtn1.addEventListener('click',
//      function(){
//         document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
// });

// // 버튼 2번이 눌렸을 때 실행
// let slidebtn2 = document.getElementById("btn2");
// console.log(slidebtn2);

// // 이벤트 설정
// slidebtn2.addEventListener('click',
//      function(){
//         document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
// });

// // 버튼 3번이 눌렸을 때 실행
// let slidebtn3 = document.getElementById("btn3");
// console.log(slidebtn3);

// // 이벤트 설정
// // mnargin-left 똑같다.
// slidebtn3.addEventListener('click',
//      function(){
//         document.querySelector('.slide-container').style.transform = 'translateX(-200vw)';
// });

/* 
1) 1번 버튼을 누르면 1번째 그림으로 이동하기

2) 다음 버튼을 하나 추가해서 
다음 버튼을 클릭하면 1번째 그림
다음 버튼을 클릭하면 2번째 그림
다음 버튼을 클릭하면 3번째 그림

다음을 또 누르면 1번째 그림으로 돌아가기
계속 무한 반복으로 돌 수 있도록 코드 작성하기

요소값 : 버튼 요소, 컨테이너 요소
*/

//슬라이드1.js
let count =0;

// 버튼1번이 눌렸을 때 실행!
let slidebtn1=document.getElementsByClassName('btn1')[0];
//이벤트를 설정한다.
slidebtn1.addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translate(0vw)';
    count=0;
});

// 버튼2번이 눌렸을 때 실행!
let slidebtn2=document.getElementsByClassName('btn2')[0];
//이벤트를 설정한다.
slidebtn2.addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translate(-100vw)';
    count=1;
});    

// 버튼3번이 눌렸을 때 실행!
let slidebtn3=document.getElementsByClassName('btn3')[0];
//이벤트를 설정한다.
slidebtn3.addEventListener('click',function(){
    document.querySelector('.slide-container').style.transform='translate(-200vw)';
    count=2;
});    


//다음버튼 이 눌렸을 때 실행!
let slidebtn4=document.getElementsByClassName('btn4')[0];
//이벤트를 설정한다.
slidebtn4.addEventListener('click',function(){
    if(count===0){  
       document.querySelector('.slide-container').style.transform='translate(-100vw)';
       count=1;
    }else if(count===1){
        document.querySelector('.slide-container').style.transform='translate(-200vw)';
        count=2;
    }else if(count===2){
        document.querySelector('.slide-container').style.transform='translate(0vw)';
        count=0;
    }
});    

//이전버튼 이 눌렸을 때 실행!
let slidebtn5=document.getElementsByClassName('btn5')[0];
//이벤트를 설정한다.
slidebtn5.addEventListener('click',function(){
 if(count===1){
         document.querySelector('.slide-container').style.transform='translate(0vw)';
         count=0;
     }else if(count===2){
         document.querySelector('.slide-container').style.transform='translate(-100vw)';
         count=1;
     }
});    


