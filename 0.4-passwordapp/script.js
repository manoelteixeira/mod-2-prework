const passwordBox = document.getElementById("password");

// function getRandomInt(min, max) {
//   if (!max) {
//     max = min;
//     min = 0;
//   }
//   return Math.floor(Math.random() * (max - min) + min);
// }

function choose(input) {
  if (!input.hasOwnProperty("length")) {
    return undefined;
  }

  const randomIdx = Math.floor(Math.random() * input.length);
  return input[randomIdx];
}

function createPassWord() {
  const chars = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXUZ",
    lowerCase: "abcdefghijklmnopqrstuvwxuz",
    numbers: "0123456789",
    symbols: "@#$%^&*()_+~138[]>く/ー=",
  };
  const size = 12;
  const charsKeysSeen = [];
  let password = "";
  while (password.length < size && charsKeysSeen.length <= 4) {
    const key = choose(Object.keys(chars));
    const selectedChar = choose(chars[key]);
    if (!password.includes(selectedChar)) {
      password += selectedChar;
      if (!charsKeysSeen.includes(key)) {
        charsKeysSeen.push(key);
      }
    }
  }
  // Update password box
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
