var body = document.body;

var table = document.createElement('table');

// 반복문에 따라서 3줄이 추가된다.
for (var i = 1 ; i <= 3 ; i++) {
    var row = document.createElement('tr');    
    table.appendChild(row);

    // 열에 3개의 행을 추가한다.
    for (var j = 1 ; j <= 3 ; j++) {
        var cell = document.createElement('td');
        row.appendChild(cell);
    }

    // 3개의 행이 추가된 열을 body에 추가한다.
    table.appendChild(row);
    // body에 table을 추가한다.
    body.appendChild(table);

}