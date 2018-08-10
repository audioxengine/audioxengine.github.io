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
//JS for Play/Pause Button
function togglePlayPause() {
  var song = document.getElementById("lq-track");
  {
    song.paused? song.play() : song.pause();
  }
}
$(function () {
  $("#play-pause-button").click(function () {
      $("#track-button").toggleClass("fa-play fa-pause");
  });
});