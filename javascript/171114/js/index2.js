function first(par){
    console.log('test');
}

//위의 코드와 같은 의미 최근 코드 모양 - 변수에다 함수자체를 넣는 형식
var first2 = function(par){
    console.log('test');
}

var names = ['John', 'Jain', 'Mark'];
var numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var testArr = [1, 'John', true, names];

//document.write(names);
//document.write("<br>" + testArr);
//console.log(testArr);
/*
console.log(names[2]);
names.push('Log');
console.log(names[3]);
names.push('Log2');
console.log(names[4]);
names.push('Log3');
names.push('Log4');

console.log(names[names.length-1]);         // 대괄호 = 몇번째 값을 쓰는 것
//console.log(names[-1]);
console.log(names.indexOf('Jain'));
console.log(names.indexOf('Log5'));      // -1을 도출 => 없는 값
*/
/*
console.log(names);
names.pop();                        // pop : 맨끝에 있는 것을 빼는 것(하나가 준다)
var popStr = names.pop();
names.pop(popStr);
names.push('Log');
names.push('Log2');
console.log(names.length);          // 배열안에 있는 원소가 몇개있느냐 체크할 때 ->longth
console.log(names[2]);
*/


//초기값 ; 비교해서 참/거짓 ; 액션
/*
console.log("length="+numbers.length);
for( var i=2 ; i < numbers.length-3 ; i++){
    console.log(numbers[i]);
}
*/

console.log("length="+numbers.length);
for( var i=0 ; i < numbers.length ; i++){
    if(i < 3 || i > 5){
        //console.log(numbers[i]);
           //break;             // break는 중간에 빠져나오는 것, 여기까지만 돌고 빠져나오는 것
        if(numbers[i] == 17){
            console.log(numbers[i]+"입니다.");
        }
        else{
            console.log(numbers[i]);
        }
    }
    else{
        console.log("------------"+numbers[i]+"--------------");
    }
}

