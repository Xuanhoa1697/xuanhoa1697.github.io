let wins=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],  
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];
console.log(wins[0]);
let arrX=["⭕"];
let arrO=["❌"];
let btn = document.querySelector(".btn")
let winer = document.querySelector(".winer")
let caro = document.querySelectorAll(".caro");
let arrCaro = Array.from(caro);
let count = 0;
let resul;
for(let click of arrCaro){
    click.addEventListener("click",function comboclick(){
            let id;
            id = click.id
            // console.log(id);
            renderXO(click,id)
    
            
        })
}
//tạo khả năng click X và O

function renderXO(add,idd){
    count ++;
    if(count % 2==0){
        add.textContent = "❌" 
        arrO.push(idd)
    }else{
        add.textContent = "⭕"
        arrX.push(idd)  
    }
     checkWin(arrX)
     checkWin(arrO)
}
function checkWin(arr){
   
    for(let win of wins){
        let checkingAcc = 0
        for(let check of arr){
            if(check == win[0] || check ==win[1] || check ==win[2]){
                checkingAcc ++   
                if(checkingAcc===3 ){
            
                    winer.textContent = arr[0]
                    
                }else if(checkingAcc===8){
                    console.log("hòa");
                }
            }
        }
        
    }
}











