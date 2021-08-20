let btnRenext = document.querySelector(".btn-renext")
let btnNext = document.querySelector(".btn-next")
let calc = document.querySelector(".calc")
let container = document.querySelector(".container")

btnNext.addEventListener("click",function(){
    calc.style.right = "110px"
    container.style.left = "-550px"
    btnRenext.style.color = "red"
    btnNext.style.color = "black"
})
btnRenext.addEventListener("click",function(){
    calc.style.right = "-300px"
    container.style.left = "30px"
    btnNext.style.color = "red"
    btnRenext.style.color = "black"
})