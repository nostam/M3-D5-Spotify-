window.onload = function () {
  let heartOutline = document.querySelector(".loved-track .far.fa-heart");
  let heartFilled = document.querySelector(".loved-track .fas.fa-heart");
  heartFilled.addEventListener("click", function () {
    if (!heartFilled.classList.contains("active")) {
      heartFilled.classList.toggle("active");
      heartFilled.style.opacity = 1;
      heartOutline.style.opacity = 0;
    } else {
      heartFilled.classList.toggle("active");
      heartFilled.style.opacity = 0;
      heartOutline.style.opacity = 1;
    }
  });

  let muted = document.querySelector(".player-volume .fas.fa-volume-mute");
  let volMax = document.querySelector(".player-volume .fas.fa-volume-up");
  let vol = document.getElementById("nowplayingVolume");
  muted.addEventListener("click", function () {
    if (!muted.classList.contains("active")) {
      console.log("going mute");
      muted.classList.toggle("active");
      muted.style.opacity = 1;
      volMax.style.opacity = 0;
      vol.style.width = "0%";
    } else {
      muted.classList.toggle("active");
      muted.style.opacity = 0;
      volMax.style.opacity = 1;
      vol.style.width = "100%";
    }
  });
};
