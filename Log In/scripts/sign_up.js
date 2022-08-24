// functon for taking values -
let Sign_up = () =>
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let signup_btn = document.getElementById("signup_btn");
    let check = document.getElementById("check");
    check.addEventListener("click", function(){
        checkbox();
    })
    event.preventDefault()
    if(check.checked)
    {
        signup_btn.style.backgroundColor = "green"
        signup_btn.removeAttribute("disabled")
        signup_btn.style.cursor = "pointer"
        console.log("checked");
        alert(password.length)
    }
    else
    {
        signup_btn.setAttribute("disabled", "disabled")
        console.log("Not checked");
    }
}
function checkbox()
{
    alert(1)
}