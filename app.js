let palleteText = document.getElementById("pallete-text");
let backgroundDiv = document.getElementById("background-div");
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

// colors.forEach((elem) => {
//   let propName = "color" + counter;
//   collection[propName] = elem;
//   counter++;
// });

function createSelection(color) {
  let p = document.createElement("p");

  let neededClass = ["subtitle", "has-text-centered", "px-2", "py-2"];
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
      console.log(collection[item]);
    } else {
      console.error("Failed to retrieved the Rest.");
      return;
    }
  }
}
addButton.addEventListener("click", function () {
  addToCollection("green");
  loadUpItems();
});
