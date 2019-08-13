document.getElementById("addteamsbtn").addEventListener("click", addteamsFunction);


//This function takes all the team names entered and pushes them into the teamsarray. 
//It also takes all the team names entered and pushes them into the seedsarray.
//Finally, it takes those values in the arrays and displays them on the edit teams page
function addteamsFunction(){
var teamsarray = []
var seedsarray = []


if(enterteamname1.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname1.value)
}

if(enterteamname2.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname2.value)
}

if(enterteamname3.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname3.value)
}


if(enterteamname4.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname4.value)
}

if(enterteamname5.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname5.value)
}

if(enterteamname6.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname6.value)
}


if(enterteamname7.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname7.value)
}

if(enterteamname8.value == ""){
  alert("enter a team name for all teams")
  return
}else{
  teamsarray.push(enterteamname8.value)
}





if(seedteam1.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam1.value)
}

if(seedteam2.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam2.value)
}

if(seedteam3.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam3.value)
}


if(seedteam4.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam4.value)
}

if(seedteam5.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam5.value)
}

if(seedteam6.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam6.value)
}


if(seedteam7.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam7.value)
}

if(seedteam8.value == ""){
  alert("enter a seed for all teams")
  return
}else{
  seedsarray.push(seedteam8.value)
}



outputteamone.value = teamsarray[0]
outputteamtwo.value = teamsarray[1]
outputteamthree.value = teamsarray[2]
outputteamfour.value = teamsarray[3]
outputteamfive.value = teamsarray[4]
outputteamsix.value = teamsarray[5]
outputteamseven.value = teamsarray[6]
outputteameight.value = teamsarray[7]

outputseedteam1.value = seedsarray[0]
outputseedteam2.value = seedsarray[1]
outputseedteam3.value = seedsarray[2]
outputseedteam4.value = seedsarray[3]
outputseedteam5.value = seedsarray[4]
outputseedteam6.value = seedsarray[5]
outputseedteam7.value = seedsarray[6]
outputseedteam8.value = seedsarray[7]

}



//The function below takes the teams in the teamsarray and rearranges them depending on what seed they are

document.getElementById("play").addEventListener("click", playFunction);

function playFunction(teamsarray, seedsarray){

shuffle(teamsarray)

alert(teamsarray)


?????????
}






//The functions below allow for navigation between html divs

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

