//var dice = Math.floor(Math.random()*6)+1;      //Math는 0부터 0.9999...까지 간다. 곱하기 6을 하여 0부터 5.4...까지 만들어주고 +1을 해주어 1부터 6까지 가게 한다.
                                                // floor은 소수점 무조건 내림
//document.querySelector('#score-0').textContent = dice;     //단순한 코드 넣는 것 -> textContent
//document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-0').innerHTML = '<em>'+dice+'</em>'  //html코드를 넣을 때 -> innerHTML
//document.querySelector('.dice').style.display='none';
//document.querySelector('.dice').src = '../img/dice-1.png';

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
var roundScore = 0;
var activePlayer = 0;
var score = [0,0];
var gamePlaying;

function init(){
    roundScore = 0;
    activePlayer = 0;
    score = [0,0];
    gamePlaying = true;

    //주사위 보이지 않게
    document.querySelector('.dice').style.display = 'none';
    //시작할 때 숫자를 0으로 바꾸기
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    /**플레이어 위너부분 초기화*/
    //위너 부분 텍스트 변경
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    //winner 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //active 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //처음 player 1에게 active 클래스 추가
    document.querySelector('.player-0-panel').classList.add('active');

}
init();

var btn_roll = function(){
    //alert('roll 버튼 클릭');
    if(gamePlaying){

        //1. 랜덤한 숫자 나오게 하기
        var dice = Math.floor(Math.random()*6)+1;

        //console.log(dice);

        //2. 주사위 그림 보여주기
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = './img/dice-'+dice+'.png';

        //3. 스코어 표시하기
        document.querySelector('#score-'+activePlayer).textContent = dice;
        //document.getElementById('score-0').textContent = dice;

        //4. 주사위가 1이 나오면, 플레이어가 바뀐다.
        if(dice !== 1){
            //add score
        roundScore = roundScore + dice;
        //roundScore += dice;
        //document.querySelector('#score-0').textContent = roundScore;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }
        else{
            //next player
            nextPlayer();
        }
    }else{
    }
};
document.querySelector('.btn-roll').addEventListener('click', btn_roll);

function btn_hold(){
    //alert('hold 버튼을 눌렀습니다.');

    //1. current 값을 score에 더함.
    score[activePlayer] +=roundScore;
    //roundScore = scroe[activePlayer] + roundScore;

    //2. hold를 누르면 스코에에 더해짐 -> 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];

    var final_score = document.querySelector('.final-score').value;
    console.log('final_score='+final_score)

    var winningScore;
    if(final_score){
        winningScore = final_score;
    }else{
        winningScore = 50;
    }

    //3. 만점 -> 백점으로만 잡기, 백점 넘으면
    if(score[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display ='none';

        //이겼을 때 클래스 변경
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        gamePlaying = false;

    }else{
        nextPlayer();
    }

    //4. 다음 플레이어
    //nextPlayer();

};
document.querySelector('.btn-hold').addEventListener('click', btn_hold);

function nextPlayer(){
     if(activePlayer == 0){
            activePlayer = 1;
     }else{
            activePlayer = 0;
     }//activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;

    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    //플레이어 해당하는 패널 바꾸기
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //플레이어 바뀔 때 주사위 안보이기
    document.querySelector('.dice').style.display = 'none';
};

function btn_new(){
    //alert('새로운 게임을 누르셨습니다.');
    init();
};

document.querySelector('.btn-new').addEventListener('click', btn_new);

var btn_hold
