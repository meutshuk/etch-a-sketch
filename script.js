const container = document.querySelector(".container");
btnReset = document.querySelector("#reset");
btnClear = document.querySelector("#clear");
btnErase = document.querySelector("#erase");
btnBlack = document.querySelector("#black");

div = document.createElement("div");

btnClear.addEventListener("click", clearMenu);
btnReset.addEventListener("click", resetMenu);
btnErase.addEventListener("click", eraseBox);
btnBlack.addEventListener("click", hoverColor);

// * Functions //

function gridCreate(size) {
  gridSize = size * size;

  // * creates Grid of respective size
  container.style.gridTemplateColumns = `repeat(${size},auto)`;
  container.style.gridTemplateRows = `repeat(${size},auto)`;

  for (let index = 0; index < gridSize; index++) {
    const div = document.createElement("div");
    div.className = "divGrid"; // * Adds class
    container.appendChild(div); // * Appends the newly created div in container
  }
  hoverColor();
}

function hoverColor() {
  divAll = document.querySelectorAll(".divGrid");
  divAll.forEach((divv) => divv.addEventListener("mouseover", changeColor));

  function changeColor(e) {
    this.style.background = "black";
  }
}

function eraseBox() {
  divAll = document.querySelectorAll(".divGrid");
  divAll.forEach((divv) => divv.addEventListener("mouseover", removeColor));

  function removeColor() {
    this.style.background = "none";
  }
}

// * Toggles Reset menu with user input and creates new sketch
function resetMenu() {
  size = parseInt(prompt("Enter the Grid Size"));
  if (size < 0 || size > 100) {
    alert("Size needs to be between 0 and 100");

    resetMenu();
  }
  removeChild();
  gridCreate(size);
}

// * Removes all previous child div created
function removeChild() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// * Clears all the changed Color
function clearMenu() {
  divAll = document.querySelectorAll(".divGrid");
  divAll.forEach((e) => {
    e.style = "background:none";
  });
}

// * Creates grid of 16 * 16
gridCreate(16);
