// 로그인 유효성 검사 ============================================
function login_check() {
    let id = document.getElementById("id");
    let pw = document.getElementById("pw");

    let idError = document.getElementById("idError");
    let pwError = document.getElementById("pwError");


    idError.textContent = "";
    pwError.textContent = "";


    if (id.value == "") {
        idError.textContent = "아이디를 입력하세요.";
        id.focus();
        return false;
    }
    if (pw.value == "") {
        pwError.textContent = "비밀번호를 입력하세요.";
        pw.focus();
        return false;
    }
    return true; 
}


// 닫기 ============================================