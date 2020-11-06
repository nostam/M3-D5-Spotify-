

let music = document.getElementById('music'); // id for audio element
let duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
let pButton = document.getElementById('pButton'); // play button
let playhead = document.getElementById('playhead'); // playhead
let timeline = document.getElementById('timeline'); // timeline

// timeline width adjusted for playhead
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
let onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    let newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    let playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "play";
    }
}

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
}

// Gets audio file duration
music.addEventListener("canplaythrough", function() {
    duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}





// window.onload = function () {
//   let heartOutline = document.querySelector(".loved-track .far.fa-heart");
//   let heartFilled = document.querySelector(".loved-track .fas.fa-heart");
//   heartFilled.addEventListener("click", function () {
//     if (!heartFilled.classList.contains("active")) {
//       heartFilled.classList.toggle("active");
//       heartFilled.style.opacity = 1;
//       heartOutline.style.opacity = 0;
//     } else {
//       heartFilled.classList.toggle("active");
//       heartFilled.style.opacity = 0;
//       heartOutline.style.opacity = 1;
//     }
//   });

//   let muted = document.querySelector(".player-volume .fas.fa-volume-mute");
//   let volMax = document.querySelector(".player-volume .fas.fa-volume-up");
//   let vol = document.getElementById("nowplayingVolume");
//   muted.addEventListener("click", function () {
//     if (!muted.classList.contains("active")) {
//       console.log("going mute");
//       muted.classList.toggle("active");
//       muted.style.opacity = 1;
//       volMax.style.opacity = 0;
//       vol.style.width = "0%";
//     } else {
//       muted.classList.toggle("active");
//       muted.style.opacity = 0;
//       volMax.style.opacity = 1;
//       vol.style.width = "100%";
//     }
//   });
// };
