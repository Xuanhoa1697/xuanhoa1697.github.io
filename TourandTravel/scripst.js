let formLogin = document.querySelector(".form-login")
let loginLink = document.querySelector(".login-link")
let x = document.querySelector(".bi-x-lg")
let menuLink1 = document.querySelector(".menu-link1")
let menuLink2 = document.querySelector(".menu-link2")
let menuLink3 = document.querySelector(".menu-link3")
let menuLink4 = document.querySelector(".menu-link4")
let editLogin = document.querySelector(".edit-login")
let biXlg = document.querySelector(".bi-x-lg")
let biCaretUpFill = document.querySelector(".bi-caret-up-fill")
let registerLink = document.querySelector(".register-link")
let biXCircleFill = document.querySelector(".bi-x-circle-fill")
let formRegis = document.querySelector(".form-regis")
let editRegis = document.querySelector(".edit-regis")
loginLink.addEventListener("click",function(){
    formLogin.style.position= "absolute";
    formLogin.style.right = "320px"
    formRegis.style.position= "fixed";
    formRegis.style.right = "-320px"
    event.preventDefault()
},{
    
})
x.addEventListener("click",function(){
    formLogin.style.position= "fixed";
    formLogin.style.right = "-300px"
})

menuLink1.addEventListener("click",function(){
    menuLink1.classList.add("menu-bold")
    menuLink2.classList.remove("menu-bold")
    menuLink3.classList.remove("menu-bold")
    menuLink4.classList.remove("menu-bold")
    event.preventDefault()
})
menuLink2.addEventListener("click",function(){
    menuLink1.classList.remove("menu-bold")
    menuLink2.classList.add("menu-bold")
    menuLink3.classList.remove("menu-bold")
    menuLink4.classList.remove("menu-bold")
    event.preventDefault()
})
menuLink3.addEventListener("click",function(){
    menuLink1.classList.remove("menu-bold")
    menuLink2.classList.remove("menu-bold")
    menuLink3.classList.add("menu-bold")
    menuLink4.classList.remove("menu-bold")
    event.preventDefault()
})
menuLink4.addEventListener("click",function(){
    menuLink1.classList.remove("menu-bold")
    menuLink2.classList.remove("menu-bold")
    menuLink3.classList.remove("menu-bold")
    menuLink4.classList.add("menu-bold")
    event.preventDefault()
})


registerLink.addEventListener("click",function(){
    formRegis.style.position= "absolute";
    formRegis.style.right = "462px"
    formLogin.style.position= "fixed";
    formLogin.style.right = "-300px"
    event.preventDefault()
})
biXCircleFill.addEventListener("click",function(){
    formRegis.style.position= "fixed";
    formRegis.style.right = "-300px"

 event.preventDefault()
})




//js next prev
let sixImg = document.querySelector(".six-img-display")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

let img = [`gaixinh1.jpg`,`gaixinh2.jpg`,`gaixinh3.jpg`,`photo2222.png`]

let count = 0;

prev.addEventListener("click",function(){
    if(count <= 0)
    count = img.length
    console.log(count);
    count--
    console.log(count);
    sixImg.setAttribute(`src`, img[count])
})
next.addEventListener("click",function(){
    if(count>=img.length-1)
    count = -1
    count++
    console.log(count);
    sixImg.setAttribute(`src`, img[count])
    
})













