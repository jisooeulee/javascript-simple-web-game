// 비동기 연습의 목적

//document.querySelector('#computer').style.background = 'url(images/rock-paper-scissors.png) 0 0';
var imageCoordinates = 0;
var rockScissorPaper = { // 자바스크립트 객체는 딕셔너리 자료구조 역할을 할 수 있다. 1:1매칭을 표현.
    rock : '-140px',
    paper : '-250px',
    scissor : '0'
};

// image 좌표를
function computerChoice(imageCoordinates) {
    return Object.entries(rockScissorPaper).find(function(v) { // Object.entries(객체)로 객체를 배열로 바꿀 수 있다. 키와 값의 2차원 배열로 바뀐다. 배열 find는 반복문 이지만 원하는 것을 찾으면(return이 true) 멈춘다. 2차원 배열의 경우 쓴다. (1차원의 경우는 indexOf를 쓴다)
        return v[1] === imageCoordinates; // 이 return의 값이 true이면 find의 반복문을 멈춘다.
    });
}


// 주먹 -> 가위 -> 보의 순으로 img를 표시하기 위한 function.
setInterval(function () { // setInterval() : 0.1초마다 계속 실행한다.
    if (imageCoordinates === rockScissorPaper.rock) {
        imageCoordinates = rockScissorPaper.scissor;
    } else if (imageCoordinates === rockScissorPaper.scissor) {
        imageCoordinates = rockScissorPaper.paper;
    } else {
        imageCoordinates = rockScissorPaper.rock;
    }
    document.querySelector('#computer').style.background =
        'url(images/rock-paper-scissors.png) ' + imageCoordinates + ' 0';
}, 100);


document.querySelectorAll('.btn').forEach(function(btn) { // querySelectorAll을 할 때는 반복문을 돌려야 한다. 반복문을 돌면서 이벤트 리스너 연결을 해줘야 한다.
   // click 이벤트에 따른 내 선택과 컴퓨터와 비교한다.
    btn.addEventListener('click', function () {
       var myChoice = this.textContent;
       console.log('my choice : ' + myChoice, "computer's choice :" + computerChoice(imageCoordinates)[0]);

       // 리팩토링 할 것! 반복되는 규칙을 찾아서 함수로 빼자!
       if (myChoice === 'rock') {
           if (computerChoice(imageCoordinates)[0] === 'rock') {
                console.log('draw...');
           } else if (computerChoice(imageCoordinates)[0] === 'paper') {
                console.log('you lose...');
           } else {
               console.log('win !');
           }
       } else if (myChoice === 'scissor') {
           if (computerChoice(imageCoordinates)[0] === 'scissor') {
               console.log('draw...');
           } else if (computerChoice(imageCoordinates)[0] === 'rock') {
               console.log('you lose...');
           } else {
               console.log('win !');
           }
       } else if (myChoice === 'paper') {
           if (computerChoice(imageCoordinates)[0] === 'paper') {
               console.log('draw...');
           } else if (computerChoice(imageCoordinates)[0] === 'scissor') {
               console.log('you lose...');
           } else {
               console.log('win !');
           }
       }
   });
});

