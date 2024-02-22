const checkIcon = '<i class="fa-solid fa-circle-check"></i>';
const xIcon = '<i class="fa-solid fa-circle-xmark"></i>';
const exclamationIcon = '<i class="fa-solid fa-circle-exclamation"></i>';

const successMsg = checkIcon + " Sccessfully submitted.";
const errorMsg = xIcon + " Please fix the error!";
const invalidMsg = exclamationIcon + " Invalid input, check again.";

let toastBox = document.getElementById("toast-box");

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
