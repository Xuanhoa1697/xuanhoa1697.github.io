import{CownDown} from "./cownDown.js"

let loadData = document.querySelector(".load-data")
let node = document.querySelector(".left-cowndown")
let load = new  CownDown(node)

loadData.addEventListener("click",()=>{
    load.getTimer()
})