var dice = Math.floor(Math.random()*6)+1;       //Math는 0부터 0.9999...까지 간다. 곱하기 6을 하여 0부터 5.4...까지 만들어주고 +1을 해주어 1부터 6까지 가게 한다.
                                                // floor은 소수점 무조건 내림
document.querySelector('#score-0').textContent = dice;     //단순한 코드 넣는 것 -> textContent
document.querySelector('#current-0').textContent = dice;
document.querySelector('#current-0').innerHTML = '<em>'+dice+'</em>'  //html코드를 넣을 때 -> innerHTML
//document.querySelector('.dice').style.display='none';
document.querySelector('.dice').src = '../img/dice-1.png';