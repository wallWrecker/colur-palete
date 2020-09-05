let column_container = document.getElementsByClassName("columns")[0];

const createChildOfColumn = (text, color) => {
  let myColumn = document.createElement("DIV");
  let mySmallTag = document.createElement('small');
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

  //append all needed classes to the newly created element.
  classesArray.forEach((ele) => myColumn.classList.add(ele));
  mySmallTag.textContent = "#" + text;
  myColumn.appendChild(mySmallTag)
  myColumn.addEventListener("mouseover", function () {
  	myColumn.style.backgroundColor = "#" + color;
    mySmallTag.style.color = "grey";
    mySmallTag.style.fontWeight = "bold";
    mySmallTag.style.textShadow = "1px 1px 3px #f3f3f3";
  });

  myColumn.addEventListener("mouseout", function () {
    myColumn.style.backgroundColor = "";
  });
  return myColumn;
};

const createAddButton = () => {
  let myColumn = document.createElement("div");
};

export { column_container, createChildOfColumn };
