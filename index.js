let openSideMenuBtn = document.querySelector(".openSideMenuBtn");
let closeSideMenuBtn = document.querySelector(".closeSideMenuBtn");

let sideMenu = document.querySelector(".sideMenu");

let eventHandler = function () {
    closeSideMenuBtn.classList.toggle("invisible");
    openSideMenuBtn.classList.toggle("invisible");
    sideMenu.classList.toggle("invisible");
}
openSideMenuBtn.addEventListener("click", eventHandler);

closeSideMenuBtn.addEventListener("click", eventHandler);
