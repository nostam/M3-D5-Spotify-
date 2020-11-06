window.onload = function () {
  let btn = document.querySelectorAll(".menu div.col");
  let list = document.querySelector(".playlists");
  btn[3].firstElementChild.addEventListener("click", function () {
    let newItem = document.createElement("p");
    newItem.innerText = "New Playlist #";
    newItem.innerText += list.childElementCount++;
    console.log(newItem);
    list.insertBefore(newItem, list.firstElementChild);
  });
};
