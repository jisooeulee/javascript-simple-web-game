// 처음과 시작과 끝을 파악하며 코드를 디자인하라.
alert('Welcome Game!');
var word = 'hello';

while (true) {
    var anser = prompt(word);

    // 当たる場合
    if (word[word.length - 1] === anser[0]) {
        word = anser;

        // 間違えた場合
    } else {
        alert('please reenter sentence!');
    }
}
