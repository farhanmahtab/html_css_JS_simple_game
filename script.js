function randomGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function drawcircle() {
  document.querySelector(
    ".display-box"
  ).innerHTML += `<div class="circle"></div>`;
}
function drawButton() {
  document.querySelector(
    ".display-box"
  ).innerHTML += `<button class="restart-button">
  Play Again
</button>`;
}
function popUp(param) {
  document.getElementById("alert-box").style.display = param;
}
//popUp("flex");

let targetPoints = randomGenerator(25, 50);
let totalAttempt = randomGenerator(1, 25);
let remainingAttempt = totalAttempt;
let level = 1;
let score = 0;
const button = document.querySelector(".play-button");

function gameStart() {
  button.disabled = false;
  document.querySelector(".level").innerHTML = `Level : ${level}`;
  document.querySelector(".target").innerHTML = `Target : ${targetPoints}`;
  document.querySelector(
    ".max-attempt"
  ).innerHTML = `Total attempts: ${totalAttempt}`;
  document.querySelector(
    ".attempt"
  ).innerHTML = `Remaining Attempts : ${totalAttempt}`;
}
gameStart();
popUp("none");
function clicked() {
  popUp("none");
  let pointGenarator = randomGenerator(1, 5);
  let added = false;
  if (score + pointGenarator <= targetPoints) {
    score += pointGenarator;
    added = true;
  }

  remainingAttempt--;
  console.log(
    pointGenarator,
    score,
    remainingAttempt,
    targetPoints,
    totalAttempt
  );
  document.querySelector(".score").innerHTML = `Current Score : ${score}`;
  document.querySelector(".rolled").innerHTML = `Rolled : ${pointGenarator}`;
  document.querySelector(
    ".attempt"
  ).innerHTML = `Remaining Attempts : ${remainingAttempt}`;
  for (let i = 0; i < pointGenarator && added; i++) {
    drawcircle();
  }
  if (score === targetPoints) {
    button.disabled = true;
    winState();
    popUp("flex");
  } else if (remainingAttempt <= 0 && score < targetPoints) {
    button.disabled = true;
    loseState()
    popUp("flex");
  }
}

function winState() {
  //alert("You Won !!");
  document.querySelector(".win-box").innerHTML = `Awesome You Won !`;
  level++;
  document.querySelector(".level-box").innerHTML = `Welcome to level ${level}`;
  restart();
}
function loseState() {
  //alert("Oops..You lost !!");
  document.querySelector(
    ".win-box"
  ).innerHTML = `oops !You lost .Better luck next time`;
  level = 1;
  document.querySelector(".level-box").innerHTML = ` Starting from level ${level}`;
  restart();
}

function restart() {
  popUp("none");
  targetPoints = randomGenerator(25, 50);
  totalAttempt = randomGenerator(0, 25);
  remainingAttempt = totalAttempt;
  score = 0;
  document.querySelector(".score").innerHTML = `Current Score : ${score}`;
  document.querySelector(".rolled").innerHTML = `Rolled : 0`;
  document.querySelector(
    ".attempt"
  ).innerHTML = `Remaining Attempts : ${remainingAttempt}`;
  document.querySelector(".display-box").innerHTML = ``;
  document.querySelector(".level").innerHTML = `Level : ${level}`;
  gameStart();
}
