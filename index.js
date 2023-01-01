/*jshint esversion: 6 */

const form = document.querySelector("form");
let starting = form.elements.startingValue;
let ending = form.elements.endingValue;
let fizz = form.elements.fizzValue;
let buzz = form.elements.buzzValue;
const button = document.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  generateDivs(starting, ending, fizz, buzz);
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  clearAllDivs();
});

function clearAllDivs() {
  const divs = document.querySelectorAll(".div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].remove();
  }
}

function generateDivs(starting, ending, fizz, buzz) {
  if (ending.value < starting.value) {
    alert("Финальное значение должно быть больше начального");
  } else {
    if (document.querySelectorAll(".div").length > 0) {
      clearAllDivs();
    }
    for (let i = starting.value; i <= ending.value; i++) {
      const div = document.createElement("div");
      div.classList.add("div");
      div.id = `myid${i}`;
      if (i % fizz.value === 0 && i % buzz.value === 0) {
        div.innerText = "FizzBuzz";
        div.classList.add("FizzBuzz");
      } else if (i % fizz.value === 0) {
        div.innerText = "Fizz";
        div.classList.add("Fizz");
      } else if (i % buzz.value === 0) {
        div.innerText = "Buzz";
        div.classList.add("Buzz");
      } else {
        div.innerText = i;
        div.classList.add("notFizzNorBuzzAndNotFizzBuzz");
      }

      document.querySelector("main").appendChild(div);
    }
  }
}
