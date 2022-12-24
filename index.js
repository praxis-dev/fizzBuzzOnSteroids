const form = document.querySelector("form");
let starting = form.elements["startingValue"];
let ending = form.elements["endingValue"];
let fizz = form.elements["fizzValue"];
let buzz = form.elements["buzzValue"];
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  generateDivs(startingValue, endingValue);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  clearAllDivs();
});

function clearAllDivs() {
  console.log("clearing all divs");
  const divs = document.querySelectorAll(".div");
  divs.forEach((div) => {
    div.remove();
  });
}

function generateDivs(starting, ending) {
  for (let i = starting.value; i <= ending.value; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    document.querySelector("main").appendChild(div);
  }
  setIdforEachDiv();
  divFizzBuzz(fizz, buzz);
}

function setIdforEachDiv() {
  const divs = document.querySelectorAll(".div");
  divs.forEach((div, index) => {
    div.id = `myid${index + 1}`;
  });
}

function divFizzBuzz(fizz, buzz) {
  const divs = document.querySelectorAll(".div");
  console.log(divs);
  for (let i = 1; i <= divs.length; i++) {
    const div = document.getElementById(`myid${i}`);
    if (i % fizz.value === 0 && i % buzz.value === 0) {
      div.innerText = "FizzBuzz";
      div.classList.add("dividesEvenlyByThreeAndFive");
    } else if (i % fizz.value === 0) {
      div.innerText = "Fizz";
      div.classList.add("dividesEvenlyByThreeOnly");
    } else if (i % buzz.value === 0) {
      div.innerText = "Buzz";
      div.classList.add("dividesEvenlyByFiveOnly");
    } else {
      div.innerText = i;
      div.classList.add("doesNotDivideEvenlyByThreeOrFive");
    }
  }
}
