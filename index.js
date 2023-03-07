/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;
const inputElement = document.getElementById("input-el");
const buttonElement = document.getElementById("button-el");
const lengthElement = document.getElementById("length-el");
const volumeElement = document.getElementById("volume-el");
const massElement = document.getElementById("mass-el");

buttonElement.addEventListener("click", function () {
  const inputValue = inputElement.value;
  lengthElement.innerText = `${inputValue} meters = ${(
    inputValue * meterToFeet
  ).toFixed(3)} feet | ${inputValue} feet = ${(
    inputValue / meterToFeet
  ).toFixed(3)} meters`;
  volumeElement.innerText = `${inputValue} liters = ${(
    inputValue * literToGallon
  ).toFixed(3)} gallons | ${inputValue} gallons = ${(
    inputValue / literToGallon
  ).toFixed(3)} liters`;
  massElement.innerText = `${inputValue} kilos = ${(
    inputValue * kiloToPound
  ).toFixed(3)} pounds | ${inputValue} pounds = ${(
    inputValue / kiloToPound
  ).toFixed(3)} kilos`;
});
