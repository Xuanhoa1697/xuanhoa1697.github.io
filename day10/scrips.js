
// BÀi 1 với "r" là bán kính, "d" là đường kính
function perimeter(r){
    let checking = Math.PI*r*2
    return checking
}
console.log(perimeter(2));

 // bài 2 tính diện tích hình tròn với "r là bán kính"
 function acreage(r){
    let checking = Math.PI*r**2
    return checking
 }
 console.log(acreage(3));

//bài 3 đổi cm sang m
 function convert(cm){
     let m = cm/100;
     return m;

 }
 console.log(convert(30));


 //bài 4//
 function minutes(mi){
    let hour = mi / 60;
     return hour;
    
 }
 console.log(minutes(15));

 //bài 5//
function equation(a,b,c){
     if(a!= 0){
         return (c -b)/a
     }else{
         return false;
     }
 }
 console.log(equation(6,-6,2));

 //bài 6//
 function degC(deg){
    let degF= deg*1.8+32;
    return degF;
    
 }
 let check =degC(1);
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
     return Math.floor(Math.random() * (max-min) + min);

 }
 console.log(number(10,100));
