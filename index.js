let openDropDownBtn = document.querySelector(".openDropDownBtn");
let closeDropDownBtn = document.querySelector(".closeDropDownBtn");

let dropDownMenu = document.querySelector(".dropDownMenu");

let eventHandler = function () {
    closeDropDownBtn.classList.toggle("invisible");
    openDropDownBtn.classList.toggle("invisible");
    dropDownMenu.classList.toggle("invisible");
}
openDropDownBtn.addEventListener("click", eventHandler);

closeDropDownBtn.addEventListener("click", eventHandler);
