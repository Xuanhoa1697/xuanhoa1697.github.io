function sumBetween(min,max){
    let resul = 0;
    let x= min + 1;
    for(let i = x;i<max;i++){
        resul +=i
    }
    return resul
}

console.log(sumBetween(3,5));


function check(x){
    let resul = true;
    for(let i = 2;i<x;i++){
        if(x%i==0){
            resul = false
            return resul
        }
    }
    return true
}

console.log(check(1001));



function checking(x){
    let resul = 1
    for(let i = 2;i<=x;i++){
        if(x%i==0){
            for(let x= 2;x<i;x++){
                if(i%x==0){
                    resul = 0
                }
            }
    }else{
        resul +=i
        return resul
    }

    
    
}

}
console.log(checking(5));



function sumNumber(x){
    let resul = 1 + x;
    for(let i = 2;i<=(x/2);i++){
        if(x%i==0){
            resul +=i 
        }
    }
    return resul
}
console.log(sumNumber(10));

