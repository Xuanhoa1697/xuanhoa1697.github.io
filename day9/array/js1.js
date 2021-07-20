// Câu lệnh khai báo với let//
let hoa={
    age:18,
    myName:"Hòa",
    info:{
        birthday:"01/06/97",
        height:"1m78",
    }
}
console.log(hoa.age);
console.log(hoa["info"]["height"]);


// funcion//
function mySelf(){
    let xuanHoa={
        name:"Hòa",
        age:18,
    }
    console.log(xuanHoa.name);
}
mySelf();

function MySelf(add){
    let checking ={
        name:"tên",
    }
    console.log(checking.name + " "+add);
}
MySelf("Xuân Hòa");


function sum(a,b){
    return a+b;
}
console.log(sum(1,2));



let infinity =["x", "y", "z"];
infinity[1]=5;
infinity[0]=100;
function multifly(x,y){
    return x *y;
}
console.log(multifly(infinity[1],infinity[0]));
