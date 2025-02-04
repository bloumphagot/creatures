let creatures = [
  { name: "araignée", correctIndex: 3, images: ["sauterelle.jpeg", "larve.avif", "mouche.jpeg", "araignée.jpg"] },
  { name: "larve", correctIndex: 1, images: ["mouche.jpeg", "larve.avif", "araignée.jpg", "sauterelle.jpeg"] },
  { name: "mouche", correctIndex: 2, images: ["larve.avif", "sauterelle.jpeg", "mouche.jpeg", "araignée.jpg"] }
  // Ajoutez plus de créatures ici
];

let currentRound = 0;
let score = 0;

const creatureName = document.getElementById("creature-name");
const options = document.querySelectorAll(".creature-btn");
const scoreElement = document.getElementById("score");

function startRound() {
  // Tourner entre les créatures
  const currentCreature = creatures[currentRound % creatures.length];

  creatureName.textContent = currentCreature.name;

  options.forEach((option, index) => {
      const img = option.querySelector("img");
      img.src = `palimpseste_sources/${currentCreature.images[index]}`;
      option.dataset.creature = index;
  });
}

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

function handleClick(event) {
  const clickedIndex = parseInt(event.currentTarget.dataset.creature);
  const correctIndex = creatures[currentRound % creatures.length].correctIndex;

  if (clickedIndex === correctIndex) {
      score++;
      scoreElement.textContent = score;
      playSound("palimpseste_sources/victory.mp3");
      currentRound++;
      startRound();
  } else {
      playSound("palimpseste_sources/défaite.mp3");
      alert("Chienneté");
  }
}

function resetGame() {
  currentRound = 0;
  score = 0;
  scoreElement.textContent = score;
  startRound();
}

options.forEach(option => {
  option.addEventListener("click", handleClick);
});

startRound();
