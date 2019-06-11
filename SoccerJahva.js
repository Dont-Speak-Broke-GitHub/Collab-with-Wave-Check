document.getElementById("addteamsbtn").addEventListener("click", addteamsfunction);

function addteamsFunction(){


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

