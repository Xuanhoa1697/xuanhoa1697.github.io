let btn = document.querySelector(".btn")
let fontColor = document.querySelector(".font-color")
let body = document.body
btn.addEventListener("click",function(){
    let hegex = "0123456789ABCDEF"
    let color = "#"
    let color2 = "#"

    for(let i = 0;i<6;i++){
        color +=hegex[Math.floor(Math.random() * 16)]
        color2 +=hegex[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    body.style.background = `linear-gradient(to right, ${color},${color2})`
    fontColor.textContent = `Background Image: (to right, ${color},${color2})`
})

// e quên =))