/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let input = document.getElementById("input")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    
    length.textContent = `${input.value} meters = ${(input.value*3.2808).toFixed(3)} feet | ${input.value} feet = ${(input.value*(0.3048)).toFixed(3)} meters`

    volume.textContent = `${input.value} liters = ${(input.value*0.26418).toFixed(3)} gallons | ${input.value} gallons = ${(input.value*3.78541).toFixed(3)} liters`

    mass.textContent = `${input.value} kilos = ${(input.value*2.20462).toFixed(3)} pounds | ${input.value} pounds = ${(input.value*0.453592).toFixed(3)} kilos`

})