let menuTouch = document.querySelector(".item-display-menu")
let slideMenu = document.querySelector(".slide-menu")
let closeMenuSlide= document.querySelector(".icon-close-slide")
let userTouch = document.querySelector(".link-login")
let logAccount = document.querySelector(".login-account")
let closeLogin = document.querySelector(".item-close-acc")
let imgScale = document.querySelector(".img-acc")
let hightligh = document.querySelector(".link-hightligh")
let container = document.querySelector(".container")
let dropDownMenu = document.querySelector(".dropdown-menu")
let flag;



menuTouch.addEventListener("click",function(){
    
    slideMenu.style.left = 0
    logAccount.style.right = "-300px"
    closeMenuSlide.style.left= "230px"
    dropDownMenu.style.marginLeft= `150px`
    flag =true
    menuTouch.style.border= "solid 1px black"
    

    event.preventDefault()
})




closeMenuSlide.addEventListener("click",function (){
    slideMenu.style.left="-300px"
    closeMenuSlide.style.left= 0
    dropDownMenu.style.marginLeft = 0
    menuTouch.style.border= "none"
    event.preventDefault()
})


userTouch.addEventListener("click",function (){
    logAccount.style.right = 0
    slideMenu.style.left = "-300px"
    imgScale.style.width = "55px"
    imgScale.style.height = "55px"
    dropDownMenu.style.marginLeft = 0
    event.preventDefault()
})

closeLogin.addEventListener("click",function (){
    logAccount.style.right = "-300px"
    imgScale.style.width = "0px"
    imgScale.style.height = "0px"
    event.preventDefault()
})
