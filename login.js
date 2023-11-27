let user = document.getElementById("username");
let pass = document.getElementById("password");
let result = document.getElementById("result");

function checkPassword() {
    let u = user.value;
    let p = pass.value;
    console.log(u);
    console.log(p);
    if (u == "pitsamai" && p == "123456") {
        result.innerHTML = "Login Success";
        let url = "หน้าหลัก.html";
        let newWindow = window.open(url);
    } else {
        result.innerHTML = "Login Fail";
    }
}

function resetData() {
    user.value = "";
    pass.value = "";
    result.innerHTML = " ";
}