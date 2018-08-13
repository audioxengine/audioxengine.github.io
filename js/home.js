//JS for MediaElement.js
$(document).ready(function () {
    $('#lq-track').mediaelementplayer({
        features: ['current', 'progress', 'duration']
    });
});

// Track of the Month 
function lqTrackEnded() {
    if ($('#lq-cover-icon').hasClass('active')) {
        var lqContainer = document.getElementById("lq-container");
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        var hqContainer = document.getElementById("hq-container");
        lqContainer.classList.toggle("toggle-filter");
        lqAlbumIcon.classList.toggle("active");
        hqContainer.classList.toggle("inactive");
        $(".lq-toggle-play").toggle();
        $("#fetch-info").fadeToggle("500");
    }
}
function hqTrackEnded() {
    if ($('#hq-play-button').hasClass('boosted')) {
        var hqPlayButton = document.getElementById("hq-play-button");
        hqPlayButton.classList.toggle("boosted");
    }
}
function lqButtonToggle() {
    var lqContainer = document.getElementById("lq-container");
    var lqAlbumIcon = document.getElementById("lq-cover-icon");
    var hqContainer = document.getElementById("hq-container");
    lqContainer.classList.toggle("toggle-filter");
    lqAlbumIcon.classList.toggle("active");
    hqContainer.classList.toggle("inactive");
    $(".lq-toggle-play").toggle();
    $("#fetch-info").fadeToggle("500");
}
function hqButtonToggle() {
    var hqPlayButton = document.getElementById("hq-play-button");
    var lqContainer = document.getElementById("lq-container");
    var hqContainer = document.getElementById("hq-container");
    lqContainer.classList.remove("toggle-filter");
    hqPlayButton.classList.toggle("boosted");
    hqContainer.classList.remove("inactive");
    $(".hq-toggle-play").toggle();
    $("#fetch-info").fadeIn("500");
}
function hqButtonToggle1() {
    if ($('#lq-container').css('opacity') == '1') {
        $(".lq-toggle-play").toggle();
    }
}
function hqButtonToggle2() {
    if ($('#hq-container').css('opacity') == '1') {
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
    }
}
function lqButtonToggle1() {
    if ($('#hq-play-button').hasClass('boosted')) {
        var hqPlayButton = document.getElementById("hq-play-button");
        hqPlayButton.classList.toggle("boosted");
        $(".hq-toggle-play").toggle();
    }
}
function lqTrackPlay() {
    if ($('#hq-container').css('opacity') == '1') {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.play(); hqTrack.play();
        lqTrack.muted = false; hqTrack.muted = true;
    }
    else {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.pause(); hqTrack.pause();
    }
}
function hqTrackPlay() {
    if ($('#hq-play-button').css('opacity') == '0.9') {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        hqTrack.play(); lqTrack.play();
        hqTrack.muted = false;
        lqTrack.muted = true;
    }
    else {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.pause();
        hqTrack.pause();
    }
}
function playForward() {
    var lqTrack = document.getElementById('lq-track');
    var hqTrack = document.getElementById('hq-track');
    lqTrack.currentTime += lqTrack.duration / 20;
    hqTrack.currentTime += hqTrack.duration / 20;
}
function playBackward() {
    var lqTrack = document.getElementById('lq-track');
    var hqTrack = document.getElementById('hq-track');
    lqTrack.currentTime -= lqTrack.duration / 20;
    hqTrack.currentTime -= hqTrack.duration / 20;
}