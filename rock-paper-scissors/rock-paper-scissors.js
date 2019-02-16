// 비동기 연습의 목적

document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0';

var left = 0;

setInterval(function(){

   document.querySelector('#computer').style.background =
   'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + left + ' 0';
}, 100);