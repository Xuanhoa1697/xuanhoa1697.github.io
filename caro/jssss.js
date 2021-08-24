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

let arrX=[];
let arrO=[];

let caro = document.querySelectorAll(".caro");
let arrCaro = Array.from(caro);

let count = 0;
let resul;


for(let click of arrCaro){
    click.addEventListener("click",function(){
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
        add.textContent = "⭕"
        resul = add.textContent;
        arrO.push(idd)
        // console.log(arrO);
        
    }else{
        add.textContent = "❌"
        resul = add.textContent;
        arrX.push(idd);
        // console.log(arrX);
        
    }
     checkWin(arrO)
    
}


function checkWin(checkO){
    let checkMath = 0
    for(let checkWiner of checkO )
        for(let i of wins){
            if(checkWiner == i[0] || checkWiner == i[1] || checkWiner == i[2]){
                checkMath+=1
                console.log(checkMath);
        }
            
    }
}






