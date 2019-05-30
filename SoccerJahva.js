document.getElementById("addteamsbtn").addEventListener("click", addteamsfunction);

function addteamsFunction(){

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



function gotoeditteamsFunction() {
    var x = document.getElementById("addteamshtml");
    var i = document.getElementById("editteamshtml");
    var a = document.getElementById("homepagehtml");
      x.style.display = "none";
      i.style.display = "block";
      a.style.display = "none"
  }


function gotohomepageFunction() {
    var x = document.getElementById("addteamshtml");
    var i = document.getElementById("editteamshtml");
    var a = document.getElementById("homepagehtml");
      x.style.display = "none";
      i.style.display = "none";
      a.style.display = "block"
  }


  function gotoaddteamsFunction() {
    var x = document.getElementById("addteamshtml");
    var i = document.getElementById("editteamshtml");
    var a = document.getElementById("homepagehtml");
      x.style.display = "block";
      i.style.display = "none";
      a.style.display = "none"
   
  }


  function loadFunction() {
    var x = document.getElementById("editteamshtml");
    var i = document.getElementById("addteamshtml");
    var a = document.getElementById("homepagehtml");
   x.style.display = "none"
   i.style.display = "none"
   a.style.display = "block"
  }

