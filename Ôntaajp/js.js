function checkNumber(x){
    let resul;
    resul = x**2
    return resul
}

console.log(checkNumber(100));


//
function checkYear(x){
    return Math.ceil(x/100)
}

console.log(checkYear(1999));



// fun
function cutStr(){
    let str  = "Xin chào mọi ngưi";
    let resul;
    resul = str.slice(0,12) + "..."
    return resul
    


}
console.log(cutStr());

let a = "đasadsadads"

console.log(a.slice(0,5) + "...");


//
function convertText(str){
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1).toLowerCase()
    return str
    
    
}
console.log(convertText("Xuan Hoa Đẹp Trai VÃi cả lồn"));

//
function check(arr){
    let min = arr[0];
    arr.forEach(function(i,index){
        if(min>i){
            min = i
        }
    });
    return min
}
console.log(check([6,5,,0.5,8,9]));

//

let arr = ["hòa","anh","dương","mai","trung","thành"];

function convert(){
    arr.sort();
    return arr;
}

console.log(convert());

//
let text = "123";

function upText(){
    let resul = "";
    for(let i = 0;i<10;i++){
        resul += (text + "-")
       
        
    }
    return resul.slice(0,resul.substring(text.length-1))

}
console.log(upText());

//Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.

function number(x){
    let resul = 1;
    for(let i = 1;i<=x;i++){
        resul = resul * i 
        
    }
    return resul;  
}
console.log(number(6));

// Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". 
// Gợi ý: 1 chuỗi tương tự 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.

 let newString = "Xuân Hòa Đẹp trai vãi cả lồn"
function Str(){
    let arr=[];
    for(let i = 0;i<newString.length;i++){
       arr.push(newString[i])
    }

    return arr.reverse().join("")
}


console.log(Str());



// Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và 
// in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write()).

let listName = ["Hòa","Đức","Trang","mẹ","bố"];

listName.sort(function(){
    let resul;
    for(let i= 0;i<listName.length;i++){
        resul = "stt " + i + " " + listName[i] 
        console.log(resul);
    }

})



//


let arr1 = [5,3,6,9,7,8,5,4,9]
arr1.map(function eh(value,index){
    newArr1=value%2
    return newArr1
})


let body = document.body
for(let i =0;i<=100;i++){
    if(i%2==0){
        
        
    }
}


//Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, 
// kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.




function addNumber(min,max){
    if(typeof min =="number" && typeof max == "number"){
        if(min - max >0){
            console.log(min);
        }else{
            console.log(max);
        }
    }
}

addNumber(3,5);




//
function bonusNumber(x){
    let resul=1
    if(typeof x =="number" && x >=0){
        for(let i=1;i<=x;i++){
            resul *=i
        }
    }
    return resul
}

console.log(bonusNumber(9));

//
let arr3 = [1,2,3,4,5,6,7,8,4,10]
let newArr=[]
function checkArr(){
    let miinX = 1
    arr3.sort(function(){
        for(let i of arr3){
            if(i%2==0 && miinX < i){
                newArr.push(i)
            }
            
        }
        
    })
    return newArr
}

console.log(checkArr());


//

let newObj={
    username: "username",
    password: "secret",
    confirm: "secret"
  }


function checkLogin(){
    if((newObj.username !== "") && (newObj.password.length >=6 
        && newObj.password.length<=32)
        && newObj.confirm === newObj.password ){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
}


checkLogin()

//



/* Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. 
Kiểm tra tham số đầu vào phải là 1 số nguyên >= 0, sau đó tính giai thừa và in ra kết quả.
*/ 

function checkX(n){
    let resul =1
    if(typeof n =="number" && n>=0){
        for(let i = 1;i<=n;i++){
            resul *=i
        }
    }
    return resul
}

console.log(checkX(5));


//




function checkArr5(){
    let arr5 = [7,8,9,5,4,1,2,3,6,4,7,8,9,4,5,2,4,7]
    let newArr5=[];
    for(let i = 0;i<arr5.length;i++){
        if(arr5[i]%2==0){
            newArr5.push(arr5[i])
        }
    }

    return newArr5.sort(function(a,b){
        return b-a
    })

}

console.log(checkArr5());

//

let bolean = [false,false,false,true,true,false]

bolean.filter(function(value,index){
   if( value.index ===true){
       console.log(index);
   }
})


function checkBolen(){
    for(let i=0;i<bolean.length;i++){
        if(bolean[i]===true){
            return i
        }
    }
}

console.log(checkBolen());