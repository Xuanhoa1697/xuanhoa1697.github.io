let number = document.querySelectorAll(".number");
let arrNumber = Array.from(number);
let numberMath = document.querySelector(".number-math");
let checkingResult = document.querySelector(".checking");
for (let displayNumber of arrNumber) {
  displayNumber.addEventListener("click", function () {
    numberMath.textContent += this.id;
    numberMath.id = numberMath.textContent;
    console.log(numberMath.id);
    console.log(this);
  });
}

let del = document.querySelector(".del");
let fontTotal = document.querySelector(".font-total");

del.addEventListener("click", function () {
  fontTotal.textContent = 0;
  numberMath.textContent = "";
});

checkingResult.addEventListener("click", function () {
  let newArr = numberMath.id.split("");
  console.log(newArr);
  if (
    newArr[newArr.length - 1] === "+" ||
    newArr[newArr.length - 1] === "-" ||
    newArr[newArr.length - 1] === "*" ||
    newArr[newArr.length - 1] === "/" ||
    newArr[0] === "*"||
    newArr[0] === "/"
  ) {
    fontTotal.textContent = 0;
  }
  else{
      fontTotal.textContent = (eval(numberMath.id))   
  }
});
