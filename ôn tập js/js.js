//Bài1
//Viết chương trình:
// Khai báo một biến number nhận giá trị số bất kỳ
// Kiểm tra number là số dương, âm, hay bằng 0 và in kết quả ra console

function checkNumber(x) {
  if (x > 0) {
    console.log("Số dương");
  } else if (x < 0) {
    console.log("Số âm");
  } else {
    console.log("Số 0");
  }
}
checkNumber(5);

//Bài 4
// Viết chương trình:
// Khai báo một biến number là một số nguyên dương bất kỳ
// Kiểm tra và in ra number có chia hết cho cả 3 và 5 hay không

function number(x) {
  if (typeof x === "number") {
    if (x % 5 == 0 && x % 3 == 0) {
      console.log("Chia hết");
    } else {
      console.log("Không chia hết");
    }
  } else {
    console.log("Không phải số");
  }
}

number(15);

//Bài 2
// Viết chương trình:
// Khai báo một biến number nhận giá trị số nguyên bất kỳ
// Kiểm tra number là chẵn hay lẻ và in kết quả ra console

function addNumber(x) {
  if (x % 2 == 0) {
    console.log("số chẵn");
  } else {
    console.log("số lẻ");
  }
}

addNumber(2);

//Bài3
//Bài 3
// Viết chương trình:
// Khai báo 2 biến a, b nhận giá trị số nguyên bất kỳ
// Kiểm tra và in ra số lớn hơn

function more(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
more(1, 2);

//Bài 5
//Bài 5
// Viết chương trình:
// Khai báo 2 biến a, b nhận giá trị số bất kỳ, tương ứng với hệ số phương trình bậc 1 (ax + b = 0)
// Tính và in ra kết quả nghiệm (root) phương trình với 2 giá trị đó
// 💡 Chú ý điều kiện a = 0, PT vô nghiệm

function comboNumber(a, b) {
  if ((a = 0 && b != 0)) {
    console.log("pt vô nghiệm");
  } else if (a != 0 && b == 0) {
    console.log((x = 0));
  } else if (a != 0 && b != 0) {
    console.log((x = -b / a));
  }
}
comboNumber(1, 2);

//Bài 6
// Viết chương trình:
// Khai báo 3 biến a, b, c nhận giá trị số bất kỳ (a != 0), tương ứng với hệ số phương trình bậc 2 (quadratic equation) ax2 + bx + c = 0
// Giải phương trình ứng với 3 giá trị đó
// In kết quả ra console
// 💡 Tính delta (b2 - 4ac)
// Nếu delta > 0, PT có 2 nghiệm phân biệt (-b ± √b2 - 4ac) / 2
// Nếu delta = 0, PT có 2 nghiệm kép -b / 2a
// Nếu delta < 0, PT vô nghiệm

function add(a, b, c) {
  let total;
  if (a != 0) {
    let resul = b ** 2 - 4 * a * c;
    if (resul > 0) {
      total = (-b + Math.sqrt(b * 2) - 4 * a * c) / 2;
      return total;
    } else if (resul == 0) {
      total = -b / (2 * a);
      return resul;
    } else {
      console.log("pt vô nghiệm");
    }
  } else {
    console.log("pt vô nghiệm");
  }
}
add(0, 5, 3);

//Bài 7
// Viết chương trình:
// Khai bao 3 biến a, b, c nhận giá trị số ngẫu nhiên
// Kiểm tra số lớn nhất trong 3 số và in kết quả ra console

function moreNumber(a, b, c) {
  if (a > b && a > c) {
    console.log("Số lớn nhất là", a);
  } else if (b > a && b > c) {
    console.log("Số lớn nhất là", b);
  } else if (c > a && c > b) {
    console.log("Số lớn nhất là, c");
  } else {
    console.log("Bằng nhau");
  }
}

moreNumber(1, 0, 0);

//Bài 8
// Viết chương trình:
// Khai báo biến year là một số nguyên dương tương ứng với năm bất kỳ
// Kiểm tra year có phải năm nhuận hay không và in ra console
// 💡 Năm nhuận là năm có số năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100. Ví dụ:
// 2000 là năm nhuận vì chia hết cho 400
// 2004 là năm nhuận vì chia hết cho 4 và không chia hết cho 100
// 2100 không phải năm nhuận vì chia hết cho 100

function checkYear(y) {
  if (y % 400 == 0) {
    console.log(y, " là năm nhuận");
  } else {
    console.log("k phản năm nhuận");
  }
}
checkYear(2001);

//Bài 9
// Viết chương trình:
// Khai báo 1 biến day nhận giá trị là một số nguyên dương từ 1 - 7, tương ứng với số ngày trong tuần
// Kiểm tra và in ra tên thứ tương ứng (ví dụ: 1 - Thứ 2)
// 💡 Đầu tuần là thứ 2, sử dụng switch case

let day = 2;
switch (day) {
  case 1: {
    console.log("thứ 2");
    break;
  }
  case 2: {
    console.log("thứ 3");
  }
}

// Bài 10
// Viết chương trình:
// Khai báo 2 biến year và month là 2 số nguyên dương tương ứng với một năm và một tháng bất kỳ trong năm
// Kiểm tra và in ra console số ngày trong tháng đó
// 💡 Sử dụng switch case 💡 Số ngày trong tháng
// Tháng 1, 3, 5, 7, 8, 10 và 12 có 31 ngày
// Tháng 4, 6, 9, 11 có 30 ngày
// Tháng 2 nếu là năm nhuận có 29 ngày, nếu không phải năm nhuận là 28 ngày

function checkIdel(month, year) {
  switch (month) {
    case 1: {
      console.log("31 ngày");
      break;
    }
    case 3: {
      console.log("31 ngày");
      break;
    }
    case 5: {
      console.log("31 ngày");
      break;
    }
    case 7: {
      console.log("31 ngày");
      break;
    }
    case 8: {
      console.log("31 ngày");
      break;
    }
    case 10: {
      console.log("31 ngày");
      break;
    }
    case 12: {
      console.log("31 ngày");
      break;
    }
    case 4: {
      console.log("30 ngày");
      break;
    }
    case 6: {
      console.log("30 ngày");
      break;
    }
    case 9: {
      console.log("30 ngày");
      break;
    }
    case 11: {
      console.log("30 ngày");
      break;
    }
    case 2: {
      if (year % 400 == 0) {
        console.log("29 ngày");
        break;
      } else {
        console.log("28 ngày");
        break;
      }
    }
  }
}
checkIdel(3, 2000);

//bài 12
// Viết chương trình:
// Khai báo biến point nhận giá trị là một số tương ứng với điểm của sinh viên (0 <= point <= 10)
// Quy đổi ra thang điểm chữ và in kết quả ra console
// 💡 Thang điểm chữ
// 0 - 3.99 => F
// 4.0 - 5.49 => D
// 5.5 - 6.99 => C
// 7.0 - 8.49 => B
// 8.5 - 10 => A

function checkPoint(point) {
  if (point > 0 && point < 4.0) {
    console.log("F");
  } else if (point >= 4.0 && point < 5.5) {
    console.log("A");
  }
}
checkPoint(4.3);

//bài cuối

function login(a, b) {
  let arrA = String(a).split("");
  let arrB = String(b).split("");
  if (arrA[arrA.length - 1] === arrB[arrB.length - 1]) {
    console.log("Trùng giá trị cuối");
  } else {
    console.log("khong trùng");
  }
}
login("abc", "qxc=p");

//Bài 1
// Viết hàm calc(op, a, b):
// Nhận 3 tham số op là toán tử + - * /, a, b là 2 số bất kỳ
// Tính và trả về kết quả phép tính tương ứng

function calc(op, a, b) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else {
    return a / b;
  }
}
console.log(calc("+", 8, 4));

// Bài 2
// Viết hàm isPrime(n):
// Nhận 1 tham số n là một số nguyên dương
// Kiểm tra n có phải số nguyên tố hay không, trả về kết quả là true hoặc false

function isPrime(n) {
  let resul = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      resul = false;
    }
  }
  return resul;
}

console.log(isPrime(7));

//Fibonaci

function fibonaci(n) {
  let fi = [1, 2];

  if (typeof n === "number" && n < 2 && n > 30) {
    console.log(
      "Chương trình in dãy Fibonacci, yêu cầu tham số 'n' phải là một số nguyên dương > 2 và nhỏ hơn 50"
    );
    return;
  } else {
    for (let i = 3; i <= n; i++) {
      fi[i] = fi[i - 2] + fi[i - 3];
      return fi;
    }
  }
}
console.log(fibonaci(10));

// bài4 Bài 4
// Viết hàm sumPrime(a, b):

// Nhận 2 tham số a, b là 2 số nguyên bất kỳ (và a < b)
// Tính tổng các số nguyên tố trong khoảng từ a đến b và trả về kết quả
// 💡 Sử dụng hàm isPrime ở bài 2
function sumPrime(a, b) {
  let resul = 0;
  for (let i = a; i <= b; i++) {
    for (let z = 2; z <= i; z++) {
      if (i % z != 0) {
        resul += i;
        return resul;
      }
    }
  }
}

console.log(sumPrime(2, 10));

// bÀi strong

function strong(a) {
  let resul = Array.from(String(a));
  console.log(resul);
  let total = 1;
  let end = 0;
  for (let i = 0; i < resul.length; i++) {
    for (let z = 1; z <= Number(resul[i]); z++) {
      total *= z;
    }
    end += total;
  }
  if (end === a) {
    console.log("Strong");
  }
}

console.log(strong(346));

//Viết hàm randInt(a, b):

// Nhận 2 tham số a, b bất kỳ
// Kiểm tra nếu a và b là một trong các trường hợp dưới đây:
// a hoặc b không phải là một số
// a hoặc b không phải số nguyên
// Thì in ra console thông báo "Chương trình tạo số nguyên ngẫu nhiên trong khoảng từ a -> b, yêu cầu a, b là 2 số nguyên"
// Nếu không phải các trường hợp trên, tạo một số ngẫu nhiên trong khoảng từ a đến b (bao gồm cả b) và trả về kết quả (lưu ý a có thể lớn hơn b, trong trường hợp đó phải đổi giá trị)


function addChecking(a,b){
    let random;
    if(typeof a !== "number" || typeof b !=="number" || String(a).includes(".")||String(a).includes(".")){
         console.log("Chương trình tạo số nguyên ngẫu nhiên trong khoảng từ a -> b, yêu cầu a, b là 2 số nguyên");
     }else{
        random = Math.floor(Math.random() * (b-a) + a)
        console.log(random);
     }
}
addChecking(1,15)

//bài 8


function func(){
    let x = 7 + 2
    return x
}


function calc(){
    console.log(func);
}
calc(func())


let square = function(n){
    let resul = n**2
    return resul
}

console.log(square(7));

calc(square(7))

//

console.log(1+1);
console.log(1/2);


// let name = prompt()

console.log("tên tôi là", name);

let yourSelf = {
    name:"Hòa",
    age:24
}

console.log(yourSelf.name);
console.clear()

let a = 1;
let b =2;

let c = a +b
console.log(c);

function variable(a){
    a= "string"
    console.log(typeof a);


}
 
variable(10)

let arr = [1,2];

for(let i of arr){
    console.log(i , typeof arr);
}


//loop

//BÀi 1

let n = 10;
let total=0;
for(let i = 0;i<=10;i++){
    total +=i 
}

console.log(total);

function FizBuz(n){
    for(let i=0;i<=n;i++){
        if(i%15==0){
            console.log(i,"FizBuz");
        }else if(i%3==0){
            console.log(i,"Fiz");
        }else if(i%5==0){
            console.log(i,"buz");
        }else{
            console.log(i);
        }
    }
}
FizBuz(100)

let m = 10
let alser =1;
for(let i = 1;i<=m;i++){
    alser *=i

}

let o = 20;
let checkTotal = o + 1
for(let i = 2;i<=o/2;i++){
    if(o % i== 0){
        checkTotal +=i

        
    }
   
}
console.log(checkTotal);