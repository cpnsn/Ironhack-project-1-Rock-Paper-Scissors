let youScore = 0;
let computerScore = 0;
const yodaBtn = document.querySelector("#yoda");
const anakinBtn = document.querySelector("#anakin");
const R2D2Btn = document.querySelector("#R2D2");
const C3POBtn = document.querySelector("#C3PO");
const BB8Btn = document.querySelector("#BB8");
const chewbaccaBtn = document.querySelector("#chewbacca");
const startPage = document.querySelector("#startPage");

const charactersBtn = document.querySelectorAll(".charactersBtn");
const youChoice = document.querySelector("#youChoice");
const allImages = document.querySelectorAll(".charactersImg");
const imgArr = [...allImages].map((img) => {
  return { src: img.src, alt: img.alt };
});

const computerChoice = imgArr;

const winner = document.querySelector("#winner");
const pWinner = document.createElement("p");
const textTie = document.createTextNode("IT'S A TIE!");
const textYouWin = document.createTextNode("You win!");
const textComputerWins = document.createTextNode("Computer wins!");
const scoreYou = document.querySelector("#youResults");
const scoreComputer = document.querySelector("#computerResults");

const play = charactersBtn.forEach((button) => {
  const img = button.querySelector("img");
  const youChoiceImg = document.querySelector(".gameImg");
  button.addEventListener("click", function () {
    youChoiceImg.src = img.src;
    youChoiceImg.alt = img.alt;
    const computerChoiceImg = document.querySelector("#computer-img");
    computerChoiceImg.src = "./images/Question-mark.png";
    setTimeout(() => {
      const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
      computerChoiceImg.src = randomImg.src;
      computerChoiceImg.alt = randomImg.alt;
      checkWinner(youChoiceImg, computerChoiceImg);
    }, "1000");
  });
});

function checkWinner(player, computer) {
  const playerSelection = player.alt;
  const computerSelection = computer.alt;
  console.log(playerSelection, computerSelection);
  winner.innerHTML = "";
  if (playerSelection === computerSelection) {
    winner.append(textTie);
    //YODA
  } else if (
    playerSelection === "Yoda" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Yoda"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Yoda" && computerSelection === "R2D2") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "R2D2" && computerSelection === "Yoda") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "Yoda" && computerSelection === "C3PO") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "C3PO" && computerSelection === "Yoda") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Yoda" && computerSelection === "BB8") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "BB8" && computerSelection === "Yoda") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Yoda" && computerSelection === "Chewbacca") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "Yoda") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Yoda" &&
    computerSelection === "Darth Vader"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Yoda"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
    // ANAKIN
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "R2D2"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "R2D2" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "C3PO"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "C3PO" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "BB8"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "BB8" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Chewbacca"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Chewbacca" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
    // R2D2
  } else if (playerSelection === "R2D2" && computerSelection === "C3PO") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "C3PO" && computerSelection === "R2D2") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "R2D2" && computerSelection === "BB8") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "BB8" && computerSelection === "R2D2") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "R2D2" && computerSelection === "Chewbacca") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "R2D2") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "R2D2" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "R2D2"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
    // C3PO
  } else if (playerSelection === "C3PO" && computerSelection === "BB8") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "BB8" && computerSelection === "C3PO") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "C3PO" && computerSelection === "Chewbacca") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "C3PO") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "C3PO" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "C3PO"
  ) {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
    //BB8
  } else if (playerSelection === "BB8" && computerSelection === "Chewbacca") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "BB8") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "BB8" && computerSelection === "Darth Vader") {
    winner.appendChild(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Darth Vader" && computerSelection === "BB8") {
    winner.append(textComputerWins);
    scoreComputer.textContent = ++computerScore;
    // CHEWBACCA
  } else if (
    playerSelection === "Chewbacca" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textYouWin);
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Chewbacca"
  ) {
    winner.appendChild(textComputerWins);
    scoreComputer.textContent = ++computerScore;
  }
}

startPage.addEventListener("click", () => {
  document.querySelector("#start-page").classList.add("hidden");
  document.querySelector("#gamePage").classList.remove("hidden");
});
