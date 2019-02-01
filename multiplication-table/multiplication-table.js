// tip : 소괄호 안의 것부터 먼저 생각한다. 
var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;
// var flag = true;

var body = document.body;

var word = document.createElement('div');
word.textContent = String(num1) + ' * ' + String(num2) + '= ?';
body.append(word);

var form = document.createElement('form');
body.append(form);

var input = document.createElement('input');
form.append(input);
input.focus();

var button = document.createElement('button');
button.textContent = 'Click';
form.append(button);

var resultDiv = document.createElement('div');
body.append(resultDiv);

form.addEventListener('submit', function callback(e) {
    e.preventDefault();

    console.log(typeof (result), typeof (input.value));

    // <알아낼 것>
    // 1. Number로 바꿔줘야하는 정확한 이유 알아내자. 
    // 일단 여기서는 Number로 형변환해주지 않으면 result : Number와 input.value : String의 ===비교가 되어서 틀렸다고 뜬다. 
    // 2. ==과 ===의 차이. ===의 경우는 Type까지 비교하는 것?
    if (result === Number(input.value)) {
        resultDiv.textContent = 'good!';

        // 기존에 기억하고 있던 것을 수정
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        result = num1 * num2;

        word.textContent = String(num1) + ' * ' + String(num2) + '= ?';

        input.value = '';
        input.focus();
    } else {
        resultDiv.textContent = 'oops...try onemore time!';

        input.value = '';
        input.focus();
    }
});

    // while (flag) {
    //     var anser = prompt(String(num1) + ' * ' + String(num2) + '= ?');

    //     if (result === Number(anser)) {
    //         alert('OK!');

    //         flag = false;
    //     } else {
    //         alert('Fail...');
    //     }
    // }


