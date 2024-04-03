var randomNumber1;
var randomNumber2;

function generateRandomNumbers() {
  randomNumber1 = Math.floor(Math.random() * 6 + 1);
  randomNumber2 = Math.floor(Math.random() * 6 + 1);
}

// generateRandomNumbers();

function loadImages() {
  document
    .querySelector(".img1")
    .setAttribute("src", "/images/dice" + randomNumber1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "/images/dice" + randomNumber2 + ".png");
}

// loadImages();

function changeTextHeading() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "🚩 Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 2 Wins 🚩";
  } else {
    document.querySelector(".container h1").textContent = "Draw";
  }
}

document.querySelector("#rollBtn").onclick = () => {
  generateRandomNumbers();
  loadImages();
  changeTextHeading();
};
