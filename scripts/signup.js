document.querySelector("form").addEventListener("submit", myfun)

function myfun(event) {
    event.preventDefault()
    var mail = document.querySelector("#mail").value
    var phn = document.querySelector("#phn").value
    var pass = document.querySelector("#pass").value
    if (mail.length == 0 || phn.length == 0 || pass.length == 0) {
        alert("Enter Details")
        return
    }

    let details = {
        mail: mail,
        phn: phn,
        pass: pass,
    }
    arr.push(details)
    localStorage.setItem("details", JSON.stringify(arr))
    alert("SignUp Successful")
}
var arr = JSON.parse(localStorage.getItem("details")) || []