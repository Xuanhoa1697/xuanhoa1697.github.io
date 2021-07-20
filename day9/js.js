// //alert pop-up//
// alert("Xin chào mọi người");
// //câu lệnh khai báo với let//
// // Bản thân//
// let yourSefl={
//     name:"Hòa",
//     fisrtName:"Đinh",
//     nickName:"Hòa Lò Vôi",
//     age: 18,
//     address:"Nam Định",
//     isMoney: true,
//     myBike:{
//         nameBike:"Wave @",
//         color:"Black",
//         maxSpeed:"300Km/h",
//         numberBike:"18F1-311.04",
//     },
// };
// console.log(typeof("isMoney"));
// //khai báo với const//
// const MYNUMBER ="034557578";

// let infomation = "myBike";
// //not notation//
// console.log("Thông tin bản thân");
// console.log(yourSefl.name);
// console.log("Họ tên đầy đủ:" + yourSefl.fisrtName +" " + yourSefl.name);
// console.log("Tuổi"+" "+ yourSefl.age);
// console.log("Biệt danh" + yourSefl["nickName"]);
// //barcket notation//
// console.log("Tôi không có tiền huhu:" + yourSefl["isMoney"]);

// console.log("info mybike", yourSefl.myBike);
// console.log("Số điện thoại của tôi:" + MYNUMBER);
// console.log(yourSefl.myBike);
// console.log(yourSefl[infomation]);


// //My Computer//
// //thông tin về My Computer//
//  let myComputer = {
//     nameComputer:"Dell Insprion",
//     ram:"1G",
//     card:"AMD",
//     info:{
//         color:"Black",
//         size:"15.6in",
//         usb:3.0,
//     },
//     plan:"1 years",
//  };
//  let user ="info";
// let future ="plan";

// //truy cập thuộc tính với dot nonation//
// console.log("Tên máy tính của tôi",myComputer.nameComputer);
// //Truy cập với brackest//
// console.log("Ram", myComputer["ram"]);
// console.log("Card đồ họa" + " ", myComputer.card);
// console.log("Thông tin máy tính của tôi:"," ",myComputer["info"]);
// console.log("Dự định thay máy trong", myComputer[future]);
// console.log(myComputer["info"]);
// console.log(myComputer[user]);
// console.log(myComputer["info"]["usb"]);


// // myPhone//
// let myPhone ={
//     namePhone:"SamSung",
//     model:"A51",
//     rom:"128G",
//     ram:"8G",
//     serriPhone:"R58MC1XF08H",
//     isVersionAndroid:true,
//     infoPhone:{
//         color:"Blue",
//         numberSim:2,
//         memoryCard:128,
//     },

// };
//  let users ="serriPhone";
//  //khai báo biến với const//
//  const imei =325455876645487


// //truy cập//
// console.log(myPhone.namePhone);
// console.log(myPhone.model +" " + myPhone["rom"]);
// console.log("Điện thoại của tôi có Ram" + " "+ myPhone.ram +" "+ "và Rom" + " "+ myPhone.rom);
// console.log("Thông tin về điện thoại của tôi có màu" + " "+ + myPhone.infoPhone.color + " và có Serri là " + myPhone[users]);
// console.log(imei);
// console.log(myPhone["isVersionAndroid"]);





// // Bài tập về hàm array//
// //khai báo hàm//
// let phone=["Iphone", "Samsung", "Xeomi", "Lenovo", "Huawei"]
// //truy cập bằng số thứ tự//
// console.log(phone["2"]);
// console.log(phone["0"]);



// // Bài tập về fumcion//

// function hoa(){
//     let use ={
//         age:24,
//         name:"Hòa",
//     };
//     console.log(use.age);
//     console.log(use["name"]);
// }
// hoa();


// //funcion()//
// //UserName//
// function iName(add) {
//     let infomation={
//         userName:"User Name",

//     };
//     console.log(infomation.userName + add);
// }
// iName("Hòa Lò Vôi");

// //birtday//
// function iDay(add) {
//     let infomation={
//         birtDay:"Birtday",
//     };
//     console.log(infomation["birtDay"] + add);
// }
// iDay("01/06/1997");

// //Email//
// function iDay(add) {
//     let infomation={
//         email:"Email",
//     };
//     console.log(infomation["email"] + add);
// }
// iDay("xuanhoa010697@gmail.com");

// // Phone//
// function iPhone(add) {
//     let infomation={
//         phone:"Phone",
//     };
//     console.log(infomation.phone + add);
// }
// iPhone("03455750**");

// // return//
//  function multifly(a ,b) {
//      return a * b;

//  }
//  console.log(multifly(3,4));
//  console.log(multifly(9,9));



//  //hàm Sum(arr,i,j)//


// let arrFont =["a", "b", "i", "j"]
// arrFont[2]=3;
// arrFont[3]=8;
// function sum(i,j) {
//     return i + j;
// }
// console.log(sum(arrFont[2],arrFont[3]));




