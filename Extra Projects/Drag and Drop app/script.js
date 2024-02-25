let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let listItems = document.getElementsByClassName("list");

// for (item of listItems) {
//   item.addEventListener("dragstart", function (e) {
//     let selected = e.target;

//     rightBox.addEventListener("dragover", function (e) {
//       e.preventDefault();
//     });

//     rightBox.addEventListener("drop", function (e) {
//       rightBox.appendChild(selected);
//       selected = null;
//     });
//   });
// }

for (const item of listItems) {
  item.addEventListener("dragstart", (element) => {
    let selected = element.target;
    console.log(selected);

    // Right
    rightBox.addEventListener("dragover", (element) => {
      element.preventDefault();
    });

    rightBox.addEventListener("drop", (element) => {
      rightBox.appendChild(selected);
      selected = null;
    });

    // Left
    leftBox.addEventListener("dragover", (element) => {
      element.preventDefault();
    });

    leftBox.addEventListener("drop", (element) => {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
