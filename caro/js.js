let winner = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let board = []

let player = "X"
let isPlaying = true

let game = document.getElementById("game")



function creatTd(){
    let td = document.createElement("td");
    td.className = "td";
    td.addEventListener("click",function (){
        
        if(isPlaying){
            td.textContent = player
            
            
        }
        player = player==="X" ? "O" :"X"
        
    },
    {
            once: true,
        }
    );


    return td
}

function creatTr(){
    let tr = document.createElement("tr");
    
    tr.className = "tr";
    for(let i =0;i<3;i++){
        tr.append(creatTd())
        board[this.cellIndex]
        console.log(this.cellIndex);
    }

    return tr
}


function render(){
    for(let i =0;i<3;i++){
        game.append(creatTr())
    }
    return game

}

render()