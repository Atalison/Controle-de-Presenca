const registerCard = document.querySelector("#register") as HTMLElement;
const studentsCard = document.querySelector("#students") as HTMLElement;
const pointsCard = document.querySelector("#points") as HTMLElement;

registerCard.addEventListener("click", () => {
  window.location.href = "./pages/register.html";
});

studentsCard.addEventListener("click", () => {
  window.location.href = "./pages/students.html";
});

pointsCard.addEventListener("click", () => {
  window.location.href = "./pages/points.html";
});
