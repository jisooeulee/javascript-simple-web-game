var tbody = document.querySelector('#table tbody');
var dataset = []; // 지뢰 테이블 만들기
document.querySelector('#exec').addEventListener('click', function () {
    tbody.innerHTML = ''; // tbody의 내부태그들을 다 지워버린다.
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

    // var tbody = document.querySelector('#table tbody');
    // 세로인 tr을 먼저 만들어야 그 안에 가로인 td를 만든다. 입력받은 hor, ver 값에 따라 동적으로 tr, td 생성.
    for (var i = 0; i < ver; i++) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j++) {
            // 입력한 세로(tr)와 가로(td)에 정해진 갯수만큼 1을 넣는다.
            arr.push(1);
            var td = document.createElement('td'); // td를 만들어 내는 순간에 contextmenu이벤트를 설정 (contextmenu : 마우스 오른쪽 클릭 이벤트)
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                // 칸과 줄 수를 알아낸다. (blank : 칸, line : 줄)
                var blank = Array.prototype.indexOf.call(parentTr.children, e.currentTarget); // indexof를 쓰고싶은데 못쓰는 대상들에게 강제로 적용하는 방법(배열이 아닌 것들)
                var line = Array.prototype.indexOf.call(parentTbody.children, parentTr);
                console.log(parentTr, parentTbody, e.currentTarget, blank, line);

                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'X') {
                    e.currentTarget.textContent = '!'; // target : 실제 이벤트가 발생한 대상. currentTarget : 이벤트가 걸린 대상. (이벤트를 단 대상)
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?';
                } else if (e.currentTarget.textContent === '?') {
                    e.currentTarget.textContent = '';
                    if (dataset[line][blank] === 1) { // 기본칸이면.
                        e.currentTarget.textContent = '';
                    } else if (dataset[line][blank] === 'X') {
                        e.currentTarget.textContent = 'X';
                    }

                }
            });
            td.addEventListener('click', function(e) {
                // 클릭 했을 때 주변 지뢰 개수
                var parentTr = e.currentTarget.parentNode;
                var parentTbody = e.currentTarget.parentNode.parentNode;
                // 칸과 줄 수를 알아낸다. (blank : 칸, line : 줄)
                var blank = Array.prototype.indexOf.call(parentTr.children, e.currentTarget); // indexof를 쓰고싶은데 못쓰는 대상들에게 강제로 적용하는 방법(배열이 아닌 것들)
                var line = Array.prototype.indexOf.call(parentTbody.children, parentTr);
                if (dataset[line][blank] === 'X') {

                    e.currentTarget.textContent = '💣';
                } else { // 지뢰가 아닌 경우
                    var periphery = [ // 주변
                        dataset[line][blank-1],dataset[line][blank+1]
                    ];
                    if (dataset[line-1]) {
                        periphery = periphery.concat(dataset[line-1][blank-1], dataset[line-1][blank], dataset[line-1][blank+1]); // concat() : 주변을 안바꾸고, 배열과 배열을 합쳐서 '새로운'배열을 만든다.
                    }
                    if (dataset[line + 1]) {
                        periphery = periphery.concat(dataset[line+1][blank-1], dataset[line+1][blank], dataset[line+1][blank+1]);
                    }

                    e.currentTarget.textContent = periphery.filter(function(v) {
                       return v === 'X';
                    }).length;
                }
            });
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
});


