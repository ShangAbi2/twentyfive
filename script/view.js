import { startgame, enfunc } from "./controller.js";

renderAll();

function renderAll() {
  const app = document.getElementById("app");
  const btn = document.getElementById("startbtn");
  app.innerHTML = "";

  for (let r = 1; r <= 5; r++) {
    const currdiv = document.createElement("div");
    currdiv.classList.add("row", `row${r}`);
    for (let c = 1; c <= 5; c++) {
      const currcirc = document.createElement("div");
      currcirc.classList.add("circle", `circle-${r}-${c}`); 
      currdiv.appendChild(currcirc);
    }
    app.appendChild(currdiv);
  }

  btn.addEventListener("click", () => startgame());

  
  app.querySelectorAll(".circle").forEach(el => {
    el.addEventListener("click", (evt) => enfunc(evt.currentTarget));
  });
}



