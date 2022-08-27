// function for changing color of button-

let check;
let signup_btn;
let email;
let password;

let button_change = ()=>
    {
        check = document.getElementById("check");
        signup_btn = document.getElementById("signup_btn");
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        if(check.checked && email !=="" && password.length >=8)
        {
            signup_btn.removeAttribute("disabled");
            signup_btn.style.cursor = "pointer"
            signup_btn.style.backgroundColor = "#5217b0"
        }
        else
        {
            signup_btn.setAttribute("disabled", "disabled");
            signup_btn.style.cursor = "not-allowed"
            signup_btn.style.backgroundColor = "#ff0000c7"
        }
    }

// function for saving data in LS-

function Sign_up()
{
    let obj = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    }
    if(check.checked && email !=="" && password.length >=8)
    {
        localStorage.setItem("sign_up_data", JSON.stringify(obj));
    }
    window.location.href="mobile_no.html";
}