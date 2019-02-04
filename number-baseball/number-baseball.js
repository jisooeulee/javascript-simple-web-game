var body = document.body;

// この部分はあとで関数化すること
var numCandidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numArray = [];

for(var i = 0 ; i < 4 ; i++) {
    // ※밑의 코드는 분해해서 변형해보고 이해할 것!!!
    // 0부터 8을 뽑는다. (몇개 중에서 뽑을지를 결정한다) / 배열의 첫번째 것을 선택하는 [0]를 붙여준다.
    var choose = numCandidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];

    // 아래와 같이 배열을 다루게 되면 numCandidate배열에 있던 값들이 numArray에 넣어지면서 numCandidate배열에서는 사라지게 된다!

    // pop() : 마지막부터 하나씩 뽑는다. (9,8,7,6)
    // var num = numCandidate.pop();

    // shift() : 앞에서부터 하나씩 뽑는다. (1,2,3,4)
    // var num = numCandidate.shift();

    // unshift() : 처음에 추가
    // var num = numCandidate.unshift();

    // push() : 마지막에 추가
    numArray.push(choose);
}

console.log(numArray);

var result = document.createElement('h1');
body.append(result);

var form = document.createElement('form');
document.body.append(form);

var input = document.createElement('input');
input.type = 'number';
input.maxLength = 4;
form.append(input);

var button = document.createElement('button');
button.textContent = 'input!';
form.append(button);

// 언제실행될지 모르게 떄문에 비동기.(위에서 아래로 절차적으로 실행되지 않는다.)
form.addEventListener('submit', function callback(e) {
    e.preventDefault();

    var answer = input.value;
    console.log(answer);

    if(answer === numArray.join('')) {
        result.textContent = 'home run!';
        input.value = '';
        input.focus();

        var numCandidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var numArray = [];

        for(var i = 0 ; i < 4 ; i++) {
            var choose = numCandidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            numArray.push(choose);
        }
    } else {
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;

        for (var i = 0 ; i < 3; i += 1) {
            if (answerArray[i] === numArray[i]) {
                strike++;
            }
        }
    }
}); 
