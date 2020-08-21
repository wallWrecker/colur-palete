let palleteText = document.getElementById("pallete-text");
let backgroundDiv = document.getElementById("background-div");
let textNode = backgroundDiv.style.background;

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
colors.forEach((elem) => {
  let propName = "color" + counter;
  collection[propName] = elem;
  counter++;
});

collection.color1 = "#fff";
console.log(collection);
