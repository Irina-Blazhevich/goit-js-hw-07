const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

const changeName = () => {
  nameRef.textContent = inputRef.value ? inputRef.value : "незнакомец";
};

inputRef.addEventListener("input", changeName);
