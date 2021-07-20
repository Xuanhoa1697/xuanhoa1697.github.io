//Không có tham số//
function sayHello() {
    console.log("Xin chào các bạn");
}
sayHello();
sayHello();
sayHello();
sayHello();


//Có 1 tham số//
//Mục đích in ra dòng chữ xin chà ai đó//

function sayHello1(name){
    console.log("Xin chào " + name);
}
sayHello1("Xuân Hòa");
sayHello1("Đinh xuân Hòa");

//2 tham số

function sayHello2(name, year) {
    console.log("tên ", name);
    console.log("tuổi " , 2021 - year);
}
    sayHello2("Ngô văn B", 1997);
    sayHello2("Đinh Xuân Hòa", 1997);
    sayHello2();

    //ES6
    function sayHello3(name="nguyễn văn A",year="2005"){
        console.log("tên ", name);
        console.log("tuổi " , 2021 - year);
    }
    sayHello3();
    sayHello3("Đinh Xuân Hòa");

    //func trả về kết quả//
    function sum(a,b){
        let result= a + b;
        return a + b;
    }
    let data =sum(3,4);
    console.log(data);

    function printNumber(number){
        console.log(number);
    }
    let data1 =sum(5,5);
    printNumber(data1);


    //bài tập//
    function hello(){
        console.log("Xin chào các bạn!!!");
    }
    hello();

    function hello1(say) {
        console.log("Xin chào " + say);
    }
    hello1("Xuân Hòa");


    function sum(x,y){
        return x + y;
    }
    console.log(sum(4,5));


    function x2(x,x){
        return x * x;
    }
    console.log(x2(9,9));



    function century(x){
        let aswer = Math.ceil(x / 100);
        return aswer;
    }
    console.log(century(0));
    //es6
    function sayHello(name){
        console.log(`Xin chào"${name}"`);
    }
    sayHello("ĐInh xuân hòa")