const charactersBtn = document.querySelectorAll(".charactersBtn");
const youChoice = document.querySelector("#youChoice");

let imgArr = [
  "./images/BB8.png",
  "./images/C3PO.png",
  "./images/chewbacca-blue.png",
  "./images/chewbacca-green.png",
  "./images/chewbacca-yellow.png",
  "./images/dark-vador.png",
  "./images/R2D2.png",
  "./images/yoda-gold.png",
  "./images/yoda-green.png",
  "./images/yoda-yellow.png",
  ".images/anakin.png",
];

// class characters {
//   constructor(name) {
//     this.name = name;
//   }
// }

charactersBtn.forEach((button) => {
  const img = button.querySelector("img");
  const youChoiceImg = document.querySelector(".gameImg");
  console.log(youChoiceImg);
  button.addEventListener("click", function () {
    youChoiceImg.src = img.src;
  });
});
