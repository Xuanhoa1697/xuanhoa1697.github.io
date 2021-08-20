function checkNumber(a,b){
    let numberOne = a
    let numberTwo = b

    if(numberOne === numberTwo){
        return true
    }else{
        return false
    }
    
}

console.log(checkNumber(1,1));


// bài 2

function calc(a,b){
    
}


// bài 3

function multiplication(x){
    let result = 1;
    for(let i = 1;i<10;i++){
        result = i * x
        console.log(x, "*", i ,"=", result);
        
    }
    
    
}
multiplication(2)


//bài 4


function Strong(a){
    let result=1
    for(let i = 1;i<9;i++){

    }
}



///fibonaci


function overLoad(n){
    let resul =0
    let arr = new Array(n)
    arr[0] = 1;
    arr[1] = 2

    if(typeof n =="number" && n >2 && n <30){
        for(let i = 2;i<arr.length;i++){
            arr[i] = arr[i-2] + arr[i-1];
            console.log(arr[i]);
        }
    }else{
        console.log("Chương trình in dãy Fibonacci, yêu cầu tham số 'n' phải là một số nguyên dương > 2 và nhỏ hơn 50" );
    }
}

console.log(overLoad(10));




//


let weightF = document.querySelector(".weight-f")


let heightF = document.querySelector(".height-f")

let btn =document.querySelector(".btn-click")
let render = document.querySelector(".rd")

btn.addEventListener("submit",function(){
    event.preventDefault()
    let resul;
    let valueWeight = weightF.value;
    let valueHeight = heightF.value;

    
    resul = valueWeight / (valueHeight)**2
    


    render.textContent=resul

})
    