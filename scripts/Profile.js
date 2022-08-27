
let Play = ()=>
{
    let team_name = document.getElementById("team_name").value;
    let name = document.getElementById("name").value;
    let state = document.getElementById("state").value;
    let obj = {
        team_name : team_name,
        name : name,
        state : state
    }
    if(team_name !=="" && name !== "" && state !== "")
    {
        localStorage.setItem("Profile_Info", JSON.stringify(obj));
        window.location.href = "match.html";
    }
    else
    {
        alert("fill all details");
    }
}