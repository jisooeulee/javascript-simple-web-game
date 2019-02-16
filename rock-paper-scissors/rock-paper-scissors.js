// 비동기 연습의 목적

document.querySelector('#computer').style.background = 'url(images/rock-paper-scissors.png) 0 0';

var left = 0;

setInterval(function(){

   document.querySelector('#computer').style.background =
   'url(images/rock-paper-scissors.png) ' + left + ' 0';
}, 100);