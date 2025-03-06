"use strict";
const mainCard = document.querySelector(".main-card");
const thankUCard = document.querySelector(".popup-thankU");
const btnSubmit = document.querySelector(".submitBtn");
const btnOption = document.querySelectorAll(".btn-option");
const optionSelected = document.querySelector(".optionSelected");
const select = true;

for (const btn of btnOption) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
    } else {
      for (const unselect of btnOption) {
        unselect.classList.remove("selected");
      }
      btn.classList.add("selected");
    }
  });
}

btnSubmit.addEventListener("click", function () {
  const selectedBtn = document.querySelector(".selected");
  if (selectedBtn) {
    mainCard.style.display = "none";
    thankUCard.style.display = "block";
    optionSelected.textContent = optionSelected.textContent.replace(
      "4",
      selectedBtn.textContent
    );
  }
});
