let column_container = document.getElementsByClassName("columns")[0];

const createChildOfColumn = (text, color) => {
  let myColumn = document.createElement("DIV");
  let classesArray = [
    "column",
    "color_house",
    "is-1",
    "px-3",
    "py-3",
    "mx-1",
    "my-1",
    "has-text-centered",
  ];
  //append all needed class to the newly created element.
  classesArray.forEach((ele) => myColumn.classList.add(ele));
  myColumn.textContent = text;
  myColumn.addEventListener("mouseover", function () {
    myColumn.style.backgroundColor = "#" + color;
  });
  myColumn.addEventListener("mouseout", function () {
    myColumn.style.backgroundColor = "";
  });
  return myColumn;
};

export { column_container, createChildOfColumn };
