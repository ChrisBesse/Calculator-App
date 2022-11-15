const operationInput = document.querySelector("[data-input]");
const resultInput = document.querySelector("[data-result]");
const history = document.querySelector("[data-history]");
const backspace = document.querySelector("[data-backspace]");
const btns = document.querySelectorAll(".btn");

let operation = null;
let result = null;

// console.log(operationInput, btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let type = e.target.dataset.type;

    if (type === "number") {
      operationInput.value += btn.innerText;
      operation = operationInput.value;
    }
    if (type === "decimal") {
      operationInput.value += btn.innerText;
      operation = operationInput.value;
    }
    if (type === "clear") {
      operationInput.value = "";
      resultInput.innerText = "";
      operation = operationInput.value;
    }
    if (type === "operator") {
      operationInput.value += btn.innerText;
      operation = operationInput.value;
    }

    if (type === "result") {
      resultInput.innerText = eval(operation);
    }
  });
});

operationInput.addEventListener("input", (e) => {
  let value = e.target.value;
  let lastValue = value.slice(-1);
  console.log(lastValue);

  if ("1234567890()+-*/%,.".includes(lastValue)) {
    operation = value;
  } else {
    e.target.value = value.substring(0, value.length - 1);
    console.log("wrong input");
  }
});

backspace.addEventListener("click", (e) => {
  value = operationInput.value;
  value = value.substring(0, value.length - 1);
  operationInput.value = value;
  operation = value;
});
