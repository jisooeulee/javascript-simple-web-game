/* 
This source code has an infinite loading problem in the browser.
because the event for cancel button has not worked well.
I recommend that you don't click a cancel button:)
*/
while (true) {
    // tip : 소괄호 안의 것부터 먼저 생각한다. 
    var num1 = Math.ceil(Math.random() * 9);
    var num2 = Math.ceil(Math.random() * 9);
    var result = num1 * num2;
    var flag = true;

    while (flag) {
        var anser = prompt(String(num1) + ' * ' + String(num2) + '= ?');

        if (result === Number(anser)) {
            alert('OK!');

            flag = false;
        } else {
            alert('Fail...');
        }
    }
}


