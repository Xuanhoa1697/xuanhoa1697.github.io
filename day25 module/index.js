
// import{email,password} from "./style.js"
import {email,password,iconPadding} from "./style.js"

//import validate from "validate.js"
import{validate} from "./validate.js"

//click button login
let btn = document.querySelector(".btn1")
btn.addEventListener("click",()=>{
    let arrNode= [
        email.value,
        password.value,
        document.querySelector(".email-help"),
        document.querySelector(".pass-help"),
        document.querySelector(".btn1")
    ]
    validate(...arrNode)
    iconPadding()
    event.preventDefault()
})