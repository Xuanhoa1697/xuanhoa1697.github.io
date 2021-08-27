let loginLink1 = document.querySelector(".login-link1")
let loginLink1a = document.querySelector(".login-link1a")
let formLogin = document.querySelector(".form-login")
let biXLg = document.querySelector(".bi-x-lg")
loginLink1a.addEventListener("click",()=>{
    formLogin.style.right = "500px"
    formRegis.style.right = "-300px"
    event.preventDefault()
})
loginLink1.addEventListener("click",()=>{
    formLogin.style.right = "500px"
    formRegis.style.right = "-300px"
    event.preventDefault()
})

biXLg.addEventListener("click",()=>{
    formLogin.style.right = "-300px"
    event.preventDefault()
})

//form regis


let regislink1 = document.querySelector(".register-link1")
let regislink1a = document.querySelector(".register-link1a")
let formRegis = document.querySelector(".form-regis")
let biXCircleFill = document.querySelector(".bi-x-circle-fill")
regislink1.addEventListener("click",()=>{
    event.preventDefault()
    formRegis.style.right = "500px"
    formLogin.style.right = "-300px"
})
regislink1a.addEventListener("click",()=>{
    event.preventDefault()
    formRegis.style.right = "500px"
    formLogin.style.right = "-300px"
})

biXCircleFill.addEventListener("click",()=>{
    event.preventDefault()
    formRegis.style.right = "-300px"
})


let disNav = document.querySelector(".dis-nav")
let disNav1 = document.querySelector(".dis-nav1")

window.addEventListener("scroll",()=>{
    console.info(document.documentElement.scrollTop)
    let x = document.documentElement.scrollTop
    formRegis.style.positin = "fixed"
    formRegis.style.right = "-300px"
    formLogin.style.position = "fixed"
    formLogin.style.right = "-300px"
    if(x>=415){
        disNav.style.display = "none"
        disNav1.style.display = "block"
        disNav1.style.top = 0
        disNav1.style.transition = "all 1s ease-out"
    }else{
        disNav.style.display = "block"
        disNav1.style.top = "-70px"
        disNav1.style.transition = "none"
        
    }
})

let home = document.querySelector(".menu-link1")
let des = document.querySelector(".menu-link2")
let about = document.querySelector(".menu-link3")
let partner = document.querySelector(".menu-link4")

let home1 = document.querySelector(".menu-link1a")
let des1= document.querySelector(".menu-link2a")
let about1 = document.querySelector(".menu-link3a")
let partner1 = document.querySelector(".menu-link4a")
home.addEventListener("click",()=>{
    home.classList.add("menu-bold")
    des.classList.remove("menu-bold")
    about.classList.remove("menu-bold")
    partner.classList.remove("menu-bold")
    home1.classList.add("menu-bold")
    des1.classList.remove("menu-bold")
    about1.classList.remove("menu-bold")
    partner1.classList.remove("menu-bold")
    
    let homeLink = setInterval(()=>{
        document.documentElement.scrollTop  +=100;
        if(document.documentElement.scrollTop >= 136){
            clearInterval(homeLink)
        }
    },15)
    event.preventDefault()
})
des.addEventListener("click",()=>{
    home.classList.remove("menu-bold")
    des.classList.add("menu-bold")
    about.classList.remove("menu-bold")
    partner.classList.remove("menu-bold")
    home1.classList.remove("menu-bold")
    des1.classList.add("menu-bold")
    about1.classList.remove("menu-bold")
    partner1.classList.remove("menu-bold")
    let desLink = setInterval(()=>{
        document.documentElement.scrollTop  +=100;
        if(document.documentElement.scrollTop >= 1150){
            clearInterval(desLink)
        }
    },15)
    event.preventDefault()
})
about.addEventListener("click",()=>{
    home.classList.remove("menu-bold")
    des.classList.remove("menu-bold")
    about.classList.add("menu-bold")
    partner.classList.remove("menu-bold")
    home1.classList.remove("menu-bold")
    des1.classList.remove("menu-bold")
    about1.classList.add("menu-bold")
    partner1.classList.remove("menu-bold")
    let aboutLink = setInterval(()=>{
        document.documentElement.scrollTop  += 100;
        if(document.documentElement.scrollTop >= 2750){
            clearInterval(aboutLink)
        }
    },15)
    event.preventDefault()
})
partner.addEventListener("click",()=>{
    home.classList.remove("menu-bold")
    des.classList.remove("menu-bold")
    about.classList.remove("menu-bold")
    partner.classList.add("menu-bold")
    home1.classList.remove("menu-bold")
    des1.classList.remove("menu-bold")
    about1.classList.remove("menu-bold")
    partner1.classList.add("menu-bold")
    let partnerLink = setInterval(()=>{
        document.documentElement.scrollTop  += 100;
        if(document.documentElement.scrollTop >= 2191){
            clearInterval(partnerLink)
        }
    },15)
    event.preventDefault()
})
home1.addEventListener("click",()=>{
    home.classList.add("menu-bold")
    des.classList.remove("menu-bold")
    about.classList.remove("menu-bold")
    partner.classList.remove("menu-bold")
    home1.classList.add("menu-bold")
    des1.classList.remove("menu-bold")
    about1.classList.remove("menu-bold")
    partner1.classList.remove("menu-bold")
    let homeLink1 = setInterval(()=>{
        document.documentElement.scrollTop -=100;
        if(document.documentElement.scrollTop ==0){
            clearInterval(homeLink1)
        }
    },15)
    event.preventDefault()
})
des1.addEventListener("click",()=>{
    home.classList.remove("menu-bold")
    des.classList.add("menu-bold")
    about.classList.remove("menu-bold")
    partner.classList.remove("menu-bold")
    home1.classList.remove("menu-bold")
    des1.classList.add("menu-bold")
    about1.classList.remove("menu-bold")
    partner1.classList.remove("menu-bold")
    let desLink1 = setInterval(()=>{
        if(document.documentElement.scrollTop >=1150){
            document.documentElement.scrollTop-=100;
            if(document.documentElement.scrollTop <= 1250){
                clearInterval(desLink1)
            }
        }else{
            document.documentElement.scrollTop +=100;
            if(document.documentElement.scrollTop >= 1150){
                clearInterval(desLink1)
            }
        }
    })
    event.preventDefault()
})
about1.addEventListener("click",()=>{
    home.classList.remove("menu-bold")
    des.classList.remove("menu-bold")
    about.classList.add("menu-bold")
    partner.classList.remove("menu-bold")
    home1.classList.remove("menu-bold")
    des1.classList.remove("menu-bold")
    about1.classList.add("menu-bold")
    partner1.classList.remove("menu-bold")
    let aboutLink1 = setInterval(()=>{
        if(document.documentElement.scrollTop >= 2750){
            document.documentElement.scrollTop -= 100
            if(document.documentElement.scrollTop  <= 2850){
                clearInterval(aboutLink1)
            }
        }else{
            document.documentElement.scrollTop += 100
            if(document.documentElement.scrollTop  >= 2750){
                clearInterval(aboutLink1)
        }
    }
    })
    event.preventDefault()
})
partner1.addEventListener("click",()=>{
    home.classList.remove("menu-bold")
    des.classList.remove("menu-bold")
    about.classList.remove("menu-bold")
    partner.classList.add("menu-bold")
    home1.classList.remove("menu-bold")
    des1.classList.remove("menu-bold")
    about1.classList.remove("menu-bold")
    partner1.classList.add("menu-bold")
    let partnerLink1 = setInterval(()=>{
        if(document.documentElement.scrollTop >= 2191){
            document.documentElement.scrollTop -= 100
            if(document.documentElement.scrollTop <= 2191){
                clearInterval(partnerLink1)
            }
        }else{
            document.documentElement.scrollTop += 100
            if(document.documentElement.scrollTop >= 2151){
                clearInterval(partnerLink1)
            }
        }
    })
    event.preventDefault()
});


// next prev
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let sixImgDisplay = document.querySelector(".six-img-display")
let img = [`photo2222.png`,`gaixinh1.jpg`,`gaixinh2.jpg`,`gaixinh3.jpg`]

let count = 0;


prev.addEventListener("click",prevClick)

next.addEventListener("click",nextClick)




function nextClick(){
     if(count >= img.length - 1)
    count = -1
    count++
    console.log(count);
    sixImgDisplay.setAttribute(`src`,img[count])
    prev.addEventListener("click",prevClick)
    prev.style.opacity = 1
    if(count === 3){
        next.removeEventListener("click",nextClick)
        next.style.opacity = 0.2
    }
}

function prevClick(){
    if(count <=0)
    count = img.length
    count--
    sixImgDisplay.setAttribute(`src`, img[count])
    next.addEventListener("click",nextClick)
    next.style.opacity = 1
    if(count===0){
        prev.removeEventListener("click",prevClick)
        prev.style.opacity = 0.2
    }
}

