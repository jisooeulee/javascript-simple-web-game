document.querySelector('#exec').addEventListener('click', function () {
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    console.log(hor, ver, mine);

    var dataset = [];
    var tbody = document.querySelector('#table tbody');
    // 세로인 tr을 먼저 만들어야 그 안에 가로인 td를 만든다. 입력받은 hor, ver 값에 따라 동적으로 tr, td 생성.
    for (var i = 0; i < ver; i++) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j++) {
            // 입력한 세로(tr)와 가로(td)에 정해진 갯수만큼 1을 넣는다.
            arr.push(1);
            var td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = 1;
        }
        tbody.appendChild(tr);
    }
    console.log(dataset);
});