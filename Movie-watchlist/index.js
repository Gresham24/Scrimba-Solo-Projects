/*
Features:
- on index.html page, once movie is added to watchlist, change "+ watchlist" button to "added to watchlist"
- 

*/

/* ============================
            Variables
=============================== */

const searchQry = null;
const poster = null;
const title = null;
const imdbRating = null;
const runtime = null;
const genre = null;
const plot = null;

const watchlistBtn = document.getElementById('watchlist-page-btn');



/* ============================
            Functions
=============================== */

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=42f3cd82')
    .then(res => res.json())
    .then(data => {
        // console.log(data.Title)
        // console.log(data.Poster)
        // console.log(data.Runtime)
        // console.log(data.imdbRating)
        // console.log(data.Genre)
        // console.log(data.Plot)
    });




/* ============================
            EVENT LISTENERS
=============================== */

const searchInput = document.querySelector("input[type='search']");
console.log(searchInput.value);
const searchValue = searchInput.value;

document.getElementById('search-btn').addEventListener('click', function () {
    console.log('test print');
    console.log(searchValue);
})


// Switch between pages
watchlistBtn.addEventListener('click', function () {
    window.location.href = 'watchlist.html';
});

