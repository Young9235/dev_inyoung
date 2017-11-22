function addFocusName(){
    var param = document.getElementById('name').value;
    if(param == ''){
        document.getElementById('name_error').textContent = '이름을 입력하세요';
    }
}

function addBlurName(){
    var param = document.getElementById('name').value;
    if(param !== ''){
        document.getElementById('name_error').textContent = "";
    }
}

function email_check( email ) {
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));
}
function check(){
    //alert('체크입니다.');
    var name = document.frm.name.value;
    // 위의 것과 같은 변수 : var name = document.getElementByName('name').value;
    var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    var regType1 = /^[A-Za-z0-9+]*$/;

    if(name == ""){
        //alert("이름을 입력하세요");
        //document.querySelector('#name_error').textContent = '이름을 입력하세요';
        document.getElementById('name').addEventListener('focus', addFocusName);  // focus : 들어가는 것
        document.getElementById('name').addEventListener('blur', addBlurName);  // blur : 빠져나오는 것
        document.frm.name.focus();
        return false;
    }/*else{
        document.getElementById('name_error').textContent='';
    }*/
    else if(!languageCheck.test(name)){
        alert('한글만 입력해야 됩니다.');
        document.frm.name.focus();
        return false;
    }

    var email = document.getElementById('email').value;
    if(!email_check(email)){
        alert('이메일 형식이 잘못 입력되었습니다.');
        document.frm.email.focus();
        return false;
    }

    var id = document.frm.id.value;
    if(id == ""){
        alert("아이디를 입력하세요");
        document.frm.id.focus();
        return false;
    }
    else if(!regType1.test(id)){
        alert('아이디는 영문과 숫자만 입력합니다.');
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

    //var job = document.frm.job.selectedIndex;
    var job = document.frm.job.value;           //html의 value 값을 지정해주어야 한다
    if(job == 0){
        alert('직업을 선택해주세요.');
        //document.frm.jop.focus();
        return false;
    }

    var gender = document.frm.gender.value;
    if(gender == ''){
        alert('성별을 선택해주세요.');
        //document.frm.gender.focus();
        return false;
    }

    var hobby = document.frm.hobby.value;
    if(hobby == ''){
        alert('취미를 선택해주세요.');
        //document.frm.hobby.focus();
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

