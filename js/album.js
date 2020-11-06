let artistTracks = [];

const onAlbumPageLoad = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return id;
};

const getFetchTracks = function (input) {
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${input}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((tracks) => {
      artistTracks = [];
      artistTracks.push(tracks);
      changePageStructure(artistTracks);
      addFunctionalityForSongs(artistTracks);
    })
    .catch((err) => {
      console.error(err);
    });
};

//array[0].tracks.data.preview
const addFunctionalityForSongs = function (array) {
  let songs = document.querySelectorAll(".songRow");
  let playerSongName = document.querySelector(
    "#player > div > div.left.d-flex.align-items-left > div > p:nth-child(1)"
  );
  let playerArtistName = document.querySelector(
    "#player > div > div.left.d-flex.align-items-left > div > p.mb-3"
  );
  let playerImg = document.querySelector(
    "#player > div > div.left.d-flex.align-items-left > img"
  );
  for (let song of songs) {
    song.addEventListener("click", (e) => {
      let songName = e.target.querySelector(".song");
      playerSongName.innerText = songName.innerText;

      let artistName = e.target.querySelector(".group");
      playerArtistName.innerText = artistName.innerText;

      let artistImg = document.querySelector("#albumCover");
      playerImg["src"] = array[0].cover_medium;
      // let songLink = array[0].tracks[0].data.preview
      // console.log(songLink)
    });
  }
};

const changePageStructure = function (array) {
  let pageCover = document.getElementById("coverAlbum");
  pageCover["src"] = array[0].cover_medium;

  document.querySelector(".album-details h5").remove();
  let pageAlbumName = document.querySelector(".album-details h2");
  pageAlbumName.innerText = array[0].title;

  let artistImg = document.querySelector(".album-details .group-img");
  artistImg["src"] = array[0].artist.picture_small;

  let artistName = document.querySelector(".group-name");
  artistName.innerText = array[0].artist.name;

  let albumDetails = document.querySelector(".album-details .album-length");
  const duration = (time) => {
    const min = time / 60;
    return min <= 60
      ? `${Math.floor(min)} MIN`
      : `${Math.floor(min / 60)} HR ${min} MIN}`;
  };
  albumDetails.innerText = `${array[0].release_date.substr(0, 4)} • ${
    array[0].nb_tracks
  } SONGS ${duration(array[0].duration)}`;

  let tracksTitle = document.querySelectorAll(".songRow .song");
  let tracksArtist = document.querySelectorAll(".songRow .group");
  for (let i = 0; i < tracksTitle.length; i++) {
    tracksTitle[i].innerText = array[0].tracks.data[i].title;
    tracksArtist[i].innerText = array[0].tracks.data[i].artist.name;
  }
};

window.onload = function () {
  // searchInput()
  let id = onAlbumPageLoad();
  getFetchTracks(id);
  // getTracklist()

  let btn = document.querySelectorAll(".menu div.col");
  let list = document.querySelector(".playlists");
  btn[3].firstElementChild.addEventListener("click", function () {
    let newItem = document.createElement("p");
    newItem.innerText = "New Playlist #";
    newItem.innerText += list.childElementCount++;
    console.log(newItem);
    list.insertBefore(newItem, list.firstElementChild);
  });
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

  let playlistHeartOutline = document.querySelectorAll(".playlist .fa-heart");
  for (let i = 0; i < playlistHeartOutline.length; i++) {
    playlistHeartOutline[i].addEventListener("click", function () {
      if (playlistHeartOutline[i].classList.contains("far")) {
        playlistHeartOutline[i].classList.toggle("fas");
        playlistHeartOutline[i].style.width = "2rem";
        playlistHeartOutline[i].style.height = "2rem";
      } else {
        playlistHeartOutline[i].classList.toggle("far");
      }
    });

    function playlistHover() {
      let rows = document.querySelectorAll("tr");
      for (let i = 9; i <= rows.length; i++) {
        rows[i].addEventListener("mouseover", addIcons());
      }
    }

    function addIcons() {}
  }
};
