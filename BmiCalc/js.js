let btnRenext = document.querySelector(".btn-renext")
let btnNext = document.querySelector(".btn-next")
let calc = document.querySelector(".calc")
let container = document.querySelector(".container")
let body = document.body

btnNext.addEventListener("click",function(){
    calc.style.right = "110px"
    container.style.left = "-550px"
    btnRenext.style.color = "rgb(40, 235, 1)"
    btnNext.style.color = "black"
    body.style.cursor = "wait"
    setTimeout(function(){
        body.style.cursor = "pointer"
    },800)
    
})
btnRenext.addEventListener("click",function(){
    calc.style.right = "-300px"
    container.style.left = "30px"
    btnNext.style.color = "rgb(40, 235, 1)"
    btnRenext.style.color = "black"
    body.style.cursor = "wait"
    setTimeout(function(){
        body.style.cursor = "pointer"
    },800)
})