let container = document.getElementById("container");
let robotImage = container.querySelector(".robot");

function activateEffect() {
  robotImage.style.filter = "grayscale(100%)";
}

function deactivateEffect() {
  robotImage.style.filter = "grayscale(0%)"; 
}

container.addEventListener("pointerover", activateEffect);
container.addEventListener("pointerout", deactivateEffect);

let robots = document.querySelectorAll(".robot");
