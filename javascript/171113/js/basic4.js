/*function calcuateAge(birth){
    var age = 2017 - birth;
    console.log(age);
    return age;
}
//calcuateAge(1990) ;
var ageJohn = calcuateAge(1990) ;
var ageMike = calcuateAge(2000) ;
var ageMary = calcuateAge(2010) ;

//console.log("ageJohn"+ageJohn);
//console.log("ageMike"+ageMike);
//console.log("ageMary"+ageMary);
*/

/*function calcuateAge(year, birth){
    var age = year - birth ;
    console.log(age);

    if(age === 27){
        return "20대";
    }
    else if(age === 10){
        return "10대";
    }
    else if(age === 7){
        return "아동";
    }
    return age;
}
var current = 2017;
var want = 2011;
var ageJohn = calcuateAge(current ,want) ;
console.log(ageJohn);


//calcuateAge(1990) ;
var ageJohn = calcuateAge(1990) ;
var ageMike = calcuateAge(2000) ;
var ageMary = calcuateAge(2010) ;
*/
/*
var scope = "global scope";
function checkscope() {
        var scope="local scope"
        console.log(scope);
        //var scope = "local scope";        //함수안에 지역변수를 설정하려면 꼭 앞에 var을 붙여야한다.
}
checkscope();
console.log(scope);
*/

var scope = "global scope";
function checkscope(scope) {
        var scope = scope;
        scope = "local scope";
        console.log(scope);
               //함수안에 지역변수를 설정하려면 꼭 앞에 var을 붙여야한다.
}
checkscope(scope);
console.log(scope);

