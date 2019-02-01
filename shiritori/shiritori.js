/* 
js로 html태그 만들기
document객체의 메서드를 사용해서 html을 만들 수 있다.
*/ 

// 태그를 만들었으면 body에 추가를 해줘야한다.
var body = document.body;

var word = document.createElement('div');
word.textContent = 'hello';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
form.append(input);
input.focus();

var button = document.createElement('button');
button.textContent = 'click';
form.append(button);

var result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', function callbackFunction(e){
    // form은 enter를 쳐서 submit을 하면 기본적으로 다른 페이지로 넘어가게된다.(새로고침 된다 : form의 기본 동작) 그래서 화면이 새로고침 되는 상황을 막고자 아래의 코드를 넣는 것.
    e.preventDefault();

    if(word.textContent[word.textContent.length -1] === input.value[0]) {
        result.textContent = 'good!';

        word.textContent = input.value;
        //input.value = null;
        input.value = '';
        input.focus();
    } else {
        result.textContent = 'oops...try onemore time!'
        input.value = '';
        input.focus();
    }
});

// tip : 처음과 시작과 끝을 파악하며 코드를 디자인하라.
//alert('Welcome Game!');
//var word = 'hello';

// while (true) {
//     var anser = prompt(word);

//     // 当たる場合
//     if (word[word.length - 1] === anser[0]) {
//         word = anser;

//         // 間違えた場合
//     } else {
//         alert('please reenter sentence!');
//     }
// }
