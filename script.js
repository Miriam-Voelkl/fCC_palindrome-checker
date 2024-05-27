const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");

const checkPalindrome = () => {
  const inputText = inputField.value;
  const reverseText = inputText.split("").reverse().join("");
  console.log(reverseText);
  if (inputText === reverseText) {
    resultField.innerHTML = `<strong>${inputText}</strong> is a palindrome.`;
    resultField.style.display = "block";
  } else {
    resultField.innerHTML = `<strong>${inputText}</strong> is not a palindrome.`;
    resultField.style.display = "block";
  }
  inputField.value = "";
};

checkButton.addEventListener("click", checkPalindrome);
