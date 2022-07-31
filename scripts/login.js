
document.querySelector("form").addEventListener("submit", verifyLogin)
let arr = JSON.parse(localStorage.getItem("details")) || []
function verifyLogin(event) {
    event.preventDefault()
    let detail = JSON.parse(localStorage.getItem("details"))
    console.log(detail[0].mail)

    let mail = document.querySelector("#mail").value
    let pass = document.querySelector("#pass").value
    if (mail.length == 0 || pass.length == 0) {
        alert("Enter Details")
        return
    }
    // for(let i=0;i<detail.length;i++){
    if (mail == detail[0].mail && pass == detail[0].pass) {
        if (window.confirm('Login Successful')) {
            window.location.href = './index.html';
        }
    };
    if (mail != detail[0].mail || pass != detail[0].pass) {
        alert("invalid credentials")
    };



}