let tieAudio = new Audio("./Sounds/Tie medium-2.mp3");
let R2D2SadAudio = new Audio("./Sounds/Sad R2D2.mp3");
let R2D2WinAudio = new Audio("./Sounds/Laughing R2D2.mp3");
let YodaSadAudio = new Audio("./Sounds/Yoda retreat.mp3");
let YodaWinAudio = new Audio("./Sounds/Yoda hmmmm.mp3");
let ChewSadAudio = new Audio("./Sounds/Sad Chewbacca.mp3");
let ChewWinAudio = new Audio("./Sounds/Win Chew.mp3");
let C3POWin = new Audio("./Sounds/ C3PO they-think-im-god.mp3");
let C3PODoomed = new Audio("./Sounds/C3PO doomed.mp3");
let C3POMadness = new Audio("./Sounds/C3PO madness.mp3");
let C3PORude = new Audio("./Sounds/C3PO how-rude.mp3");
let VaderWin = new Audio("./Sounds/Vador treated-unfairly.mp3");
let VaderLose = new Audio("./Sounds/Vador the-force-is-strong.mp3");
let VaderWhat = new Audio("./Sounds/Vador what.mp3");
let AnakinWin = new Audio("./Sounds/Anakin force-be-w-you.mp3");
let AnakinWhat = new Audio("./Sounds/Anakin what-i-done.mp3");
let AnakinUnfair = new Audio("./Sounds/Anakin unfair.mp3");
let BB8Win = new Audio("./Sounds/BB8 - Win.mp3");
let BB8Sad = new Audio("./Sounds/BB8 - Sad.mp3");

let youScore = 0;
let computerScore = 0;

const startPage = document.querySelector(".startPage");

const charactersBtn = document.querySelectorAll(".charactersBtn");
const youChoice = document.querySelector("#youChoice");
const allImages = document.querySelectorAll(".charactersImg");
const modal = document.getElementById("modal");
const buttonEndGame = document.querySelector("dialogBtn");
const endGameMessage = document.getElementById("end-game-message");
const imgArr = [...allImages].map((img) => {
  return { src: img.src, alt: img.alt };
});

const computerChoice = imgArr;

const winner = document.querySelector("#winner");
const textTie = document.createTextNode("IT'S A TIE!");
const textYouWin = document.createTextNode("You win!");
const textComputerWins = document.createTextNode("Computer wins!");
const scoreYou = document.querySelector("#youResults");
const scoreComputer = document.querySelector("#computerResults");

// __________________________________________________________________________________________________

// Select player, display it while replacing question mark
const play = charactersBtn.forEach((button) => {
  const img = button.querySelector("img");
  const youChoiceImg = document.querySelector(".gameImg");
  button.addEventListener("click", function () {
    youChoiceImg.src = img.src;
    youChoiceImg.alt = img.alt;
    const computerChoiceImg = document.querySelector("#computer-img");
    computerChoiceImg.src = "./images/Question-mark.png";
    // Ramdom choice of player for computer, display choice while replacing question mark
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

  // TIE____________________________________________________________________
  if (playerSelection === computerSelection) {
    winner.append(textTie);
    tieAudio.play();

    // YODA__________________________________________________________________
  } else if (
    playerSelection === "Yoda" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.append(textComputerWins);
    YodaSadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Yoda"
  ) {
    winner.appendChild(textYouWin);
    AnakinWin.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Yoda" && computerSelection === "R2D2") {
    winner.appendChild(textYouWin);
    YodaWinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "R2D2" && computerSelection === "Yoda") {
    winner.append(textComputerWins);
    R2D2SadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "Yoda" && computerSelection === "C3PO") {
    winner.append(textComputerWins);
    YodaSadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "C3PO" && computerSelection === "Yoda") {
    winner.appendChild(textYouWin);
    C3POWin.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Yoda" && computerSelection === "BB8") {
    winner.append(textComputerWins);
    YodaSadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "BB8" && computerSelection === "Yoda") {
    winner.appendChild(textYouWin);
    BB8Win.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Yoda" && computerSelection === "Chewbacca") {
    winner.appendChild(textYouWin);
    YodaWinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "Yoda") {
    winner.append(textComputerWins);
    ChewSadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Yoda" &&
    computerSelection === "Darth Vader"
  ) {
    winner.appendChild(textYouWin);
    YodaWinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Yoda"
  ) {
    winner.append(textComputerWins);
    VaderLose.play();
    scoreComputer.textContent = ++computerScore;

    // ANAKIN__________________________________________________________________
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "R2D2"
  ) {
    winner.append(textComputerWins);
    AnakinUnfair.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "R2D2" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.appendChild(textYouWin);
    R2D2WinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "C3PO"
  ) {
    winner.appendChild(textYouWin);
    AnakinWin.play();
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "C3PO" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.append(textComputerWins);
    C3PORude.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "BB8"
  ) {
    winner.append(textComputerWins);
    AnakinUnfair.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "BB8" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.appendChild(textYouWin);
    BB8Win.play();
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Chewbacca"
  ) {
    winner.appendChild(textYouWin);
    AnakinWin.play();
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Chewbacca" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.append(textComputerWins);
    ChewSadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textComputerWins);
    AnakinWhat.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Anakin Skywalker"
  ) {
    winner.appendChild(textYouWin);
    VaderWin.play();
    scoreYou.textContent = ++youScore;

    // R2D2_________________________________________________________________________________
  } else if (playerSelection === "R2D2" && computerSelection === "C3PO") {
    winner.appendChild(textYouWin);
    R2D2WinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "C3PO" && computerSelection === "R2D2") {
    winner.append(textComputerWins);
    C3POMadness.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "R2D2" && computerSelection === "BB8") {
    winner.appendChild(textYouWin);
    R2D2WinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "BB8" && computerSelection === "R2D2") {
    winner.append(textComputerWins);
    BB8Sad.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "R2D2" && computerSelection === "Chewbacca") {
    winner.append(textComputerWins);
    R2D2SadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "R2D2") {
    winner.appendChild(textYouWin);
    ChewWinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "R2D2" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textComputerWins);
    R2D2SadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "R2D2"
  ) {
    winner.appendChild(textYouWin);
    VaderWin.play();
    scoreYou.textContent = ++youScore;

    // C3PO_____________________________________________________________________________
  } else if (playerSelection === "C3PO" && computerSelection === "BB8") {
    winner.appendChild(textYouWin);
    C3POWin.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "BB8" && computerSelection === "C3PO") {
    winner.append(textComputerWins);
    BB8Sad.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "C3PO" && computerSelection === "Chewbacca") {
    winner.appendChild(textYouWin);
    C3POWin.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "C3PO") {
    winner.append(textComputerWins);
    ChewSadAudio.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "C3PO" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textComputerWins);
    C3PODoomed.play();
    scoreComputer.textContent = ++computerScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "C3PO"
  ) {
    winner.appendChild(textYouWin);
    VaderWin.play();
    scoreYou.textContent = ++youScore;

    //BB8_____________________________________________________________________________________
  } else if (playerSelection === "BB8" && computerSelection === "Chewbacca") {
    winner.append(textComputerWins);
    BB8Sad.play();
    scoreComputer.textContent = ++computerScore;
  } else if (playerSelection === "Chewbacca" && computerSelection === "BB8") {
    winner.appendChild(textYouWin);
    ChewWinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "BB8" && computerSelection === "Darth Vader") {
    winner.appendChild(textYouWin);
    BB8Win.play();
    scoreYou.textContent = ++youScore;
  } else if (playerSelection === "Darth Vader" && computerSelection === "BB8") {
    winner.append(textComputerWins);
    VaderWhat.play();
    scoreComputer.textContent = ++computerScore;

    // CHEWBACCA_______________________________________________________________
  } else if (
    playerSelection === "Chewbacca" &&
    computerSelection === "Darth Vader"
  ) {
    winner.append(textYouWin);
    ChewWinAudio.play();
    scoreYou.textContent = ++youScore;
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Chewbacca"
  ) {
    winner.appendChild(textComputerWins);
    VaderWhat.play();
    scoreComputer.textContent = ++computerScore;
  }
  if (scoreComputer.textContent == 10) {
    endGameMessage.textContent = "Computer won, GAME OVER!";
    modal.classList.add("lost");
    modal.showModal();
    console.log("Computer won, game over!");
  } else if (scoreYou.textContent == 10) {
    endGameMessage.textContent = "Congrats, YOU WON!";
    modal.classList.add("win");
    modal.showModal();
    console.log("Congrats, you won!");
  }
}

// START PAGE
startPage.addEventListener("click", () => {
  document.querySelector(".start-page").classList.add("hidden");
  document.querySelector("#gamePage").classList.remove("hidden");
  document.querySelector("#scrollerSection").classList.remove("hidden");
});
