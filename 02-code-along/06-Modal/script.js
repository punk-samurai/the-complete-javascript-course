"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

console.log(modal);

const openModalHandler = function () {
  console.log("Button clicked.");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalHandler = function () {
  modal.classList.add("hidden");
  overlay.c lassList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModalHandler);

btnCloseModal.addEventListener("click", closeModalHandler);
overlay.addEventListener("click", closeModalHandler);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalHandler();
  }
});
