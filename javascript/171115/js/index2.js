var name = 'John';
var birth = 2000;
function getAge(birthArg){
    var num = 2017 - birthArg
    return num;
}

var person = {
    name : "John",
    birth : 2000,
    getAge : function(){
        var num = 2017 - this.birth;
        return num;
    }
}
console.log(person.getAge());
person.birth = 2010;
console.log(person.getAge());
person.name = 'Mike';
console.log(person.name);

/*
var person2 = new Object();
person2.name = 'Jane' ;
person2.birth = 2000;
*/

/*
객체 이름을 address;
- 나라 : nation - Korea
- 도시 : city - Seoul
- 건축년도 : birth - 1900s
- 건축기간 : 함수(현재 - 건축년도)
- 건축자 : "John", "Jane", "Mike"
*/

var address = {
    nation : "China",
    city : "Beijing",
    birth : 1900,
    day : function(){
        var num = 2017 - this.birth;
        return num;
    },
    maker : ['John', 'Jane', 'Mike'];
}
address.nation = "China";
address.city = "Beijing";
address.birth = 1900;
address.maker[0] = 'John2';
address.maker[1] = 'Jane2';

/*
var address2 = new Object();
address2.nation = "China";
address2.city = "Beijing";
address2.birth = 1920;
address2.day = function(){
    var num = 2017 - this.birth;
    return num;
};
address2.maker = ['John', 'Jane', 'Mike'];
console.log(address2.day());

*/

/*
setTimeout(function(){
    alert("2초후 표시됩니다."); }, 2000);
*/

/*
setTimeout(function(){
window.open("http://www.naver.com", "네이버", "width=500, height=500, resizable=yes");}, 2000);
*/

/*
var i=0;
setInterval(function(){
    console.log("["+i+"] 번째"); i+=1;
}, 2000);
*/

/*
var i=0;
setInterval(function(){
    var num = Math.random();
    console.log(Math.ceil((num*10)+1));
}, 1000);
*/

// Math.round() : 반올림
// Math.ceil() : 올림
// Math.floor() : 내림

/*
var date = new Date();
console.log(date.getYear()+1900);
console.log(date.getFullYear()+"년");
console.log(date.getMonth()+"월");
console.log(date.getDate()+"일");
console.log(date.getDay()+"요일");
console.log(date.getHours()+"시");
console.log(date.getMinutes()+"분");
console.log(date.getSeconds()+"초");
*/