// let money=10000
// switch(money){
//     case 12000:
//         console.log(`cà phê sữa`)
//         break
//     case 10000:
//         console.log(`cà phê đá`)
//         break
//     case 8000:
//         console.log(`Sting dâu`)
//         break
//     case 3000:
//         console.log(`Trà đá`)
//         break
//         default:
//             console.log(`Không có đồ uống phù hợp`);
// }
// console.log(`====================================`);
// let number=2
// switch(number){
//     case 2:
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//         console.log(`Số chẵn`);
//         break
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//         console.log(`Số lẻ`);
//         break
//     default:
//         console.log(`So không hợp lệ`);
//         break
// }


// function checkNumber(number){
//     switch(number){
//         case 2:
//         case 4:
//         case 6:
//         case 8:
//         case 10:
//             console.log(`Số chẵn`);
//             break
//         case 1:
//         case 3:
//         case 5:
//             case 7:
//         case 9:
//             console.log(`Số lẻ`);
//             break
//         default:
//             console.log(`So không hợp lệ`);
//             break
// }
// }
// checkNumber(11)

// function checkDay(day){
//     switch(day){
//         case 0:
//             console.log(` Chủ Nhật`);
//             break
//         case 1:
//             console.log(` Thứ hai`);
//             break
//         case 2:
//              console.log(` Thứ ba`);
//             break
//         case 3:
//             console.log(` Thứ tư`);
//                break
//         case 4:
//             console.log(` Thứ Năm`);
//             break
//         case 5:
//                 console.log(` Thứ Sáu`);
//                 break
//          case 6:
//                 console.log(` Thứ Bảy`);
//                 break
//         default:
//             console.log(` Không có ngày Hợp lệ`);

//     }
// }
// checkDay(6)
// console.log("==========================");
// function checkSeason(month){
//     switch(month){
//         case 1:
//         case 2:
//         case 3:
//             console.log(` Mùa Xuân`);
//             break
//         case 4:
//         case 5:
//         case 6:
//             console.log(` Mùa Hạ`);
//             break
//         case 7:
//         case 8:
//         case 9:
//             console.log(` Mùa Thu`);
//             break
//         case 10:
//         case 11:
//         case 12:
//             console.log(` Mùa Đông`);
//             break
//         default:
//             console.log(` Không có mùa Hợp lệ`);

//     }
// }
// checkSeason(10)
console.log(`=======================`);


for(let i = 1;i <= 30; i=i+1){
    // if(i==20){
    //     console.log(` Ngày ${i} bị ốm`);
    //     break
    // }




    if(i%2==1){
        continue // bỏ qua vòng lặp ngày lẻ
    }
    console.log(`Ngày ${i} thức dậy lúc 7h`);
}

////tính tổng tiền tiết kiệm
//tính tổng tiền trong vòng 10 ngày.Mỗi ngày 100.000đ


let totalMoney=0
for(let day=1; day <=10 ; day=day+1){
    //Số tiền hiện tại bằng tổng số tiền các ngày trước đó cộng lại//
    if(day==8){
        break
    }
    if(day<5){
        totalMoney = totalMoney +100000
    }else{
        totalMoney = totalMoney + 200000
    }
    
    
    
}
console.log(totalMoney);


//bài tập
let total=0
for(x=0;x<=100;x=x+1){
    if(x%2==1){
        total= total + x
    }else{
        continue
    }
}
console.log(total);


// bài 2


let checktotal=0
let y =1
for(y;y<=100;y=y+1){
    if(y%3==0 && y%5==0){
        checktotal=checktotal + y
    }else{
        continue
    }
}
console.log(checktotal);

let checkingNumber=0
for(let z=0;z<101;z++){
    if(z%2==0){
        console.log(` ${z} là số chẵn`);
    }else{
        console.log(` ${z} là số lẻ`);
    }
}
function repeatString(font){
        let resul =``
        for(let i = 1;i<=10;i++){
            resul+=font
        }
        console.log(resul);
        return resul
}
repeatString("a")


