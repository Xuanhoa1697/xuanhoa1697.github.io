

import menu from "./menu.js"

$(()=>{
    let count = 0
    let numnerLogin = 0
    let number = 0
    let arrTransfrom = [0,`-25%`,`-50%`,`-75%`,`-100%`]
    let inputText = [`Search for your perfect`,`Sports shoe of the year`,`Tell me your style`,`Trends this year`]
    $(`.menu-app`).on("click",()=>{
        count++
        menu($(`.app1`),$(`.app2`),$(`.app3`),$(`.menu-drop`),count)
    })
    let time = setInterval(()=>{
        
        number++
        if(number ===4){
            number=0
            
        }
        $(`.mr-img`).css({
            "transform":`translateX(${arrTransfrom[number]})`
        })
        $(`.search`).attr(`placeholder`,`${inputText[number]}`)
    },10000)
    $(`.sign`).on("click",()=>{
        event.preventDefault()
        numnerLogin++
        if(numnerLogin%2==0){
            $(`.login`).css({
                right:"-100%"
            })
        }else{
            $(`.login`).css({
                right:0
            })
        }
        
    })
})