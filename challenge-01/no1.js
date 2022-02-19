// Mengganti sebuah kata dalam sebuah kalimat
// Main Idea : menggunakan fungsi split() dalam JavaScript

changeWord = (selectedText, changedText, text) => {
  let textValue = text.split(" ");
  for (let i = 0; i < textValue.length; i++) {
    if (textValue[i] === selectedText) {
      textValue[i] = changedText;
    }
  }
  return textValue.join(" ");
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
