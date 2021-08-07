
let width = screen.width
let container = document.querySelector(".container");
let menu= document.querySelector(".menu")
let content = document.querySelector(".form-content")

function removeNodeMenu(){
    menu.remove()
    return menu
    
}

function creatItemMenu(){
    let itemMenu = document.createElement("div")
    itemMenu.className="item-menu"
    return itemMenu
}
function removeNodeContent(){
    content.remove()
    return content
    
}

function creatdropMenu(){
    let drop = document.createElement("div");
    drop.className="drop"

    
    return drop
}
function creatContent(){
    let content = document.createElement("div");
    content.className="conten-menu"
    for(let i = 0;i<4;i++){
        content.append(creatItemMenu())
    }
    return content
}

function creatMenu(){
    let dropMenu = document.createElement("div");
    dropMenu.className="drop-menu"
    dropMenu.append(creatdropMenu())
    return dropMenu
}


function render(){
    let body = document.getElementById("body")
    if(width<=1000){
        container.remove(removeNodeMenu(),removeNodeContent());
        container.append(creatMenu(),creatContent())
        body.append(container)
    }
    
    return body
}

console.log(render());