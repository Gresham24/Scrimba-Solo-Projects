/* ============================
            Variables
=============================== */

const colSchemeBtn = document.getElementById('col-scheme-generator');
let seedColVal = '';
let colSchemeVal = '';
let colBlock = document.querySelectorAll('.col-block');

/* ============================
            Event Listeners
=============================== */

colSchemeBtn.addEventListener('click', displayHTML);


/* ============================
            Functions
=============================== */


function displayHTML() {

    clearValues();

    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedCol()}&mode=${getColScheme()}&count=5`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach(color => {
                document.querySelector('.hex-value-wrapper').innerHTML += `
                <p>${color.hex.value}</p>
                `
                document.querySelector('.col-block-wrapper').innerHTML += `
                <div style='background-color: ${color.hex.value}'></div>
                `
            });
        })
}

function getColScheme() {
    return colSchemeVal = document.getElementById('col-scheme').value;
}

function getSeedCol() {
    return seedColVal = document.getElementById('seed-col').value.slice(1);
}

function clearValues() {
    document.querySelector('.hex-value-wrapper').innerHTML = '';
    document.querySelector('.col-block-wrapper').innerHTML = '';
}
