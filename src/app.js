/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

const getSubmitButton = document.querySelector("#submitButton");

const getForm = document.querySelector("#topForm");

const cardnum = document.querySelector("#cardnum");
const cvcnum = document.querySelector("#cvcnum");
const amount = document.querySelector("#amount");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const city = document.querySelector("#city");
const state = document.querySelector("#inputState");

getSubmitButton.addEventListener("click", e => {
  e.preventDefault();
  document.querySelectorAll(".warning").forEach(element => {
    element.classList.remove("warning");
  });
  if (cardnum.value.length != 16) {
    cardnum.classList.add("warning");
    console.log("Credit number must be 16 digits");
  }
  if (cvcnum.value.length != 3) {
    cvcnum.classList.add("warning");
    console.log("CVC number must be 3 digits");
  }
  if (amount.value == "") {
    amount.classList.add("warning");
    console.log("You must input a value!");
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
});

// const submit = e => {
//   console.log("Submit button clicked");
//   e.preventDefault();
// };

// var getForm = document.querySelector("#topForm");
// if ((getForm.element.className = "was-validated")) {
//   var element = document.querySelector("#warningDiv");
//   element.classList.add("mystyle");
// }
