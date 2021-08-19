let line1 = document.querySelector(".line-link1")
let line2 = document.querySelector(".line-link2")
let line3 = document.querySelector(".line-link3")
let line4 = document.querySelector(".line-link4")
let lineItem = document.querySelector(".line-item")




line1.addEventListener("click",function(){
    lineItem.style.left="38px"
    lineItem.style.width="75.42px"
    // lineItem.style.transform=" translateY(20px)" 
    event.preventDefault()
})

line2.addEventListener("click",function(){
    lineItem.style.left="152px"
    lineItem.style.width="40px"
    event.preventDefault()
})
line3.addEventListener("click",function(){
    lineItem.style.left="231px"
    lineItem.style.width="110px"
    event.preventDefault()
})
line4.addEventListener("click",function(){
    lineItem.style.left="385px"
    lineItem.style.width="75px"
    event.preventDefault()
})
