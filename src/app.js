/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

const warningDiv = document.querySelector("#warningDiv");

const showWarningDiv = message => {
  warningDiv.classList.remove("d-none");
  warningDiv.classList.add("myStyle");
  warningDiv.innerHTML += message;
};

const getSubmitButton = document.querySelector("#submitButton");

const cardnum = document.querySelector("#cardnum");
const cvcnum = document.querySelector("#cvcnum");
const amount = document.querySelector("#amount");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const city = document.querySelector("#city");
const state = document.querySelector("#inputState");
const zip = document.querySelector("#zip");
const radio = document.querySelectorAll(".radio");
const radioSpan = document.querySelector("#radioSpan");
var message = "";

getSubmitButton.addEventListener("click", e => {
  e.preventDefault();
  document.querySelectorAll(".warning").forEach(element => {
    element.classList.remove("warning");
  });
  if (cardnum.value.length != 16) {
    cardnum.classList.add("warning");
    message = "Credit card number must be 16 digits, ";
    showWarningDiv(message);
  }
  if (cvcnum.value.length != 3) {
    cvcnum.classList.add("warning");
    message = "CVC number must be 3 digits, ";
    showWarningDiv(message);
  }
  if (amount.value < 1) {
    amount.classList.add("warning");
    console.log("You must input an amount!");
  }
  if (fname.value.length < 2) {
    fname.classList.add("warning");
    console.log("A first name must have at least 2 characters");
  }
  if (lname.value.length < 1) {
    lname.classList.add("warning");
    console.log("Last name cannot be empty!");
  }
  if (city.value == "") {
    city.classList.add("warning");
    console.log("You must write in a city");
  }
  if (state.value == "Pick a state") {
    state.classList.add("warning");
    console.log("You must choose a state");
  }
  if (zip.value.length != 5) {
    zip.classList.add("warning");
    console.log("Zip must be 5 digits");
  }
  if (
    radio[0].checked == false &&
    radio[1].checked == false &&
    radio[2].checked == false &&
    radio[3].checked == false
  ) {
    radioSpan.classList.add("warningBorder");
    console.log("You must choose a card type");
  }
});
