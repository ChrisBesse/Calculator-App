const operationInput = document.querySelector("[data-input]");
const resultInput = document.querySelector("[data-result]");
const history = document.querySelector("[data-history]");
const backspace = document.querySelector("[data-backspace]");
const btns = document.querySelectorAll(".btn");

let operation = null;
let result = null;
let side = 0;

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
      side = 0;
      operationInput.value = "";
      resultInput.innerText = "";
      operation = operationInput.value;
    }
    if (type === "operator") {
      operationInput.value += btn.innerText;
      operation = operationInput.value;
    }
    if (type === "parentheses") {
      if (side === 0) {
        let last = operationInput.value.slice(-1);
        console.log(last);
        if ("1234567890".includes(last) && last !== "") {
          operationInput.value += "*(";
        } else {
          operationInput.value += "(";
        }
        side = 1;
      } else if (side === 1) {
        operationInput.value += ")";
        side = 0;
      }

      operation = operationInput.value;
    }
    if (type === "percent") {
      // let value = operationInput.value;
      // let array = [];
      // array = value.split("+");
      // array = array.split("-");
      // array = array.split("*");
      // array = array.split("/");
      // console.log(array);
      // operation = value;
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

  if (value == "") {
    side = 0;
  }
});
