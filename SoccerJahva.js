document.getElementById("addteamsbtn").addEventListener("click", addteamsfunction);

function addteamsFunction(){
var teamsarray = []

if(enterteamname1 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname1)
}

if(enterteamname2 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname2)
}

if(enterteamname3 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname3)
}


if(enterteamname4 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname4)
}

if(enterteamname5 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname5)
}

if(enterteamname6 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname6)
}


if(enterteamname7 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname7)
}

if(enterteamname8 == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname8)
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

