let table = document.querySelectorAll("tr")
 for(let i = 0;i<table.length;i++){
     table[i].cells[i].style.backgroundColor = "red"
     table[i].cells[table.length - i-1].style.backgroundColor = "red"
 }


 let trElement = document.createElement("tr")

 let tdElement = document.createElement("td")
 tdElement.textContent = "dấdasd"

 let tdElemtnt1 = document.createElement("td")


 trElement.appendChild(tdElement)
 trElement.appendChild(tdElemtnt1)

 let tbody = document.querySelectorAll("tbody")
 



