var body = document.body;
var table = document.createElement('table');
var result = document.createElement('div');
var rows = [];
var cells = [];
var turn = 'X';

// click event를 핸들링한다.
var asyncCallback = function (e) {
    // e.target : 클릭이벤트가 일어난 태그를 알려준다.
    // e.target.parentNode : 클릭된 태그의 부모 태그.
    //console.log(e.target); // 칸
    //console.log(e.target.parentNode); // 줄
    //console.log(e.target.parentNode.parentNode); // 테이블

    // 몇 줄, 몇 칸 인지를 먼저 파악한다.
    var rowLocation = rows.indexOf(e.target.parentNode);
    //console.log('몇줄 : ', rowLocation);

    var cellLocation = cells[rowLocation].indexOf(e.target);
    //console.log('몇칸 : ', cellLocation);

    // 칸이 이미 채워져 있는가?
    if (cells[rowLocation][cellLocation].textContent !== '') { // input의 값이 value | 태그 안 글자는 textContent
        console.log('빈칸이 아닙니다');

    } else {
        console.log('빈칸 입니다');
        cells[rowLocation][cellLocation].textContent = turn;
        result.textContent = '';

        // 세칸 다 채워졌나? : Algorithm을 알면 간단하지만 지금은 이런식으로 처리한다.
        var allTrue = false;

        // 가로줄 검사
        if (cells[rowLocation][0].textContent === turn
            && cells[rowLocation][1].textContent === turn
            && cells[rowLocation][2].textContent === turn) {

            allTrue = true;
        }
        // 세로줄 검사
        if (cells[0][cellLocation].textContent === turn
            && cells[1][cellLocation].textContent === turn &&
            cells[2][cellLocation].textContent === turn) {

            allTrue = true;
        }

        // 대각선 검사1 (※ 다른 더 좋은 조건은 없을지 생각해보자 !)
        if (rowLocation - cellLocation === 0) { // 대각선 검사가 필요한 경우
            if (cells[0][0].textContent === turn &&
                cells[1][1].textContent === turn &&
                cells[2][2].textContent === turn) {

                allTrue = true;
            }
        }

        // 대각선 검사2 (※ 다른 더 좋은 조건은 없을지 생각해보자 !)
        if (Math.abs(rowLocation + cellLocation === 2)) { // 대각선 검사가 필요한 경우
            if (cells[0][2].textContent === turn &&
                cells[1][1].textContent === turn &&
                cells[2][0].textContent === turn) {

                allTrue = true;
            }
        }

        // 무승부 (Draw)
        var cellCheck = cell.offsetParent.innerText.replace(/\s/g, ''); // 여러 공백을 단일 공백으르 대체(replace)
        var cellCheckNum = cellCheck.split('').length;
        if (cellCheckNum === 9) {
            //alert('Draw...');
            result.textContent = 'Draw...';

            // 초기화
            // forEach : 배열의 반복문
            cells.forEach(function (row) {
                row.forEach(function (cell) {
                    cell.textContent = '';

                    // cellLocation[row][cell].remove();
                });
            });
        }

        // 3개가 맞을 경우
        if (allTrue) {
            // alert('User' + turn + ' is winner !');
            result.textContent = 'User' + turn + ' is winner !';

            // 초기화
            turn = 'X';
            // forEach : 배열의 반복문
            cells.forEach(function (row) {
                row.forEach(function (cell) {
                    cell.textContent = '';

                    // cellLocation[row][cell].remove();
                });
            });

        } else {
            if (turn === 'X') {
                turn = 'O';

            } else {
                turn = 'X';
            }
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
body.appendChild(result);