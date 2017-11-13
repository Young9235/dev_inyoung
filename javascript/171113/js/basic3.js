var name = 'John';
var age = '26';
var isMarried = 'yes';
var isMarried2 = 'yes';          //이 2개는 같은 주소를 나타내는 것-주소값이 같은 것-주소값을 비교한다.

if(isMarried == isMarried){                        // '==' : 값만 비교하는 것, 결과값만 같으면 됨
    console.log("John is married");
}

if(isMarried === isMarried2){                       // '===' : 해당되는 객체인가? 주소값을 비교하여 결과값 도출
    console.log("Jain is married");
}

if(isMarried === 'no'){
    console.log("John is married");
} else{
    console.log("I don't know");
}


if(isMarried === 'yes'){
    console.log("John is married");
}
else if(isMarried === 'no'){
    console.log("Jain is married");
}
else{
    console.log("I don't know");
}


if(isMarried == 'yes'){
    console.log("John is married");
}
else if(isMarried == 'no'){
    console.log("Jain is married");
}
else if(isMarried == 'no1'){
    console.log("Tom is married");
}
else{
    console.log("I don't know");
}


/*if(23 == 23){
    console.log("23 == 숫자");
}
if(23 == "23"){
    console.log("23 ==");
}
if(23 === "23"){
    console.log("23 === 3개");


var job = 'driver';
job = prompt('What does John do?');

switch(job){
    case 'driver' :
        console.log('job is driver'); break;
    case 'teacher' :
        console.log('job is teacher'); break;
    case 'coach' :
        console.log('job is coach'); break;
    default :
        console.log("I don't know");
}*/

