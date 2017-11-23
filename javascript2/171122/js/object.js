/*var John = {
    name : 'John',
    birthYear : 1990,
    job : 'student'
}

var Jane = {
    name : 'Jane',
    birthYear : 2000,
    job : 'teacher'
}

var Person = function(name, birthYear, job){
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

var Mark = new Person("Mark", 2010, "doctor");

var arr = [];
arr.push(John);
arr.push(Jane);
arr.push(Mark);




var text = '';

text += "<table border>";
text += "<tr>";
text +="    <td>#</td><td>이름</td><td>생년</td><td>직업</td>";
text += "</tr>";
    for(var i=0; i<arr.length; i++){
        text +="<tr>";
        text +="<td>"+(i+1)+"</td>";
        text +="<td>"+arr[i].name+"</td>";
        text +="<td>"+arr[i].birthYear+"</td>";
        text +="<td>"+arr[i].job+"</td>";
        text +="</tr>";
        //console.log(arr[i].name);
}
text += "</table>";

document.write(text);
*/



/*
var Register = function(name, job, local, address, date, time){
    this.name = name;
    this.job = job;
    this.local = local;
    this.address = address;
    this.date = date;
    this.time = time;
}

var park = new Register("park", "doctor", "서울", "101", now);
var marry = new Register("marry", "designer", "부산", "102", "2017.11.22", "11-22");
var peter = new Register("peter", "teacher", "대구", "103", "2017.11.22", "11-22");
var jane = new Register("jane", "student", "광주", "104", "2017.11.22", "11-22");
var bill = new Register("bill", "program", "경기", "105", "2017.11.22", "11-22");

var registerArr =[];
registerArr.push(new Register('park','doctor','서울','101', '2017.11.22', '11-22'))
registerArr.push(new Register("marry", "designer", "부산", "102", "2017.11.22", "11-22"))
registerArr.push(new Register("peter", "teacher", "대구", "103", "2017.11.22", "11-22"))
registerArr.push(new Register("jane", "student", "광주", "104", "2017.11.22", "11-22"))
registerArr.push(new Register("bill", "program", "경기", "105", "2017.11.22", "11-22"))

var text = '';
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();   //오늘날짜
var our = now.getHours();   //오늘 시간
var minute = now.getMinutes();
console.log(now);

text += "<table border>";
text += "<tr>";
text +="    <td>#</td><td>이름</td><td>직업</td><td>지역</td>";
text +="    <td>우편번호</td><td>가입연도</td><td>가입시간</td>";
text += "</tr>";
    for(var i=0; i<registerArr.length; i++){
        text +="<tr>";
        text +="<td>"+(registerArr.length-i)+"</td>";
        text +="<td>"+registerArr[i].name+"</td>";
        text +="<td>"+registerArr[i].job+"</td>";
        text +="<td>"+registerArr[i].local+"</td>";
        text +="<td>"+registerArr[i].address+"</td>";
        text +="<td>"+year+'-'+(month+1)+'-'+date+"</td>";
        text +="<td>"+our+':'+minute+"</td>";
        text +="</tr>";
        //console.log(arr[i].name);
}
text += "</table>";

document.write(text);
*/

function display(birth){
    //var now = new Date;
    var age = now.getFullYear() - birth;
    alert(age+'세 입니다.');
    }

var Register = function(name, birth, job, local, address, date, time){
    this.name = name;
    this.birth = birth;
    this.job = job;
    this.local = local;
    this.address = address;
    this.date = date;
}

var park = new Register("park", 2000, "doctor", "서울", "101");
var marry = new Register("marry", 1990, "designer", "부산", "102");
var peter = new Register("peter", 2010, "teacher", "대구", "103");
var jane = new Register("jane", 1995, "student", "광주", "104");
var bill = new Register("bill", 1980, "program", "경기", "105");

var registerArr =[];

var now1 = new Date();
registerArr.push(new Register('park', 2000, 'doctor', '서울', '101', now1));

var now2 = new Date();
registerArr.push(new Register("marry", 1990, "designer", "부산", "102", now2));

var now3 = new Date();
registerArr.push(new Register("peter", 2010, "teacher", "대구", "103", now3));

var now4 = new Date();
registerArr.push(new Register("jane", 1995, "student", "광주", "104", now4));

var now5 = new Date();
registerArr.push(new Register("bill", 1980, "program", "경기", "105", now5));


var jobs = ["doctor","designer", "teacher", "student", "program"];
var text = '';
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();   //오늘날짜
var our = now.getHours();   //오늘 시간
var minute = now.getMinutes();
console.log(now);


text += "<center>"
text += "<h1>게시판</h1>"
text += "<table border width='700' style='text-align:center;'>";
text += "<tr>";
text +="    <td>#</td><td>이름</td><td>생년</td><td>직업</td><td>지역</td>";
text +="    <td>우편번호</td><td>가입연도</td><td>가입시간</td>";
text += "</tr>";
    for(var i=0; i<registerArr.length; i++){
        text +="<tr>";
        text +="<td>"+(registerArr.length-i)+"</td>";
        text +="<td>"+registerArr[i].name+"</td>";
        text +="<td>"+"<button onclick=\'display("+registerArr[i].birth+");\'>"+registerArr[i].birth+"</button>"+"</td>";
        text +="<td>"
        text +='<select name="jobs">'
                 for(j=0; j<jobs.length; j++){
                    if(registerArr[i].job == jobs[j]){
        text +=         "<option selected>"+jobs[j]+"</option>"
                    }else{
        text +=         "<option>"+jobs[j]+"</option>"
                    }
                 }
        text +="</select>"
        //+registerArr[i].job+
        text +="</td>";
        text +="<td>"+registerArr[i].local+"</td>";
        text +="<td><input type=\'text\' value=\'"+registerArr[i].address+"\'>"+"</td>";
        var day = registerArr[i].date;
        text +="<td>"+day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()+"</td>";
        text +="<td>"+day.getHours()+':'+(day.getMinutes()+1)+':'+day.getSeconds()+"</td>";
        text +="</tr>";
        //console.log(arr[i].name);
}
text += "</table>";
text += "</center>"
document.write(text);