const measurement = 20 

function unitConversion() {
// Conversions from Meters to feet, liters to gallons, kilograms to pounds and vice versa
const feet = (measurement * 3.28084).toFixed(3)
const meters = (measurement * 0.3048).toFixed(3)
const gallons = (measurement * 0.264172).toFixed(3)
const liters = (measurement * 3.78541).toFixed(3)
const kilograms = (measurement * 0.453592).toFixed(3)
const pounds = (measurement * 2.20462).toFixed(3)

// display Length strings
const meterUnit = `${measurement} meters = ${feet} feet | ${measurement} feet = ${meters} meters` 
const volumeUnit = `${measurement} + litres = + ${gallons} + gallons | + ${measurement} + gallons = + ${liters} + litres` 
const massUnit = `${measurement} + kilograms = + ${pounds} + pounds | + ${measurement} + pounds = + ${kilograms} + kilograms` 

    document.getElementById("lengthResult").textContent = meterUnit
    document.getElementById("volumeResult").textContent = volumeUnit
    document.getElementById("massResult").textContent = massUnit
    document.getElementById("metricUnit").textContent = measurement
}

unitConversion()

