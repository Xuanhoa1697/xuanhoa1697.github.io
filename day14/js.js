//BÀI 1
let arr =[10,20,30,40,50,60,70,80,90];

let resul = arr.reduce(function (sumAvg,value,index){
    sumAvg +=value
    return sumAvg 
},0)
console.log(resul/arr.length);

// Bài 2//

arr = [1,2,4,7,8,999,7,8,5,5,5,666,88,7,5]
let findMax= arr[0];
arr.forEach(function (value,index){
    for(let i = 1;i<arr.length;i++){
        if(arr[i] > findMax){
            findMax = arr[i]
        }
    }
})
console.log(findMax);
 
// BÀi 3/

function fibonaci(){
    let fi = [0,1]
    for(let i =2;i<10;i++){
        fi[i] = fi[i - 2] + fi[i-1]
    }
    return fi
}
console.log(fibonaci());


//bài 4

function removeFalsy(arr){
    let resul = arr.filter(function (value,index){
        return  value 
    })
    return resul
}
console.log(removeFalsy([1,2,3,4,5,6,7,8,9,NaN]));

// bài 5

let arr7 = [
    [2, 1, 3],
    [0, 4, 1],
    [3, 2, 2],
    [2, 3, 0],
];

arr7.sort(function (a, b) { // a và b là mảng con
    return a[1] - b[1];
});
console.log(arr7);

//bài 6

arr = [10,20,30,40,50,60]
let total = arr.map(function (value,index){
    return value**2
})

console.log(total);


//bài 7
function capitalize(str){
   return str.split(" ").map(function (value){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
   }).join(" ")
}
console.log(capitalize("Helo Word"));


//BÀi8
function Checking(){
    let arr9 = [1,2,3,6,4,7,8,9,100000000000000]

    let check = Math.floor(Math.random() * arr9.length)
    console.log(check);
    return arr9[check]
}
console.log(Checking());