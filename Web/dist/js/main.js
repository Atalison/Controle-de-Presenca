"use strict";
const registerCard = document.querySelector("#register");
const studentsCard = document.querySelector("#students");
const pointsCard = document.querySelector("#points");
registerCard.addEventListener("click", () => {
    window.location.href = "./pages/register.html";
});
studentsCard.addEventListener("click", () => {
    window.location.href = "./pages/students.html";
});
pointsCard.addEventListener("click", () => {
    window.location.href = "./pages/points.html";
});
