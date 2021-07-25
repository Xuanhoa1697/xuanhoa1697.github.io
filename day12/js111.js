// gọi metor ojb.mentor()
// vòng lặp  for(let prop in ojb) vòng lặp cho ojb//
// toán tử this
//ví dụ về this
 let yourSelf={
     myName:"Xuân Hòa",
     age:24,
     jobs:"Product",
     sayHi: function(){
         console.log("Xin chào mọi người,mình tên là", this.myName, "năm nay mình ",this.age, "công việc hiện tại của mình là ", this.jobs);
     }
 }
 console.log(yourSelf.sayHi());

 //ví dụ số 2
 let thongso={
     w:200,
     h:300,
     dientich:function(){
        return this.w * this.h
    
     },
     chuvi:function(){
         return (this.w + this.h)*2
     },
     totalCircle:function(){
         return this.w + this.h
     },
     toString: function(){
         return "Hình chũ nhật hehe"
     },
     
 }
 console.log(thongso.dientich());
 console.log(thongso.chuvi());
 console.log(thongso.totalCircle());

//  alert(thongso);
//  console.log(thongso.valueof());


 // 
function Counter(value){
    this.value = value ||0;
    this.up = function (){
        this.value +=1
    };
    this.down=function(){
        this.up -=1
    }
    this.get=function(){
        return this.value
    }
}

counter1.up();
counter1.up();
console.log(counter1.get());



//
