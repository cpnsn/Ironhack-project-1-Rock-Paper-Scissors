let youScore = 0;
let computerScore = 0;
const yodaBtn = document.querySelector("#yoda");
const anakinBtn = document.querySelector("#anakin");
const R2D2Btn = document.querySelector("#R2D2");
const C3POBtn = document.querySelector("#C3PO");
const BB8Btn = document.querySelector("#BB8");
const chewbaccaBtn = document.querySelector("#chewbacca");
const playerChoice = document.querySelectorAll("charactersBtn");

const charactersBtn = document.querySelectorAll(".charactersBtn");
const youChoice = document.querySelector("#youChoice");
const allImages = document.querySelectorAll(".charactersImg");
const imgArr = [...allImages].map((img) => {
  return { src: img.src, alt: img.alt };
});

const computerChoice = imgArr;

const play = charactersBtn.forEach((button) => {
  const img = button.querySelector("img");
  const youChoiceImg = document.querySelector(".gameImg");
  button.addEventListener("click", function () {
    youChoiceImg.src = img.src;
    youChoiceImg.alt = img.alt;

    setTimeout(() => {
      const computerChoiceImg = document.querySelector("#computer-img");

      const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
      computerChoiceImg.src = randomImg.src;
      computerChoiceImg.alt = randomImg.alt;
      checkWinner(youChoiceImg, computerChoiceImg);
    }, "1000");
  });
});

// class Character {
//   constructor() {
//     this.character = character;
//   }
// }

function checkWinner(player, computer) {
  const playerSelection = player.alt;
  const computerSelection = computer.alt;
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    console.log(`It's a tie!`);
    //YODA
  } else if (
    playerSelection === "Yoda" &&
    computerSelection === "Anakin Skywalker"
  ) {
    console.log("Computer wins!");
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Yoda"
  ) {
    console.log("You win!");
  } else if (playerSelection === "Yoda" && computerSelection === "R2D2") {
    console.log("You win!");
  } else if (playerSelection === "R2D2" && computerSelection === "Yoda") {
    console.log("Computer wins!");
  } else if (playerSelection === "Yoda" && computerSelection === "C3PO") {
    console.log("Computer wins!");
  } else if (playerSelection === "C3PO" && computerSelection === "Yoda") {
    console.log("You win!");
  } else if (playerSelection === "Yoda" && computerSelection === "BB8") {
    console.log("Computer wins!");
  } else if (playerSelection === "BB8" && computerSelection === "Yoda") {
    console.log("You win!");
  } else if (playerSelection === "Yoda" && computerSelection === "Chewbacca") {
    console.log("You win!");
  } else if (playerSelection === "Chewbacca" && computerSelection === "Yoda") {
    console.log("Computer wins!");
  } else if (
    playerSelection === "Yoda" &&
    computerSelection === "Darth Vader"
  ) {
    console.log("You win!");
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Yoda"
  ) {
    console.log("Computer wins!");
    // ANAKIN
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "R2D2"
  ) {
    console.log("Computer wins!");
  } else if (
    playerSelection === "R2D2" &&
    computerSelection === "Anakin Skywalker"
  ) {
    console.log("You win!");
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "C3PO"
  ) {
    console.log("You win!");
  } else if (
    playerSelection === "C3PO" &&
    computerSelection === "Anakin Skywalker"
  ) {
    console.log("Computer wins!");
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "BB8"
  ) {
    console.log("Computer wins!");
  } else if (
    playerSelection === "BB8" &&
    computerSelection === "Anakin Skywalker"
  ) {
    console.log("You win!");
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Chewbacca"
  ) {
    console.log("You win!");
  } else if (
    playerSelection === "Chewbacca" &&
    computerSelection === "Anakin Skywalker"
  ) {
    console.log("Computer wins!");
  } else if (
    playerSelection === "Anakin Skywalker" &&
    computerSelection === "Darth Vader"
  ) {
    console.log("Computer wins!");
  } else if (
    playerSelection === "Darth Vader" &&
    computerSelection === "Anakin Skywalker"
  ) {
    console.log("You win!");
  }
}
