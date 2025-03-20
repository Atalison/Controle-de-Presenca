"use strict";
// declare global {
//   interface Window {
//     gapi: typeof gapi;
//   }
// }
// export async function loadGapi(): Promise<typeof gapi> {
//   return new Promise((resolve, reject) => {
//     if (window.gapi) {
//       resolve(window.gapi);
//     } else {
//       const script = document.createElement("script");
//       script.src = "https://apis.google.com/js/api.js";
//       script.async = true;
//       script.defer = true;
//       script.onload = () => {
//         gapi.load("client:auth2", () => {
//           resolve(gapi);
//         });
//       };
//       script.onerror = (error) => reject(error);
//       document.body.appendChild(script);
//     }
//   });
// }
// async function initGoogleSheets() {
//   const gapi = await loadGapi();
//   console.log(gapi);
//   await gapi.client.init({
//     apiKey: "SUA_API_KEY",
//     clientId: "SEU_CLIENT_ID",
//     discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
//     scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
//   });
//   console.log("Google API carregada!");
// }
// initGoogleSheets();
// function authenticate() {
//   return gapi.auth2
//     .getAuthInstance()
//     .signIn({ scope: "https://www.googleapis.com/auth/spreadsheets" });
// }
// async function getData() {
//   const url = `https://sheets.googleapis.com/v4/spreadsheets/${1931678926}/values/${RANGE}`;
//   const response = await fetch(url);
//   const data = await response.json();
// }
// // function updateData() {
// //   return gapi.client.sheets.spreadsheets.values
// //     .update({
// //       spreadsheetId: "SUA_SHEET_ID",
// //       range: "Página1!A1",
// //       valueInputOption: "RAW",
// //       resource: { values: [["Novo valor!"]] },
// //     })
// //     .then((response) => console.log(response));
// // }
// // gapi.load("client:auth2", () => {
// //   gapi.auth2.init({ client_id: "SEU_CLIENT_ID" });
// // });
// function displayStudents(students: string[][]) {
//   const studentsContainer = document.querySelector(
//     "#students-container"
//   ) as HTMLElement;
//   if (!studentsContainer) {
//     console.error("Elemento #students-container não encontrado.");
//     return;
//   }
//   studentsContainer.innerHTML = "";
//   students.forEach((student) => {
//     const studentElement = document.createElement("div");
//     studentElement.classList.add("student");
//     studentElement.textContent = `Nome: ${student[0]}, Pontos: ${student[1]}`;
//     studentsContainer.appendChild(studentElement);
//   });
// }
// // document.addEventListener("DOMContentLoaded", fetchStudentsData);
