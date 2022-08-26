let sign_up_data = JSON.parse(localStorage.getItem("sign_up_data"));

let Log_in = () =>
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email == sign_up_data.email && password == sign_up_data.password)
    {
        alert("Log In Successfully");
        window.location.href = "match.html";
    }
    else
    {
        alert("email id or password is wrong")
    }
}
