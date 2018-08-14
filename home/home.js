//JS for MediaElement.js
$(document).ready(function () {
    $('#lq-track').mediaelementplayer({
        features: ['current', 'progress', 'duration']
    });
});

// Track of the Month
function lqButtonToggle() {
    var lqContainer = document.getElementById("lq-container");
    var hqContainer = document.getElementById("hq-container");
    lqContainer.classList.toggle("toggle-filter");
    hqContainer.classList.toggle("inactive");
    $(".lq-toggle-play").toggle();
}
function hqButtonToggle() {
    var hqPlayButton = document.getElementById("hq-play-button");
    var lqContainer = document.getElementById("lq-container");
    var hqContainer = document.getElementById("hq-container");
    lqContainer.classList.remove("toggle-filter");
    hqPlayButton.classList.toggle("boosted");
    hqContainer.classList.remove("inactive");
    $(".hq-toggle-play").toggle();
}
function hqButtonToggle1() {
    if ($('#lq-container').css('opacity') == '1') {
        $(".lq-toggle-play").toggle();
    }
}
function lqButtonToggle1() {
    if ($('#hq-play-button').hasClass('boosted')) {
        var hqPlayButton = document.getElementById("hq-play-button");
        hqPlayButton.classList.toggle("boosted");
        $(".hq-toggle-play").toggle();
    }
}

// GraFX Toggles (c) TrackBoostR on Media Controls
function lqTrackPlay() {
    if ($('#hq-container').css('opacity') == '1') {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.play(); hqTrack.play();
        lqTrack.muted = false; hqTrack.muted = true;
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        $("#fetch-info").fadeIn("500");
        var mainContainer = document.getElementById("center-container");
        mainContainer.classList.remove("activate");
    }
    else {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.pause(); hqTrack.pause();
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
    }
}
function hqTrackPlay() {
    if ($('#hq-play-button').css('opacity') == '0.9') {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        hqTrack.play(); lqTrack.play();
        hqTrack.muted = false;
        lqTrack.muted = true;
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.add("active");
        $("#fetch-info").fadeOut("500");
        var mainContainer = document.getElementById("center-container");
        mainContainer.classList.add("activate");
    }
    else {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.pause();
        hqTrack.pause();
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        var mainContainer = document.getElementById("center-container");
        mainContainer.classList.remove("activate");
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
function lqTrackEnded() {
    if ($('#lq-container').css('opacity') == '1') {
        var lqContainer = document.getElementById("lq-container");

        var hqContainer = document.getElementById("hq-container");
        lqContainer.classList.toggle("toggle-filter");

        hqContainer.classList.toggle("inactive");
        $(".lq-toggle-play").toggle();
        $("#fetch-info").fadeIn("500");
    }
}
function hqTrackEnded() {
    if ($('#hq-play-button').hasClass('boosted')) {
        var hqPlayButton = document.getElementById("hq-play-button");
        hqPlayButton.classList.toggle("boosted");
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        $("#fetch-info").fadeIn("500");
    }
}