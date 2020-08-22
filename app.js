let palleteText = document.getElementById("pallete-text");
let backgroundDiv = document.getElementById("background-div");
let codeInput = document.getElementById("code-input");
let addButton = document.getElementById("add-button");
// let textNode = backgroundDiv.style.background;

let palleteContainer = document.getElementById("pallete-container");
let colors = ["cffffe", "f9f7d9", "fce2ce", "ffc1f3"];

// let x = setInterval(() => {
//   let random = Math.floor(Math.random() * Math.floor(colors.length));
//   setBackgroundColor(backgroundDiv, colors[random]);
//   palleteText.innerHTML = "#" + colors[random];
//   console.log(colors[random]);
// }, 1000);

function setBackgroundColor(element, color) {
  element.style.background = "#" + color;
  return;
}

let collection = {};
let counter = 0;

codeInput.value = "Hi There!";
// colors.forEach((elem) => {
//   let propName = "color" + counter;
//   collection[propName] = elem;
//   counter++;
// });

function createSelection(color) {
  let p = document.createElement("p");

  let neededClass = ["has-text-centered", "px-1", "py-1"];
  neededClass.forEach((ele) => {
    p.classList.add(ele);
  });

  p.addEventListener("click", function () {
    backgroundDiv.style.background = color;
  });

  p.innerHTML = color;
  return p;
}

function addToCollection(color) {
  let propName = "color" + counter;

  collection[propName] = color;
  counter++;

  console.log(propName);
}

function loadUpItems() {
  for (let item in collection) {
    if (collection.hasOwnProperty(item)) {
      palleteContainer.appendChild(createSelection(collection[item]));
    } else {
      console.error("Failed to retrieved the Rest.");
      return;
    }
  }
}

function loadLastItem() {
  let lastItem = Object.keys(collection)[Object.keys(collection).length - 1];
  palleteContainer.appendChild(createSelection(collection[lastItem]));
}

addButton.addEventListener("click", function () {
  addToCollection(codeInput.value + " " + counter);
  loadLastItem();
});

/*Tomorrow Task: Reviewing Input Capability */

// addButton.addEventListener("dblclick", function () {
//   loadLastItem();
// });
