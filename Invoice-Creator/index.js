
/* ============================
 Variables
=============================== */

const totalAmt = document.getElementById('total-amount');
const resetBtn = document.getElementById('email-invoice');
const lineItems = document.getElementById('list-of-items');
/******** Add buttons ************/
const washBtn = document.getElementById('wash-btn');
const mowBtn = document.getElementById('mow-btn');
const weedsBtn = document.getElementById('weeds-btn');

let servicesRequested = [];

let availableItems = [
    { id: 'wash-car', desc: 'Wash Car', price: 10 },
    { id: 'mow-lawn', desc: 'Mow Lawn', price: 20 },
    { id: 'pull-weeds', desc: 'Pull Weeds', price: 30 },
];



/* ============================
 GLOBAL FUNCTIONS
=============================== */


/******** Generate invoice line items ************/
function renderServices() {
    let service = '';
    let finalTotal = 0;
    for (let i = 0; i < servicesRequested.length; i++) {
        for (let j = 0; j < availableItems.length; j++) {
            if (servicesRequested[i] == availableItems[j].desc) {
                service += `
                <div class="line-item">
                    <p class="item"> ${availableItems[j].desc}</p>
                    <button id="${availableItems[j].id}" class="remove-button">Remove</button>
                    <p class="price"><span class="currency">$</span> ${availableItems[j].price}</p>
                </div>
                `;
            }
            // calculation for the total amount
            if (servicesRequested[i] == availableItems[j].desc) {
                finalTotal += Number(availableItems[j].price);
            }
        }
    }
    lineItems.innerHTML = service;
    totalAmt.innerHTML = `$${finalTotal}`;
}


/******** Send/reset invoice ************/
function resetInvoice() {
    totalAmt.innerText = '$0';
    lineItems.innerText = null;
    servicesRequested = [];
}



/* ============================
 EVENT LISTENERS
=============================== */


/******** Add invoice items buttons ************/
washBtn.addEventListener('click', function (event) {
    event.preventDefault;
    if (!servicesRequested.includes('Wash Car')) {
        servicesRequested.push('Wash Car');
        renderServices();
    }
})

mowBtn.addEventListener('click', function (event) {
    event.preventDefault;
    if (!servicesRequested.includes('Mow Lawn')) {
        servicesRequested.push('Mow Lawn');
        renderServices();
    }
})

weedsBtn.addEventListener('click', function (event) {
    event.preventDefault;
    if (!servicesRequested.includes('Pull Weeds')) {
        servicesRequested.push('Pull Weeds');
        renderServices();
    }
})

/******** Remove buttons ************/
document.body.addEventListener('click', function (event) {
    if (event.target.id == 'wash-car') {
        let itemIndex = servicesRequested.indexOf('Wash Car');
        servicesRequested.splice(itemIndex, 1);
        renderServices();
    }
})

document.body.addEventListener('click', function (event) {
    if (event.target.id == 'mow-lawn') {
        let itemIndex = servicesRequested.indexOf('Mow Lawn');
        servicesRequested.splice(itemIndex, 1);
        renderServices();
    }
})

document.body.addEventListener('click', function (event) {
    if (event.target.id == 'pull-weeds') {
        let itemIndex = servicesRequested.indexOf('Pull weeds');
        servicesRequested.splice(itemIndex, 1);
        renderServices();
    }
})

/******** Reset invoice button ************/
resetBtn.addEventListener('click', function () {
    resetInvoice();
})