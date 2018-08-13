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

//JS for Track of the Month

function lqButtonToggle() {
  var lqContainer = document.getElementById("lq-container");
  
  lqContainer.classList.toggle("toggle-filter");
  $(".lq-toggle-play").toggle();
  $("#fetch-info").fadeToggle("500");
  
}

function hqButtonToggle() {
  var hqPlayButton = document.getElementById("hq-play-button");
  
  hqPlayButton.classList.toggle("boosted");
  $(".hq-toggle-play").toggle();
  $("#fetch-info").fadeIn("500");
}