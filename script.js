const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");

const cleanInputString = (string) => {
  const regex = /[\W_]/g;
  return string.replace(regex, "");
};

const checkPalindrome = () => {
  const inputText = cleanInputString(inputField.value).toLowerCase();
  const reverseText = inputText.split("").reverse().join("");
  if (inputText === "") {
    alert("Please input a value");
  } else if (inputText === reverseText) {
    resultField.innerHTML = `<strong>${inputField.value}</strong> is a palindrome.`;
    resultField.style.display = "block";
  } else {
    resultField.innerHTML = `<strong>${inputField.value}</strong> is not a palindrome.`;
    resultField.style.display = "block";
  }
  inputField.value = "";
};

checkButton.addEventListener("click", checkPalindrome);
