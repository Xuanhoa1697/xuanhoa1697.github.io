console.log(alert("Xin cào mọi người hôm nay tôi sẽ ôn tập lại các bài cơ bản vê js"));
let yourSelf={
    name :"Hòa",
    age:24,
}
console.log(yourSelf.name)
console.log(yourSelf["age"])

function number(a,b){
    return a*b

}
console.log(number(1,2));


// câu điều kiện if//
let a = 10
if(a >= 10){
     console.log("Xuân Hòa");
}
//câu điều kiện if else//
 let b =200;
 if(b < 10){
     console.log("Xuân Hòa");
 }else if(b= 10){
     console.log("HAha");
 }else{
     console.log("keke");
 }
 //
 function mark(a){
     if(a >=85){
         console.log("A");
     }else if(a >=75 && a <85){
         console.log("B");
     }else if(a>=40 && a<70){
         console.log("C");
     }else{
         console.log("D");
     }
 }
 mark(100)

 //

 function addNumber(x){

     if(x >0){
         console.log("Sô dương");
     }else if(x <0){
         console.log("Dố âm");
     }else{
         console.log("Số khôg");
     }
 }
 addNumber(1000)
 //
 function addNumber(x){
     if(x%2==0){
         console.log("Số chẵn");
     }else{
         console.log("Sô lẻ");
     }
 }
 addNumber(0)
 //
 function oneNumber(x){
     if(x%15==0){
         console.log('Chia hết');
     }else{
         console.log("Không chia hết");
     }
 }
 oneNumber(15);

 //
 function threeNumber(a,b,c){
     if(c == a +b){
         return a+b
     }else{
         return false
     }
 }
 console.log(threeNumber(1,2,4));
 //
 function mua(mua){
     switch(mua){
        case 0:
             console.log("CHủ nhật");
             break
        case 1:
             console.log("THỨ 2");
             break
        case 2:
             console.log("Thứ 3");
             break
        case 3:
             console.log("Thứ 4");
             break
        case 4:
             console.log("Thứ 5");
             break
        case 5:
             console.log("Thứ 6");
             break
        default:
            console.log("Không hợp lệ");
     }
 }
 mua(50)

 //Vòng lặp//
 function xxx(x){
     let resul = 0
     for(let i = 1;i <100;i++){
        if(i%2!==0){
            resul += i;
            
            
        }
     }
     return resul;
 }
 console.log(xxx(100));

 //
 function xnxx(x){
     let resul = 0
     for(let i = 1;i < x; i++){
         if(i % 15==0){
             resul += i
         }
     }
     return resul
 }
 console.log(xnxx(100));

 //
 function vlxx(x){
     for(let i = 0;i <=x; i++){
         if(i%2==0){
             console.log(`${i} là số chẵn`);
         }else{
             console.log(`${i} là số lẻ`);
             
         }
     }
 }
 vlxx(20)
 //
 function chuvi(r){
     return Math.PI*2*r;

 }
 console.log(chuvi(1));

 //
  function dientich(r){
      return Math.PI*r**2
  }
  console.log(dientich(1));
  //
  function convert(cm){
      return cm / 100;

  }
  console.log(convert(10));

  //
  function hour(m){
      return m / 60;
  }
  console.log(hour(15));

  //
  function addnumber(a,b,c){
      if(a==0 && b ==c){
          console.log("Pt vố số nghiệm");
      }else if(b!==c && a==0){
          console.log("pt vô nghiệm");
      }else{
          return (c-b)/a
      }
  }
  console.log(addnumber(0,3,3));

  //
  function deg(C){
      return C*1.8+32;
  }
  console.log(deg(1));

  //
  function BMI(h,w){
      let resul = w/h**2
      if(resul >50){
          console.log("Béo");
      }else if(resul<=50 && resul>35){
          console.log("Bình thường");
      }else{
          console.log("Gầy");
      }
  }
  BMI(1.8,75)

  // 
  function numBer(min,max){
      let resul = Math.floor(Math.random() * (max - min) + min)
      return resul
  }
  console.log(numBer(10-90));
  //
  function checkYear(month,year){
      switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("31 ngày");
            break
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 ngày");
            break
        case 2 :
            if(year%400==0){
                console.log("29 ngày");
            }else{
                console.log("28 ngày");
            }
            
            
            
      }
  }
  checkYear(12,2024)

  //
  function fizzBuzz(x){
      let z = x
      for(let i = 1;i<z;i++){
          if(i%15==0){
              console.log("FizzBuzz");
          }else if(i%3==0){
              console.log("Fizz");
          }else if(i%5==0){
              console.log("Buzz");
          }else{
              console.log(`${i}`);
            }
      }
  }
  fizzBuzz(100)
  //
  function thetich(r){
      return Math.Pi*r*r*r*4/3
  }
  console.log(thetich(10));
  //
  function sum(a,b){
      let resul = 0
      if(a<b){
          for(let i=a+1;i<b;i++){
              resul +=i
          }
      }else if(a>b){
          for(let i = b+1;i<a;i++){
              resul +=i
          }
      }else{
          resul = false
      }
     return resul
  }
  console.log(sum(8,8));

  //
  function nguyento(x){
      let resul = true
      if(x<2){
        resul = false
      }else{
          for(let i = 2;i<x;i++){
              if(x%i==0){
                  resul = false
              }
          }
      }

      
      return resul
  }
console.log(nguyento(97));

//
function nguyento1(x){
    let resul = 0
    if(x<2){
        resul = 0
    }else{
        for(let i  = 2;i<=x;i++){
            let z= 1;
            for(let q = 2;q<=Math.sqrt(i);q++){
                if(i%q==0){
                    z=0
                }
            }
            if(z==1){
                console.log(i);
            }
        }
    }
    // return resul
}
console.log(nguyento1(11));

//
function uoc(x){
    let resul = 1 + x;
    for(let i = 2;i<x;i++){
        if(x%i==0){
            resul +=i
        }
    }
    return resul
}
console.log(uoc(3));

//
function baitap(){
    let browser = "";
    if(browser="Edge"){
        alert("You've got the Edge!")
    }else if(browser ="Chrome"){
        alert("đasaddad")
    }
}
baitap("Chrome")

//
