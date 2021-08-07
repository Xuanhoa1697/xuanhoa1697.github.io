


function creatItemMenu(){
    let itemMenuLogo = document.createElement("div")
    let rightMEnu = document.querySelector(".right-menu")
    itemMenuLogo.className="item-menu-logo1"
    itemMenuLogo.textContent = "MENU"
    itemMenuLogo.addEventListener("click",function (){
        rightMEnu.style.display = "block"
    })
    return itemMenuLogo

}

function render(){
    let leftMenu = document.querySelector(".left-menu")
    
    leftMenu.append(creatItemMenu())
    return leftMenu
}
render()
screen.width