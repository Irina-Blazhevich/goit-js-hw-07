const counterRef = document.querySelector("#value");
let value = 0;
const increment = () => {
  value += 1;
  counterRef.textContent = value;
};

const decrement = () => {
  value -= 1;
  counterRef.textContent = value;
};

const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);

incrementButtonRef.addEventListener("click", increment);
decrementButtonRef.addEventListener("click", decrement);
