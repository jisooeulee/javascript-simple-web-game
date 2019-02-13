// 1. 후보가 될 숫자의 갯수(범위) 지정 : 빈 배열을 만든다. (자바스크립트는 배열에 리스트의 기능이 포함되어 있다) cf) 파이썬은 배열이라는 이름으로 따로 제공하지 않는다. 리스트가 배열이다.
var candidate = Array(45).fill().map(function (value, index) {
    return index + 1;

    // undefined라는 value(요소)와(fill[index] = index + 1;을 하기 전!) 1~45의 index(인덱스)값이(+1 했기때문) console에 출력된다.
    //console.log(value, index + 1);
});
// console.log(map);

// 2. 랜덤하게 섞는다. 섞어서 shuffle배열에 넣는다.
var shuffle = [];
// while : 기준값이 계속 변할 때(candidate.length의 경우, splice함수를 이용해서 후보군에서 숫자를 하나씩 뽑아서 shuffle에 넣으면 숫자가 하나씩 줄어든다. splice가 해당 배열에서 뽑고나면 삭제시키기 때문.)와 몇번을 반복해야될지 모를 때 쓴다.
// 참고로 여기서는 한번 뽑힌 숫자는 splice함수에 의해서 candidate배열에서 빠져나가므로 중복 검사는 따로 하지 않아도 된다.
while (candidate.length > 0) {
    // splice : 0 ~ 44의 랜덤한 자릿수에서 1개를 뽑는다(삭제한다. deleteCount) 는 의미.
    var randomNums = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(randomNums);
}
// console.log(shuffle);

// 3. 보너스 숫자(7번째 숫자)를 배열의 마지막에서 뽑고, 나머지 숫자들 중에서 6개의 숫자를 뽑는다.
var bonus = shuffle[shuffle.length - 1];

// 4. 6개의 숫자를 잘라낸다. shuffle[0]~[5]의 6개의 숫자를 뽑는다. 이미 bonus의 숫자는 뽑혔기 때문에 중복되서 뽑히지 않을 듯!
// sort(function(p, c) {return p - c; })의 원리 : 오름차순으로 정렬. (p와 c에 들어온 숫자를 뺀 결과가 0보다 크면 배열 내에서 순서를 바꾼다)
var winningNumbers = shuffle.slice(0, 6).sort(function(p, c) {return p - c; });
console.log('winning numbers', winningNumbers, 'bonus', bonus);