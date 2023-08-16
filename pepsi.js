"use strict";
// images and background changes

const heroImg = document.querySelector("#hero-img");
const body = document.querySelector("body");

const firstIcon = document.querySelector("#first");
const secondIcon = document.querySelector("#second");
const thirdIcon = document.querySelector("#third");
const forthIcon = document.querySelector("#fourth");
const fifthIcon = document.querySelector("#fifth");

// function iconChange(color, image, backgroundColor) {
//   body.style.backgroundColor = color;
//   heroImg.src = image;
//   navy.style.backgroundColor = backgroundColor;
// }

firstIcon.addEventListener("click", () => {
  body.style.backgroundColor = "#0065c3";
  heroImg.src = firstIcon.src;
});

secondIcon.addEventListener("click", () => {
  body.style.backgroundColor = "orange";
  heroImg.src = secondIcon.src;
  navy.style.backgroundColor = "orange";
});

thirdIcon.addEventListener("click", () => {
  body.style.backgroundColor = "grey";
  heroImg.src = thirdIcon.src;
  navy.style.backgroundColor = "grey";
});
forthIcon.addEventListener("click", () => {
  body.style.backgroundColor = "#D70040";
  heroImg.src = forthIcon.src;
  navy.style.backgroundColor = "#D70040";
});

fifthIcon.addEventListener("click", () => {
  body.style.backgroundColor = "#daa520";
  heroImg.src = fifthIcon.src;
  navy.style.backgroundColor = "#DAA520";
});

// Menu buttons on mobile view

const menuBtn = document.getElementById("menu-btn");

const exitBtn = document.getElementById("exit-btn");

const navy = document.querySelector("#navy");

menuBtn.addEventListener("click", function () {
  navy.classList.toggle("activate");
});

exitBtn.addEventListener("click", () => {
  navy.classList.remove("activate");
});
