var body = document.body;
var table = document.createElement('table');
var rows = [];
var cells = [];
var turn = 'X';

// click event를 핸들링한다.
var asyncCallback = function (e) {
    // e.target : 클릭이벤트가 일어난 태그를 알려준다.
    // e.target.parentNode : 클릭된 태그의 부모 태그.
    console.log(e.target); // 칸
    console.log(e.target.parentNode); // 줄
    console.log(e.target.parentNode.parentNode); // 테이블

    var rowLocation = rows.indexOf(e.target.parentNode);
    console.log('몇줄', rowLocation);

    var cellLocation = cells[rowLocation].indexOf(e.target);
    console.log('몇칸', cellLocation);

    // 칸이 이미 채워져 있는가?
    if (cells[rowLocation][cellLocation].textContent !== '') { // input의 값이 value | 태그 안 글자는 textContent
        console.log('빈칸이 아닙니다');

    } else {
        console.log('빈칸 입니다');

        cells[rowLocation][cellLocation].textContent = turn;
        if (turn === 'X') {
            turn = 'O';

        } else {
            turn = 'X';
        }
    }
};

// 반복문에 따라서 3줄이 추가된다.
for (var i = 1; i <= 3; i++) {
    var row = document.createElement('tr');
    rows.push(row);
    cells.push([]);

    // 열에 3개의 행을 추가한다.
    for (var j = 1; j <= 3; j++) {
        var cell = document.createElement('td');
        cell.addEventListener('click', asyncCallback);
        cells[i - 1].push(cell);
        row.appendChild(cell);
    }

    // 3개의 행이 추가된 열을 body에 추가한다.
    table.appendChild(row);
}
// body에 table을 추가한다.
body.appendChild(table);