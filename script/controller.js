import { times } from "./model.js";

let timeoutId;

export function startgame() {
  times.start = Date.now();

  const rndSeconds = 1 + Math.floor(Math.random() * 3); 
  times.bufferMs = rndSeconds * 1000;

  if (timeoutId) clearTimeout(timeoutId);
  document.querySelectorAll(".circle.selected").forEach(el => el.classList.remove("selected"));

  timeoutId = setTimeout(makeCircleYellow, times.bufferMs);
}

function getRandomCircle() {
  const row = 1 + Math.floor(Math.random() * 5);
  const col = 1 + Math.floor(Math.random() * 5);
  return document.querySelector(`.circle-${row}-${col}`);
}

function makeCircleYellow() {
  const selected = getRandomCircle();
  if (selected) selected.classList.add("selected");
}

export function enfunc(targetEl) {
  const selectedCirc = document.querySelector(".circle.selected");
  if (!selectedCirc) {
    return;
  }
  const isWin = selectedCirc === targetEl;
  const resultDiv = document.getElementById("resulttext");
  const failedDiv = document.querySelectorAll("div.failedtext")

  if (isWin) {
    times.end = Date.now();
    const resultMs = times.end - times.start - times.bufferMs;
    const seconds = resultMs / 1000;
    if (failedDiv){
        failedDiv.forEach((e) => e.remove())
    }
    if (resultDiv) {
      resultDiv.innerHTML += `<div> ${seconds.toFixed(3)}s<div>`;
    }
    selectedCirc.classList.remove("selected");
  } else {
        resultDiv.innerHTML += 
        /*html*/ `<div class="failedtext">thats the wrong circle l*w el* pig</div>`
  }
}
