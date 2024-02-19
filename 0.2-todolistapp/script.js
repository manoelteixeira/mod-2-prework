const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Functions
function addTask() {
  if (inputBox.value == "") {
    alert("You don't need to add nothing to the TO-DO LIST");
    // alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("todo-data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("todo-data");
}

// End Functions

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

showTask();
