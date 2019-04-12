document.getElementById("addteamsbtn").addEventListener("click", addteamsfunction);
function addteamsfunction(){

var teamarray = [];
if(teamname != ""){
teamarray.push(teamname)
document.getElementById("outputteamone") = teamarray[0]
}else{
    alert("Please enter a team name")
}
}