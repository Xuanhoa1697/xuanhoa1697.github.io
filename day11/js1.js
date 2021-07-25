
// BÀi  1 xác định số ngày trong 1 tháng và năm bất kỳ//

// function adDay(month,year){
//     if(year%4==0){
//         switch(month){
//             case 1:
//             case 3 :
//             case 5:
//             case 7:
//             case 8 :
//             case 10:
//             case 12 :
//                 console.log(`31 ngày`);
//                 break
//             case 2:
//                 console.log(`29 ngày`);
//                 break
//             default:
//                 console.log(`30 ngày`);
            
//         }
//     }else{
//         switch(month){
//             case 1:
//                 case 3 :
//                 case 5:
//                 case 7:
//                 case 8 :
//                 case 10:
//                 case 12 :
//                     console.log(`31 ngày`);
//                     break
//                 case 2:
//                     console.log(`28 ngày`);
//                     break
//                 default:
//                     console.log(`30 ngày`); 
//         }
//     }
// }
// adDay(2,2021)

// ///Bài 2 dùng function in ra FIzz buzz //
// function loop(x,y){
//     for(x;x<=y;x++){
        
//         if(x%3==0){
//             console.log("Fizz");
//             continue
//         }
//         if(x%5==0){
//             console.log("Buzz");
//             continue
//         }
//         if(x%3==0 && x%5==0){
//             console.log("FizzBuzz");
//             continue
//         }
//         else{
//             console.log(`${x}`);
//             continue
//         }
//     }
// }
// loop(1,100)



// //Bài 3 viết  phương trình tidnh thể tích hình cầu//

// function marth(r){
//     let resul = Math.round(4/3*Math.PI*r**3)
//     return resul
// }
// console.log(marth(2));


// //Bai4 tính tổng các số năm giữa 2 số bất kỳ//

// function number2(x,y){
//     let checkingTotal=0
//     let i = x+1
//     let z= y+1
//     if(x<y){
//         for(i;i<y;i++){
//             for(i;i<y;i++){
//             checkingTotal += i
//             }
//             return checkingTotal
//         }
//     }else if(x>y){
//         for(z;z<x;z++){
//             checkingTotal+=z
//         }
//         return checkingTotal
//     }else{
//         checkingTotal=0
//     }
// }
// console.log(number2(3,8));


// // BÀi 5 xác định sô nguyên tố//
// function addNumber(x){
//     if(x<2){
//         console.log(false);
//     }else if(x==2){
//         console.log(true);
//     }
//     else{
//         for(let i =2;i<x;i++){
//             if(x%i==0){
//                 console.log(false);
//                 break
//             }else{
//                 console.log(true);
//                 break
//             }
//         }
//     }

// }
// addNumber(1000001)

// //BÀi 6// 

// function Addnumber(x){
//     let resul=0
// if(x<2){
//     console.log(resul);
// }else{
//    for(let i=2;i<=x;i++){
//        let d = 1
//        for(let y=2;y<=Math.sqrt(i);y++){
//         if(i%y==0){
//             d=0;
//         }
//        }
//        if(d==1){
//            resul += i
//        }
//    }
// }
// console.log(resul);
// }

// Addnumber(2)

function NumBer(x){
    for(let i=2;i<=x/2;i++){
       if(x%i==0){
        return false 
       }
       
    }
    
    return true
    
    
}
console.log(NumBer(9));
  


//
function AddNumber(x){
    let Total = x;
    for(let i = 2;i<x;i++){
        if(x%i==0){
            console.log(i);
        }else{
            // console.log(i);
            // Total +=i;
            // return Total
        }
    }
    
}
console.log(AddNumber(5));

function xxx(a,b){
    let Checking = 0
    for(let i = a+1;i<b;i++){
        return Checking +=i
         
    }
}
console.log(xxx(3,8));