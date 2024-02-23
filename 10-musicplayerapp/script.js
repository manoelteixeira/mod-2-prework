let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrIcon = document.getElementById("control-icon");

const pause = "fa-pause";
const play = "fa-play";

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrIcon.classList.contains(pause)) {
    song.pause();
    ctrIcon.classList.remove(pause);
    ctrIcon.classList.add(play);
  } else {
    song.play();
    ctrIcon.classList.remove(play);
    ctrIcon.classList.add(pause);
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrIcon.classList.remove(play);
  ctrIcon.classList.add(pause);
};
