/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//get the warning div w/ the DOM

const warningDiv = document.querySelector("#warningDiv");

//arrow function to print the warning message and switch the class so the warningDiv can display and be red

const showWarningDiv = message => {
  warningDiv.classList.remove("d-none");
  warningDiv.classList.add("myStyle");
  warningDiv.innerHTML += message;
};

// a bunch of const defintions below

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

//create big ass function that is submit button linstener

getSubmitButton.addEventListener("click", e => {
  e.preventDefault();
  document.querySelectorAll(".warning").forEach(element => {
    element.classList.remove("warning");
    warningDiv.innerHTML = "";
    warningDiv.classList.remove("myStyle");
    radioSpan.classList.remove("warningBorder");
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
    message = "You must input an amount! ";
    showWarningDiv(message);
  }
  if (fname.value.length < 2) {
    fname.classList.add("warning");
    message = "A first name must have at least 2 characters, ";
    showWarningDiv(message);
  }
  if (lname.value.length < 1) {
    lname.classList.add("warning");
    message = "Last name cannot be empty! ";
    showWarningDiv(message);
  }
  if (city.value == "") {
    city.classList.add("warning");
    message = "You must write in a city, ";
    showWarningDiv(message);
  }
  if (state.value == "Pick a state") {
    state.classList.add("warning");
    message = "You must choose a state, ";
    showWarningDiv(message);
  }
  if (zip.value.length != 5) {
    zip.classList.add("warning");
    message = "Zip must be 5 digits, ";
    showWarningDiv(message);
  }
  if (
    radio[0].checked == false &&
    radio[1].checked == false &&
    radio[2].checked == false &&
    radio[3].checked == false
  ) {
    radioSpan.classList.add("warningBorder");
    message = "You must choose a card type, ";
    showWarningDiv(message);
  } else {
    console.log("you did it!");
  }
});
