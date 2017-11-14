/*var ageJohn = calculateAge(1990)
    function calculateAge(birth){
        var age = 2017 - birth;
        return age;
    }
    console.log(ageJohn);
*/

//yearsRetirement('John', 1990);
/*
    var ageJohn = yearsRetirement('John', 1980);
    function yearsRetirement(now){
        var age = 2017-now;
        return age;
    }
    var ageJohn = yearsRetirement(1980);
    console.log(ageJohn);
    document.write(ageJohn + "세");


    function yearsRetirement(leave){
        if(ageJohn === 37){
            return "은퇴";
        }
        return ageJohn
    }*/

//정답
/*
function yearsRetirement(name, birth){
    var age = 2017 - birth;
        return age;
}
var age = yearsRetirement('John', 1980);
console.log(age);
document.write(age+"세");


function yearsRetirement2(name, birth){
    var age = 2017 - birth;

    var retirementYear = 2017;

    var between = 65 - age;
    if(between >= 0){
        document.write(name + "은 은퇴가" + between + "년 남았습니다.")
    } else{
        document.write(name + "은 은퇴하였습니다.")
    }
}
var age = yearsRetirement2('John', 1980);
*/

/*
//남은 은퇴의 기준년도와 은퇴년도 계산
function checkRetirement(name, birth, year){

    var age = year - birth;
    //console.log("age:"+age);
    var between = 65 - age;
    if(between >= 0){
        document.write(name + "은 은퇴가" + between + "년 남았습니다.");
    } else{
        document.write(name + "은 은퇴하였습니다.");
    }
    document.write("<br>" + "은퇴의 기준년도는" + year + "년 입니다.");
}

//이름, 생년, 현재년도, 은퇴날짜
function yearsRetirement(name, birth, year){

    checkRetirement(name, birth, year)
    console.log(year)
}
var remainYear = yearsRetirement('John', 1980, 2020);
*/

//은퇴자 이름, 남은나이, 은퇴연도, 남은연도
/*function checkRetirement(name, birth, year, period){
    var age = year - birth;
    console.log(age);
    return age;
    document.write("현재나이는 " + age + "세 입니다.")
    }


    //console.log("age:"+age);
    var between = 65 - age;
    if(between >= 0){
        document.write(name + "은 은퇴가" + between + "년 남았습니다.");
    } else{
        document.write(name + "은 은퇴하였습니다.");
    }
}*/

//이름, 생년, 현재년도, 최대일하는 기간
/*function yearsRetirement(name, birth, year, period){
    //checkRetirement(name, birth, year, period)
    var age = year - birth;
    return age;
}
function checkRetirement(name, birth, year, period){
    var ramain = currentYear - age;
    return remain;
}
var currentYear = 2017
var age = yearsRetirement('John', 2007, currentYear, 20);
var remain = checkRetirement('John', 2007, currentYear, 20);   //이름, 생년연도, 현재년도, 최대일하는 기간
document.write("<h3>" + "현재는 " + currentYear + "년 입니다."+"</h3>");
document.write("현재나이는" + age + "세 입니다." +"<br>")
*/

function checkRetirement(age, workperiod){
    var remain = workperiod - age;
    return remain;
}

function yearsRetirement(birth, year, period){
    var age = year - birth;
    var remain = checkRetirement(age, period);
    return remain;
}

function displayRetire(remain){
    if(remain == 0){
        document.write("올해가 은퇴합니다.");
    } else if(remain >0){
        document.write("은퇴가 "+remain+"년 남았습니다.");
    } else {
        document.write("이미 은퇴했습니다")
    }
}

var currentYear = 2013
var remain = yearsRetirement(2007, currentYear, 20);
document.write("현재는" + currentYear +"년 입니다" +"<br>");
displayRetire(remain);


/*
var name = "John";

function third(){
    var c = "Hey";
    console.log("third Hey")
}
function second(){
    var b = "Hi";
    third();
    console.log("second Hi")
}
function first(){
    var a = "Hello";
    second();
    console.log("first Hello")
}
first();                                                //stack구조 (*스택의 반대구조는 queue구조)
*/

/*
function sum(one, two){
    var test2 = one + two;
    return test2;                   // return : 결과를 산출해내는 것

}
var test1 = sum(2, 5);
document.write("test1=" + test1);
*/

/*
function sum(one, two){
    var test2 = one + two;
    return test2;
}
function minus(one, two){
    var test3 = one - two;
    return test3;
}
function mul(one, two){
    var test4 = one * two;
    return test4
}

/*
function calculate(one, two, three){
    var sum2;
    if(three == "+"){
        sum2 = sum(one, two)
    }else if(three == "-"){
        sum2 = minus(one, two)
    }else if(three == "*"){
        sum2 = mul(one, two)
    }
    return sum2;
}
var one = 2; var two = 5;
var operator = "-";
//document.write("("+one+"+"+two+")="+sum(2, 5) + "<br>");
//document.write("("+one+"-"+two+")="+minus(2, 5) + "<br>");
//document.write("("+one+"*"+two+")="+mul(2, 5) + "<br>");
document.write("("+one+operator+two+")="+calculate(one, two, operator));
*/
/*
function calculate(one, two, three){
    if(three == "+"){
        return sum(one, two)
    }else if(three == "-"){
        return minus(one, two)
    }else if(three == "*"){
        return mul(one, two)
    }
}
var one = 2; var two = 5;
var operator = "*";
//document.write("("+one+"+"+two+")="+sum(2, 5) + "<br>");
//document.write("("+one+"-"+two+")="+minus(2, 5) + "<br>");
//document.write("("+one+"*"+two+")="+mul(2, 5) + "<br>");
document.write("("+one+operator+two+")="+calculate(one, two, operator));
*/