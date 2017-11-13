/*원래 자바스크립트의 명칭 : ecms스크립트*/

var name = 'john';   //var=변수, 이꼬르(=)값을 할당한다.
var name2 = 'jain'
var age = 26;
var age2 = 24;

console. log(typeof(name));
console. log(typeof(age));

console. log(name+age);

var unified = age+age2;
    console. log(unified);
    console. log(typeof(unified));

var abc = age2+name2;
    console.log(abc);
    console.log(typeof(abc));

var undified2 = name + (age+age2);     //연산자 우선순위
    console. log(undified2);
    //console. log(typeof(undified2));

var jop, isMaried;
    jop = 'driver';
    isMaried = 'false';

var str = name + ' is a ' + age + ', jop' + jop + ' is he married?' + isMaried;
    console. log(str);

var a, b, c;
    a = "I'm";
    b = 'a';
    c = 'student';

var str2 = a +' '+ b +' ' + c;
    console.log(str2);

var c;
    c = "I'm a student";

var str3 = c;
    console.log(str3);

var d, e;
    d = '"';
    e = "I'm a student";

var str4 = d + e + d ;
    console .log(str4);

var str5 = '"' + e +'"';
    console. log(str5);

var html_str = ' \"I\'m a student\" ';
    document.write(html_str);

var str = "<html><head></head><body>" + "<h1>hello world</h1>" + "</body></html>";

document.write("<html>");
document.write("<head>");
document.write("</head>");
document.write("<body>");
document.write("<h1>Hello world</h1>");
document.write("</body>");
document.write("</html>");                  //document.write : 있는 그대로를 보여주는 것

var str6 = "&quot;I&#39;m a student&quot;"
    document.write(str6);

var lastName = prompt("What is the last name?");    //prompt : 창을 띄우는 것
     console.log(lastName);
     document.write('<h1>' + '라스트네임 : '+lastName + '</h1>');   // 화면에 출력하기
     alert(lastName);