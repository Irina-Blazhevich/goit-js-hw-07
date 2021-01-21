const inputRef = document.querySelector("#validation-input");
console.dir(inputRef);
const validLength = inputRef.dataset.length;

const lengthValidation = () => {
  if (inputRef.value.length === Number(validLength)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};
inputRef.addEventListener("change", lengthValidation);
