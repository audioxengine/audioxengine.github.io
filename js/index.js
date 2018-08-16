//JS for Version BOx
function versioBoxToggle() {
  var versionInfo = document.getElementById("version-info");
  "visible" === versionInfo.style.visibility ? versionInfo.style.visibility = "hidden" : versionInfo.style.visibility = "visible"
}
function versionBoxHide() {
  var versionInfo = document.getElementById("version-info");
  versionInfo.style.visibility = "hidden"
}
function versionUpdate(){
  document.getElementById("version-update-value").textContent="Update Version 1.1";
  document.getElementById("update-span-1").textContent="Welcome! As you can see, TrackBoostR is still under development. Stay tuned as we grow and feel free to reach me using the Contact Tab. Cheers!";

  document.getElementById("update-span-2").textContent=" Latest Update(s):";
  document.getElementById("update-span-3").textContent="-- Added BoostD Track of The Month --";
  document.getElementById("update-span-4").textContent="";
  document.getElementById("update-span-5").textContent="";
  document.getElementById("update-span-6").textContent="";
  document.getElementById("update-span-7").textContent="";
  document.getElementById("update-span-8").textContent="";
  document.getElementById("update-span-9").textContent="";
  document.getElementById("update-span-10").textContent="";
};

//JS Search Box
function submitSearch() {
  document.location.href = '/archive/#' + document.getElementById('trackboostrsearch').value;
  return false;
}