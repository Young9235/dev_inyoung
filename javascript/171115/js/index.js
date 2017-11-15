/*
var name = 'John';      //문자열 스트링
var name2 = 'Jane';
var number = 20;         //숫자는 넘버
var check = true;
var check2 = false;

function(displayCon){
    console.log("안녕하세요");
};

var displayCon2 = function(){
    console.log("안녕하세요..2..");
};
// 변수는 값을 넣는게 아닌 주소값을 넣는것이기 때문에
// 어떤 액션을 취하라는 변수값을 넣은 것이다.
// 값을 지정하는 것, 주소를 지정하는 것

var arr = ['John', 'Jane', 'mark', 'Tom'];
var arr2 = new Array('John2', 'Jane2', 'mark2', 'Tom2');
var arr3 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var arr4 = ['John', 11, true, arr2, displayCon2];
// 배열에도 함수를 넣을 수 있다.

document.write(arr);

var tag = "<h1>안녕하세요</h1>"
document.write(tag);
*/
/*
var number2 = 10;       console.log(number2);    // 10
number2 = number2+1;    console.log(number2);    // 11
number2++;  console.log(number2);               //12
number2 += 1; console.log(number2);            //13

for(i=0; i<10; i+=2){
    console.log(i)
};
*/

var number = 1;
if(number){
    console.log("true");
}else{
    console.log("false");
}
// --> **값이 들어갔는지 안들어갔는지 체크할 때 이런식으로 체크한다.


/*
for(i=1; i<10; i+=1){
    if(i%2 == 0){
        console.log(i);
    }else{
        console.log("----"+i+"-----");
    }
};
*/

/*
for(i=0; i<10; i+=1){
    if(i == 1){
        console.log("안녕하세요.");
    }
    else if(i == 5){
        continue;  // 이전 결과값이 출력되지 않고 이후 결과값만 출력된다.
        console.log("절반입니다.");
    }
    else if(i == 8){
        console.log("거의 끝나갑니다.");
    }
    else{
        console.log(i);
    }
}
*/

/*
for(i=0; i<=10; i+=1){
    if(i<=7){
        continue;
        console.log("안녕하세요.");
    }
    else if(i == 8){
        console.log("거의 끝나갑니다.");
    }
    else{
        console.log(i);
    }
}
*/

/*
for(i=0; i<=10; i+=1){
    if(i>3 && i<=7){
        console.log("안녕하세요.");
    }
    else if(i == 8){
        console.log("거의 끝나갑니다.")
    }
    else{
        console.log(i);
    }
}
*/
/*
var i=0;

while(true){
    if(i<=10){
        console.log(i+"안녕하세요");
        i+=1;
    }else{
        break;
    }
}


while(i < 10){
    console.log(i);
    i+=1;
}
*/
/*
console.log(col[3]);
console.log(col.length);


for(i=0; i < col7.length; i++){
    console.log(col7[i]);
}


var col10 = [] ;   //100~120;
for(i=100; i<=120; i++){
    col10.push(i);
}console.log(col10);
*/
/*
var col  = [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10];
var col1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var col2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
var col3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
var col4 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
var col5 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
var col6 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
var col7 = [71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
var col8 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var col9 = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var row = [col, col1, col2, col3, col4, col5, col6, col7, col8, col9];
*/
//console.log(row[0] [0]);
//console.log(row[1] [0]);

/*
for(var i=0; i<row.length; i++){
    for(var r=0; r<row[i].length; r++){
        console.log(row[i] [r]);
        //console.log(row[i]);
    }
}
*/

var arr = [];

for(i=0; i<10; i++){
    arr[i] = [];
    for(j=0; j<10; j++){
        var num = i*10 + j+1;
        arr[i][j] = num;
        //console.log(num);
    }
}

for(i=0; i<arr.length; i++){
    console.log(arr[i]);
    for(j=0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

