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

