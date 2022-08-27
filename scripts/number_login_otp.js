let OTP_Number = JSON.parse(localStorage.getItem("OTP"));
alert(`Your OTP is - ${OTP_Number}`);


let Verify = ()=>
{
    let get_OTP = Number(document.getElementById("OTP").value);
    if(OTP_Number === get_OTP)
    {
        alert("Successfully OTP has been Verified");
        window.location.href = "match.html";
    }
    else{
        alert("Wrong OTP")
    }
}