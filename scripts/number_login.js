// back button -
let back = ()=>
{
    window.location.href = "log_in.html"
}


// OTP button -
let OTP = ()=>
{
    let = mobile = (document.getElementById("mobile").value);
    if(mobile.length === 10)
    {
        alert("Successfully OTP generated");
        localStorage.setItem("OTP", JSON.stringify(Math.floor (1000 + Math.random () * 9000)));
        window.location.href = "number_login_otp.html";
    }
    else
    {
        alert("Invalid Number")
    }
}