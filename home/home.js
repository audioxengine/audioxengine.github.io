//JS for MediaElement.js
$(document).ready(function () {
    $('#hq-track').mediaelementplayer({
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
    var lqContainer = document.getElementById("lq-container");
    var hqContainer = document.getElementById("hq-container");
    lqContainer.classList.remove("lq-filter");
    hqContainer.classList.remove("inactive");
    var hqPlayButton = document.getElementById("hq-play-button");
    hqPlayButton.classList.toggle("boosted");
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
        lqTrack.play(); hqTrack.play(); lqTrack.muted = false; hqTrack.muted = true;
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.remove("active");
        $("#fetch-info").fadeIn("500");
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
        hqTrack.play(); lqTrack.play(); hqTrack.muted = false; lqTrack.muted = true;
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.add("active");
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.add("active");
        $("#fetch-info").fadeOut("500");
    }
    else {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.pause(); hqTrack.pause();
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.remove("active");
        $("#fetch-info").fadeIn("500");
    }
}
function downBackward() {
    var lqTrack = document.getElementById('lq-track'); var hqTrack = document.getElementById('hq-track');
    interval = setInterval(function () { lqTrack.currentTime -= 5; hqTrack.currentTime -= 5; }, 200);
    lqTrack.pause(); hqTrack.pause();
}
function upBackward1() {
    if ($('#hq-container').hasClass('active')) {
        clearInterval(interval);
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.currentTime -= 5; hqTrack.currentTime -= 5;
        lqTrack.play(); hqTrack.play(); lqTrack.muted = true; hqTrack.muted = false;
    }
}
function upBackward2() {
    if ($('#lq-container').css('opacity') == '1') {
        clearInterval(interval);
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.currentTime -= 5; hqTrack.currentTime -= 5;
        lqTrack.play(); hqTrack.play(); lqTrack.muted = false; hqTrack.muted = true;
    }
}
function upBackward() {
    clearInterval(interval);
    var lqTrack = document.getElementById('lq-track');
    var hqTrack = document.getElementById('hq-track');
    lqTrack.currentTime -= 5; hqTrack.currentTime -= 5;
    lqTrack.pause(); hqTrack.pause();
}
function downForward() {
    var lqTrack = document.getElementById('lq-track'); var hqTrack = document.getElementById('hq-track');
    interval = setInterval(function interval() { lqTrack.currentTime += 5; hqTrack.currentTime += 5; }, 200);
    lqTrack.pause(); hqTrack.pause();
}
function upForward1() {
    if ($('#hq-container').hasClass('active')) {
        clearInterval(interval);
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.currentTime += 5; hqTrack.currentTime += 5;
        lqTrack.play(); hqTrack.play(); lqTrack.muted = true; hqTrack.muted = false;
    }
}
function upForward2() {
    if ($('#lq-container').css('opacity') == '1') {
        clearInterval(interval);
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.currentTime += 5; hqTrack.currentTime += 5;
        lqTrack.play(); hqTrack.play(); lqTrack.muted = false; hqTrack.muted = true;
    }
}
function upForward() {
    clearInterval(interval);
    var lqTrack = document.getElementById('lq-track');
    var hqTrack = document.getElementById('hq-track');
    lqTrack.currentTime += 5; hqTrack.currentTime += 5;
    lqTrack.pause(); hqTrack.pause();
}
function lqTrackEnded() {
    if ($('#lq-container').css('opacity') == '1') {
        $(".lq-toggle-play").toggle();
        $("#fetch-info").fadeIn("500");
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.currentTime = 0; hqTrack.currentTime = 0;
        lqTrack.muted = true; hqTrack.muted = true;
        hqTrack.pause(); lqTrack.pause();
        var lqContainer = document.getElementById("lq-container");
        var hqContainer = document.getElementById("hq-container");
        lqContainer.classList.toggle("lq-filter");
        hqContainer.classList.toggle("inactive");
    }
}
function hqTrackEnded() {
    if ($('#hq-container').hasClass('active')) {
        var lqTrack = document.getElementById('lq-track');
        var hqTrack = document.getElementById('hq-track');
        lqTrack.currentTime = 0; hqTrack.currentTime = 0;
        lqTrack.muted = true; hqTrack.muted = true;
        hqTrack.pause(); lqTrack.pause();
        var hqPlayButton = document.getElementById("hq-play-button");
        hqPlayButton.classList.toggle("boosted");
        $(".hq-toggle-play").toggle();
        var hqContainer = document.getElementById("hq-container");
        hqContainer.classList.remove("active");
        var lqAlbumIcon = document.getElementById("lq-cover-icon");
        lqAlbumIcon.classList.remove("active");
        $("#fetch-info").fadeIn("500");
    }
}