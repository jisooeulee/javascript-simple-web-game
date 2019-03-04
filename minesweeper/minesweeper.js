var tbody = document.querySelector('#table tbody');
document.querySelector('#exec').addEventListener('click', function () {
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    console.log(hor, ver, mine);
    // 1. 후보가 될 숫자의 갯수(범위) 지정 : 빈 배열을 만든다. (자바스크립트는 배열에 리스트의 기능이 포함되어 있다) cf) 파이썬은 배열이라는 이름으로 따로 제공하지 않는다. 리스트가 배열이다.
    // 지뢰 위치 뽑기
    var candidate = Array(hor * ver).fill().map(function (value, index) {
        return index;
    });

    // 2. 랜덤하게 섞는다. 섞어서 shuffle배열에 넣는다.
    var shuffle = [];
    // while : 기준값이 계속 변할 때(candidate.length의 경우, splice함수를 이용해서 후보군에서 숫자를 하나씩 뽑아서 shuffle에 넣으면 숫자가 하나씩 줄어든다. splice가 해당 배열에서 뽑고나면 삭제시키기 때문.)와 몇번을 반복해야될지 모를 때 쓴다.
    // 참고로 여기서는 한번 뽑힌 숫자는 splice함수에 의해서 candidate배열에서 빠져나가므로 중복 검사는 따로 하지 않아도 된다.
    while (candidate.length > 80) {
        // splice : 0 ~ 44의 랜덤한 자릿수에서 1개를 뽑는다(삭제한다. deleteCount) 는 의미.
        var randomNums = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(randomNums);
    }

    // 지뢰 테이블 만들기
    var dataset = [];
    // var tbody = document.querySelector('#table tbody');
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
        }
        tbody.appendChild(tr);
    }
    // 지뢰 심기
    for (var k = 0; k < shuffle.length; k++) {
        var vertical = Math.floor(shuffle[k] / 10); // tr
        var horizontal = shuffle[k] % 10; // td
        tbody.children[vertical].children[horizontal].textContent = 'X'; // 화면
        dataset[vertical][horizontal] = 'X'; // 우리가 따로 관리하는 2차원 배열
    }
    console.log(dataset);
});

tbody.querySelector('td').addEventListener('contextmenu', function(){ // contextmenu : 마우스 오른쪽 클릭 이벤트

});
