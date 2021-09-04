import{Time} from "./time.js"
import{Todo} from "./todo.js"
let node = document.querySelector(".time")
let cowndown = document.querySelector(".cowndown")
let time = new Time(node,cowndown)
time.getTime()



let name= document.querySelector(".name")
let age = document.querySelector(".age")
let task = document.querySelector(".task")
let result = document.querySelector(".add-note")
let date = document.querySelector(".date")
let time1 = document.querySelector(".time1")
let add = document.querySelector(".bi-plus-square-fill")
let emptySpan = document.querySelector(".empty-span")
let checked = document.querySelector(".checked")
let cuont = 0


add.addEventListener("click",()=>{
    let todo = new Todo(name,age,task,result,date,time1)
    todo.render()
    
    
    
    event.preventDefault()
})


emptySpan.addEventListener("click",()=>{
    
    cuont++
    if(cuont%2==0){
        checked.style.bottom = "-395px"
    }else{
        checked.style.bottom = "-10px"
    }
    event.preventDefault()
})


