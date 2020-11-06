let search = []
let filteredSearch = []

const getFetch = function(input){
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
    })
    .then(response => response.json())
    .then(album => {
        search = album.data.map(albumT => albumT);
        generateCards(search)
    })
	
    .catch(err => {
	console.error(err);
    });
}

// const generateCard = function(songs){
//     let cardRow = document.querySelector("div.row.no-gutters")

//     let searchedCards = songs.map((song) => {
//         return `<div class="trending card p-0 col-12 col-md-3 col-lg-2" id="${song.album.id}">
//         <img
//           class="card-img-top"
//           src="${song.album.cover}"
//           alt="spotify_playlist_1"
//         />
//         <i class="spotify-card-icon fab fa-spotify"></i>
//         <span class="overlay-icons"
//           ><i class="heart far fa-heart fa-sm mr-3"></i
//           ><i class="play fas fa-play fa-1x mr-3"></i
//           ><i class="fa fa-ellipsis-h fa-sm"></i>
//         </span>
//         <div>
//           <h6>${song.album.title}</h6>
//         </div>
//       </div>
// `
//     })
//     .join("")

//     cardRow = searchedCards;

// }
const generateCards = function(array){
    let row = getRow()
    for(let song of array){
        let newCard = cardTemplate(song)
        row.innerHTML += newCard;
    }
}

const getRow = function(){
    let cardRow = document.querySelector("div.row.no-gutters")
    return cardRow
}
const cardTemplate = function(songs){
    
        return `<div class="trending card p-0 col-12 col-md-3 col-lg-2" id="${songs.album.id}">
        <img
          class="card-img-top"
          src="${songs.album.cover}"
          alt="spotify_playlist_1"
        />
        <i class="spotify-card-icon fab fa-spotify"></i>
        <span class="overlay-icons"
          ><i class="heart far fa-heart fa-sm mr-3"></i
          ><i class="play fas fa-play fa-1x mr-3"></i
          ><i class="fa fa-ellipsis-h fa-sm"></i>
        </span>
        <div>
          <h6>${songs.album.title}</h6>
        </div>
      </div>
`  

}


const searchInput = function(){
    let input = document.querySelector("#searchInput");

    let buttonSrch = document.querySelector("#searchBtn")
    
    buttonSrch.addEventListener("click",()=>{
        let row = getRow();
        row.innerHTML =""
        getFetch(input.value)
        // generateCard(search)
    })

}

//https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem

