//JS for MediaElement.js
$(document).ready(function(){$('audio').mediaelementplayer({              
  features: ['current','progress','duration']
});});

//JS for Version Box
function versionVsbltyT() {
  var versionInfo = document.getElementById("version-info");
  if (versionInfo.style.visibility === "visible") {
    versionInfo.style.visibility = "hidden";
  } else {
    versionInfo.style.visibility = "visible";
  }
}
function versionVsbltyH() {
  var versionInfo = document.getElementById("version-info");
  if (versionInfo.style.visibility === "") {
    versionInfo.style.visibility = "";
  } else {
    versionInfo.style.visibility = "";
  }
}