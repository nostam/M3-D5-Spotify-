// function printInnerText(){
//   let clickedSong = document.querySelector('#song');
//   clickedSong.addEventListener('click' , function(){
//       let innerText = clickedSong.innerText;
//       console.log('inner text::::::', innerText);
// });
// }
let songs = [
  {
    title: "20th Centry Fox Fanfare",
    artist: "Queen",
    length: "0:25",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Somebody to love - 2011 MIX",
    artist: "Queen",
    length: "4:55",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Doing All Right - ...Revisited",
    artist: "Queen",
    length: "3:16",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Keep Yourself Alive - Live At The Rainbow",
    artist: "Queen",
    length: "3:56",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Killer Queen - 2011 Mix",
    artist: "Queen",
    length: "2:58",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Bohemian Rhapsody - 2011 Mix",
    artist: "Queen",
    length: "5:54",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Love Of My Life - Live At Rock In Rio",
    artist: "Queen",
    length: "4:23",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "We Will Rock You - Movie Mix",
    artist: "Queen",
    length: "2:09",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Another One Bites The Dust",
    artist: "Queen",
    length: "3:34",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "I Want To Break Free",
    artist: "Queen",
    length: "3:34",
    cover: "bohemia-rhapsody.jpg",
  },
  {
    title: "Bohemian Rhapsody - Live Aid",
    artist: "Queen",
    length: "2:27",
    cover: "bohemia-rhapsody.jpg",
  },
];
function printInnerText(tr) {
  let clickedSong = document.querySelectorAll("tr");
  let index = tr.rowIndex;
  //alert(songs[index-1].title);
  let title = songs[index - 1].title;
  let artist = songs[index - 1].artist;
  let img = songs[index - 1].img;
  let length = songs[index - 1].length;
  //alert(artist + img + length);

  // let nowplayingImg = document.querySelector('.nowplaying-img');
  let nowplayingTitle = document.querySelector(".nowplaying-title");
  let nowplayingArtist = document.querySelector(".nowplaying-artist");
  let nowplayingLength = document.querySelector(".player-nowplaying-time");

  nowplayingTitle.innerHTML = title;
  nowplayingArtist.innerHTML = artist;
  nowplayingLength.innerHTML = length;
  console.log(clickedSong[index]);
  for (let i = 11; i > 0; i--) {
    if (clickedSong[i].classList.contains("active-track")) {
      clickedSong[i].classList.remove("active-track");
    }
  }

  clickedSong[index].classList.add("active-track");
  for (let i = 0; i < index; i++) {
    clickedSong[i].classList.remove("active-track");
  }
}
