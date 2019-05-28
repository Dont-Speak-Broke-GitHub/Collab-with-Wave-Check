document.getElementById("addteamsbtn").addEventListener("click", addteamsfunction);

function addteamsfunction(){

var teamarray = [];
var teamname = document.getElementById("teamname").value
var outputtone = document.getElementById("outputteamone").value

if(teamname === ""){
    alert("Please enter a team name")

}else{
    teamarray.push(teamname)
document.getElementById("outputteamone").value = teamarray[0]
}
}

document.getElementById("addteambutton").addEventListener("click", addteamsfunction);
