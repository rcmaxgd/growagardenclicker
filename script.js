let clicks = 0;

const clickBtn = document.getElementById("click-button");
const clickCounter = document.getElementById("click-counter");
const rainImage = document.getElementById("rain-image");

clickBtn.addEventListener("click", () => {
  clicks++;
  clickCounter.textContent = "Clicker counter: " + clicks;

  if (clicks === 500) {
    triggerRain();
  }
});

function triggerRain() {
  rainImage.style.display = "block";

  setTimeout(() => {
    rainImage.style.display = "none";
  }, 5000); // 5 seconden regen
}
