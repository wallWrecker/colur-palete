let column_container = document.getElementsByClassName("columns")[0];

const createChildOfColumn = (text, color) => {
  let myColumn = document.createElement("DIV");
  let classesArray = ["column", "is-1", "px-1", "py-1", "color-house"];
  classesArray.forEach((ele) => myColumn.classList.add(ele));
  myColumn.textContent = text;
  myColumn.style.backgroundColor = color;
  return myColumn;
};

const sayHi = (your_name) => {
  alert(`Hi there! ${your_name}`);
};

export { column_container, createChildOfColumn, sayHi };
