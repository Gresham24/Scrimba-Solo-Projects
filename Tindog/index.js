import Dog from './Dog.js';
import dogs from './data.js';

/* ======================================
        VARIABLES
========================================= */

const likeButton = document.getElementById('accept-btn');
const dislikeButton = document.getElementById('decline-btn');
const mainPost = document.getElementById('main-post');
const yesBadge = document.getElementById('yes-badge');
const nopeBadge = document.getElementById('nope-badge');

let hasBeenSwiped = false;
let hasBeenLiked = false;

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);

/* ======================================
        EVENT LISTENERS
========================================= */

likeButton.addEventListener('click', likeDog);
dislikeButton.addEventListener('click', dislikeDog);


/* ======================================
        FUNCTIONS
========================================= */

function getNewDog() {
    currentDogIndex === 2 ? currentDogIndex = 0 : currentDogIndex += 1;
    currentDog = new Dog(dogs[currentDogIndex]);
    render();
}

// ACCEPT BUTTON

function likeDog() {
    currentDog.setMatchStatus(true);
    if (!hasBeenSwiped) {
        hasBeenLiked = true;
        yesBadge.style.display = "initial";
    }
    setTimeout(() => {
        getNewDog();
        hasBeenLiked = false;
        yesBadge.style.display = "none";
    }, 2000);
}

// REJECT BUTTON

function dislikeDog() {
    currentDog.setMatchStatus(true);
    if (!hasBeenSwiped) {
        nopeBadge.style.display = "initial";
    }
    setTimeout(() => {
        getNewDog();
        nopeBadge.style.display = "none";
    }, 2000);
}

// RENDER THE DOG ON HTML

function render() {
    mainPost.innerHTML = currentDog.getDogHtml();
}

render();
