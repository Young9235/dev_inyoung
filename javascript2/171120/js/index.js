
function button1(){
    alert('버튼1을 눌렀습니다.');
};

function button2(){
    alert('버튼2에 마우스가 올라갔습니다.');
};

function txt(){
    var focus = alert('3글자 이상 입력하세요.');
};

function button3(){
    //alert("다음으로 가시겠습니까?");
    var check = confirm('네이버로 이동합니까?')   //confirm은 확인, 취소 누르는 창을 띄우는 것
    console.log("check="+check);
    if(check === true){
        window.open('https://www.naver.com');
    }else{
    };
};

function alink(sitename){
    var site;
    if(sitename === 'daum'){
        site = '다음';
    }else if(sitename === 'naver'){
        site = '네이버';
    };
    var check2 = confirm(site + '으로 이동합니까?')
    if(sitename === 'daum' && check2){
        window.open('https://www.daum.net');
    }else if(sitename === 'naver' && check2){
        window.open('https://www.naver.com');
    };
};