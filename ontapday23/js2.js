let operator = document.querySelectorAll(".operator");
let arrOperator = Array.from(operator);
let operatorResult = document.querySelector(".operator-result");
let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let color5 = document.querySelector(".color5");
let color6 = document.querySelector(".color6");
let color7 = document.querySelector(".color7");
let color8 = document.querySelector(".color8");
let totalResult = document.querySelectorAll(".total-result");
let newArrResult = Array.from(totalResult);
let result = document.querySelectorAll(".result");
let arrResult = Array.from(result);
let pointTrue = document.querySelector(".point-true");
let pointFalse = document.querySelector(".point-false");
function randomNumber(operator1) {
  let num1 = Math.floor(Math.random() * 50 - 25);
  let num2 = Math.floor(Math.random() * 50 - 25);
  let resultCheck;
  number1.textContent = num1;
  number2.textContent = num2;
  switch (operator1) {
    case "+": {
      operatorResult.textContent = operator1;
      resultCheck = newArrResult[Math.floor(Math.random() * 3)].textContent =
        num1 + num2;
      break;
    }
    case "-": {
      operatorResult.textContent = operator1;
      resultCheck = newArrResult[Math.floor(Math.random() * 3)].textContent =
        num1 - num2;
      break;
    }
    case "*": {
      operatorResult.textContent = operator1;
      resultCheck = newArrResult[Math.floor(Math.random() * 3)].textContent =
        num1 * num2;
      break;
    }
    case "/": {
      operatorResult.textContent = operator1;
      resultCheck = newArrResult[Math.floor(Math.random() * 3)].textContent = (
        num1 / num2
      ).toFixed(1);
      console.log(Math.floor(Math.random() * 3));
      break;
    }
  }
  right = resultCheck;
}
for (let displayOperator of arrOperator) {
  displayOperator.addEventListener("click", function () {
    let operator1 = displayOperator.id;
    randomNumber(operator1);
    color5.textContent = "?";
    color6.style.background = "#F8EEEE";
    color7.style.background = "#F8EEEE";
    color8.style.background = "#F8EEEE";
    event.preventDefault();
  });
}
for (let check of newArrResult) {
  check.addEventListener("click", function () {
    if (check.textContent == right) {
      color5.textContent = "✔";
      color5.style.color = "#4FB300";
      this.style.backgroundColor = "orange";
      pointTrue.textContent += "✔";
    } else {
      color5.textContent = "❌";
      this.style.backgroundColor = "red";
      pointFalse.textContent += "❌";
    }
  });
}
