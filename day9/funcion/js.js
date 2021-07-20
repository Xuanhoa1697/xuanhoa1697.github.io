let a = 5
console.log(Boolean(a));
console.log(Boolean(0));
console.log(Boolean(5 <4));
console.log(Boolean(NaN));
console.log(Boolean("dsadasdas"));

// toán tử logic//
// Hoặc ||

// Và &&


// toán tử || cả 2 false mới là false,1 trong 2 true là true
 console.log(true || true);
// toán tử && thì chỉ cẩn có 1 cái false thì sẽ là false, 2 true mới là true
 console.log(false && true);

 // câu điều kiện if else
 let hour =4;
 if(hour < 12){
     console.log("Goodmoning!!!");
 }else if(hour >= 12 && hour <18){
     console.log("abc");
 }else if(hour >=18 && hour < 30){
     console.log("123");
 }else{
     console.log("789");
 }
 ////bài tập//


 function numX(x){
     if(x >= 85){
         console.log("A");
     }else if(x <85 && x >= 75){
         console.log("B");
     }else if(x < 70 && x >= 40){
         console.log("C");
     }else{
         console.log("D");
     }
 }
 numX(10);

 function num(a,b){
     if( a >= b){
         console.log(a);
     }else if(b > a){
         console.log(b);
     }
 }
 num(100,100)


 function NumX(x){
     if(x == 0){
         console.log("Số Không");
     }else if(x > 0){
         console.log("Số Dương");
     }else{
         console.log("Số âm");
     }
 }
 NumX(0)

 function nUmx(x){
     if(x % 3==0 && x % 5 ==0){
         console.log("CHia hết cho 3 và 5");
     }else{
         console.log("Không chia hết cho cả 2");
     }
 }
 nUmx(10)


 function numBerX(a,b,c){
     if(a +b ==c){
         console.log("a + b = c");
     }else{
         console.log("Không bằng");
     }
 }
 numBerX(6,300,306)