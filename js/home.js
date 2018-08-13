// Track of the Month

function lqButtonToggle() {
    var lqContainer = document.getElementById("lq-container");
    var lqAlbumIcon = document.getElementById("lq-cover-icon");
    var hqContainer = document.getElementById("hq-container");

    lqContainer.classList.toggle("toggle-filter");
    lqAlbumIcon.classList.toggle("active");
    hqContainer.classList.toggle("inactive");
    $(".lq-toggle-play").toggle();
    $("#fetch-info").fadeToggle("500");}
  
function hqButtonToggle() {
    var hqPlayButton = document.getElementById("hq-play-button");
    var lqContainer = document.getElementById("lq-container");
    var hqContainer = document.getElementById("hq-container");
  
    lqContainer.classList.remove("toggle-filter");
    hqPlayButton.classList.toggle("boosted");
    hqContainer.classList.remove("inactive");
    $(".hq-toggle-play").toggle();
    $("#fetch-info").fadeIn("500");}
  
  
function hqButtonToggle1() {
    if( $('#lq-container').css('opacity') == '1' ) {
    $(".lq-toggle-play").toggle();  
  }
}
function hqButtonToggle2() {
    if( $('#hq-container').css('opacity') == '1' ) {
        
    var lqAlbumIcon = document.getElementById("lq-cover-icon");
    lqAlbumIcon.classList.remove("active");
   }
  }
function lqButtonToggle1() {
    if( $('#hq-play-button').hasClass('boosted')) {
      var hqPlayButton = document.getElementById("hq-play-button");
      hqPlayButton.classList.toggle("boosted");
      $(".hq-toggle-play").toggle();
    }
  }