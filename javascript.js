let container = document.getElementById("container");
let robotImage = container.querySelector(".robot");

function activateEffect() {
  robotImage.style.filter = "grayscale(100%)";
  container.style.backgroundColor = "royalblue";
  container.style.color = "white";
}

function deactivateEffect() {
  robotImage.style.filter = "grayscale(0%)"; 
  container.style.backgroundColor = "aliceblue";
  container.style.color = "black";
}

container.addEventListener("pointerover", activateEffect);
container.addEventListener("pointerout", deactivateEffect);

let robots = document.querySelectorAll(".robot");