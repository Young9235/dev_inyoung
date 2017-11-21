function check(){
    //alert('체크입니다.');
    var name = document.frm.name.value;
    // 위의 것과 같은 변수 : var name = document.getElementByName('name').value;
    if(name == ""){
        alert("이름을 입력하세요");
        document.querySelector('#name_error').textContent = '아이디를 입력하세요';
        document.frm.name.focus();
        return false;   //리턴
    }
    else{
        document.querySelector('#name_error').textContent='';
    }

    var id = document.frm.id.value;
    if(id == ""){
        alert("아이디를 입력하세요");
        document.frm.id.focus();
        return false;
    }


    var password = document.frm.password.value;
    var password2 = document.frm.password2.value;
    if(password == ""){
        alert("비밀번호를 입력하세요");
        document.frm.password.focus();
        return false;
    }
    if(password2 == ""){
        alert("비밀번호 확인을 입력하세요");
        document.frm.password2.focus();
        return false;
    }
    if(password != password2){
        console.log(password+'-'+password2);
        alert('비밀번호가 같지 않습니다');
        document.frm.password2.value = '';
        document.frm.password2.focus();
        return false;
    }


    //alert('입력된 데이터를 서버로 전송합니다.');
    //document.frm.action = 'server_send.py';
    //document.frm.submit();
    var chk = confirm('입력된 데이터를 서버로 전송합니다.')
    if(chk){
        document.frm.submit();
    }else{
        return false;
    }
};
