//JS for Version Box
function versionVsbltyT() {
  var x = document.getElementById("version-info");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}
function versionVsbltyH() {
  var x = document.getElementById("version-info");
  if (x.style.visibility === "") {
    x.style.visibility = "";
  } else {
    x.style.visibility = "";
  }
}

//JS for LQ Player Button and Filter
function togglePlayPause() {
  var lqtrackofthemonth = document.getElementById("lq-track");
  {lqtrackofthemonth.paused? lqtrackofthemonth.play() : lqtrackofthemonth.pause();}
  
  lqtrackofthemonth.onended = function faPlayPauseToggle() {
    $(".track-button").toggle(); {
    $("#lq-container").toggleClass("toggle-filter");} {
    $("#fetch-info").fadeToggle("500");
    }
  };
}
$(function faPlayPause() {
  $("#play-pause-button").click(function faPlayPause() {
    $(".track-button").toggle(); $("#fetch-info").fadeToggle("500");
  });
});
function toggleFilter() {
  var lqPlayer = document.getElementById("lq-container");
  lqPlayer.classList.toggle("toggle-filter");
}
