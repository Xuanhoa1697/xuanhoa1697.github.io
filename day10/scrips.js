
// BÀi 1 với "r" là bán kính, "d" là đường kính
function perimeter9(r,d){
    if(d == 2*r){
        console.log(" Chu vi hình tròn với bán kính bằng " + r + " đường kính " + d + " có chu vi bằng " + 2*r*3.14);
    }else{
        console.log("Đường kính và bán kính không khớp");
    }
}
//nhập đường kính và bán kính//
perimeter9(100,200)
perimeter9(20,40)
perimeter9(3,9)
perimeter9(7,14)
 // Bài 1 cách 2//

 function number(r,d){
     return r*2*3.14 && d*3.14;
 }
 console.log(number(10,20));


 // bài 2 tính diện tích hình tròn với "r là bán kính"
 function acreage(r){
     return r*r*3.14;
 }
 console.log(acreage(3));

//bài 3 đổi cm sang m
 function convert(cm){
     let m = cm/100;
     console.log(cm+ "cm " + " bằng " + m+ "m");
 }
 convert(10);


 //bài 4//
 function minutes(mi){
    let hour = mi / 60;
     return hour;
    
 }
 console.log(minutes(30));

 //bài 5//
 function equation(a,b,c,x=((c-b)/a)){
     console.log(x);
 }
 equation(2,2,10)

 function equation(a,b,c){
     if(a==0){
         console.log("Phương trình vô nghiệm");
     }else{
         console.log(((b-c)/a));
     }
 }
 equation(0,2,3)

 //bài 6//
 function degC(deg){
    let degF= deg+33.8;
    return degF;
    
 }
 let check =degC(10);
 console.log(check);


 //bài 7
 function bmi(w,h){
     let b=w/(h*h)
    if(16<b && b<18.5){
        console.log("Gầy");
    }else if(18.5<=b && b<25){
        console.log("Bình thường");
    }else{
        console.log("BÉo vcc");
    }
 }
 bmi(75,1.8)

 //bài cuối
 function number(min,max){
     return Math.floor(Math.random() * (max-min));

 }
 console.log(number(10,100));
