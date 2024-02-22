let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qr-image");
let qrText = document.getElementById("qr-text");

function generateQR() {
  if (qrText.value.length > 0) {
    // Generate QR code
    const baseUrl =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    qrImage.src = baseUrl + qrText.value;
    imgBox.classList.add("show-img");
  } else {
    // Animate Input Box
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
