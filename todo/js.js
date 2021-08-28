let valueName = document.querySelector(".name").value


let nameAdd =(str)=>{
    str.trim().split(" ").map(x=>x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()).join("")
    
}



let btn = document.querySelector(".btn")
let textName = document.querySelector(".text-name")
btn.addEventListener("click",()=>{
    let resul =document.querySelector(".resul")
    let valueName = document.querySelector(".name").value
    let valuetime = document.querySelector(".time").value
    textName.textContent = valueName
    event.preventDefault()
    textMi.textContent = valuetime
    let downTime = setInterval(()=>{
        sion--;
        textS.textContent = sion
        if(sion==0){
            mini+=1
            sion = 60
            textMi.textContent = valuetime-= mini
            if(valuetime==0 && sion==0 ){
                clearInterval(downTime)
                resul.textContent = "hết giò"
            }
        }
    },1000)
})


let textMi = document.querySelector(".text-mi")
let textS = document.querySelector(".text-s")

let sion = 60;
let mini = 0




