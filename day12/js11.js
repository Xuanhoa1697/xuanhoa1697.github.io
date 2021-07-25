let ojb ={
    name:"Hòa",
    Age:"24",
    sayHi: function(){
        console.log("Helo,Xuan Hòa");
    }
}

/// For in dùng cho ojb//
for(let prop in ojb){
    console.log(prop, ojb[prop]);
}

// this tham chiếu đến đối tuojng tham chiếu
//this chính là đối tượng
//thí dối tượng truosc dấu chấm
let copy = ojb;
ojb=null;
copy.sayHi();

//

let yourSelf={
    myName:"Hòa",
    age:"24",
    job:"Worker",
    sayHello : function (){
        console.log("Hello, Mình tên là ", this.myName, "Năm nay mình" , this.age);
    }
}
console.log(yourSelf.sayHello());
//
let rectangle={
    w:100,
    h:100,
    getArea: function (){
        return this.w * this.h
    },
    getCirus: function(){
        return this.w * this.h
    }
}
console.log(rectangle.getArea());
///
function addValue(){

}