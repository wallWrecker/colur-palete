let palleteText = document.getElementById("pallete-text");
let backgroundDiv = document.getElementById("background-div");
let codeInput = document.getElementById("code-input");
let addButton = document.getElementById("add-button");
let sample = document.getElementById("display-button");

let palleteContainer = document.getElementById("pallete-container");
let colors = ["cffffe", "f9f7d9", "fce2ce", "ffc1f3", "5F4B8BFF", "E69A8DFF"];

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

let collection = { a: "Red", b: "Blue" };

let counter = Object.keys(collection).length;

// colors.forEach((elem) => {
//   let propName = "color" + counter;
//   collection[propName] = elem;
//   counter++;
// });

function addToCollection(color) {
  let propName = "color" + counter;

  collection[propName] = color;
  counter++;
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
  // let lastItem = Object.keys(collection)[Object.keys(collection).length - 1];
  // palleteContainer.appendChild(createSelection(collection[lastItem]));
}

// addButton.addEventListener("click", function () {
//   addToCollection(codeInput.value);
//   loadLastItem();
//   console.log(collection);
// });

// addButton.addEventListener("dblclick", function () {
//   console.log(collection);
// });

// Joke Snippets............
// let key = Object.keys(collection).length;
// if (key > 5) {
//   throw "Congratulations!";
// } else {
//   throw "Add more item on the collection!";
//   console.log(`Current: ${Object.keys(collection).length}`);
// }

import {
  column_container,
  createChildOfColumn,
} from "./my_components/generate_color_selection.js";

colors.forEach((ele) => {
  column_container.appendChild(createChildOfColumn(ele, ele));
});
