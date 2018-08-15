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
    lqContainer.classList.toggle("lq-filter");
    hqContainer.classList.toggle("inactive");
    $(".lq-toggle-play").toggle();
}
function hqButtonToggle() {
    var hqPlayButton = document.getElementById("hq-play-button");
    var lqContainer = document.getElementById("lq-container");
    var hqContainer = document.getElementById("hq-container");
    lqContainer.classList.remove("lq-filter");
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
    if ($('#hq-container').hasClass('active')) {
        var hqPlayButton = document.getElementById("hq-play-button");
        hqPlayButton.classList.remove("boosted");
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
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.remove("active");
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
    if ($('#hq-container').hasClass("")) {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        hqTrack.play(); lqTrack.play();
        hqTrack.muted = false;lqTrack.muted = true;
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.add("active");
        $("#fetch-info").fadeOut("500");
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.add("active");
    }
    else {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.pause();hqTrack.pause();
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.remove("active");
        $("#fetch-info").fadeIn("500");
    }
}
function playForward() {
    var lqTrack = document.getElementById('lq-track');
    var hqTrack = document.getElementById('hq-track');
    lqTrack.currentTime +=  7.77;
    hqTrack.currentTime +=  7.77;
}
function playBackward() {
    var lqTrack = document.getElementById('lq-track');
    var hqTrack = document.getElementById('hq-track');
    lqTrack.currentTime -=  7.77;
    hqTrack.currentTime -=  7.77;
}
function lqTrackEnded() {
    if ($('#lq-container').css('opacity') == '1') {
        var lqContainer = document.getElementById("lq-container");
        lqContainer.classList.toggle("lq-filter");
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.toggle("inactive");
        $(".lq-toggle-play").toggle();
        $("#fetch-info").fadeIn("500");
    }
}
function hqTrackEnded() {
    if ($('#hq-container').hasClass('active')) {
        var hqPlayButton = document.getElementById("hq-play-button");
        hqPlayButton.classList.toggle("boosted");
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        $("#fetch-info").fadeIn("500");
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.remove("active");
    }
}
function reSync() {
    var lqTrack = document.getElementById('lq-track');
    var hqTrack = document.getElementById('hq-track');
    lqTrack.currentTime -= lqTrack.duration;
    hqTrack.currentTime -= hqTrack.duration;
    lqTrack.currentTime = hqTrack.currentTime;
    hqTrack.currentTime = lqTrack.currentTime;
    lqTrack.pause();hqTrack.pause();
}