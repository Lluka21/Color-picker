const button = document.getElementById("btn");
const hexCode = document.getElementById("colorcode");

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F333FF",
  "#FF33A2",
  "#33FFF7",
];

function changeBackgroundColor() {
  let hexColor = "#";
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
  color.textContent = randomIndex;
}

button.addEventListener("click", () => {
  document.body.style.backgroundColor = changeBackgroundColor();
});
