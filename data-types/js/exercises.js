// Bài 1

// Viết chương trình kiểm tra một giá trị có phải một string hay không
// value là giá trị nhận vào
function isString(value) {
    // return boolean
    return typeof value;
}
console.log(isString("keke"));
console.log(isString("Hihi"));



// Bài 2

// Viết chương trình chuyển đổi một chuỗi thành dạng title
// VD: hello World! -> Hello world!
// str là chuỗi nhận vào
function title(str) {
    // return string
    return str[0].toUpperCase()+str.slice(1).toLowerCase();
}
console.log(title("xuan Hòa Hú Ha ah HAhahahaha aha HA Kskljdsadsal A"));
console.log(title[0]);


// Bài 3

// Viết chương trình chuyển đổi một chuỗi thành dạng parameterize (url)
// Ví dụ: Chương trình Hello World -> chuong-trinh-hello-world
// str là chuỗi nhận vào
function parameterize(str) {
//     let addString = str;
//     addString = addString.toLowerCase().replace(" ","-")
//     return addString;
// }
// parameterize("Xin chào")

    // Loại bỏ các ký tự đặc biệt
    str = str.toLowerCase();

    // Loại bỏ ký tự có dấu
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");

    // Xóa các ký tự đặc biệt
    str = str.replace(/[^a-zA-Z0-9 ]/g, " ");
    // Loại bỏ nhiều dấu cách ở giữa (nếu có)
    str = str.replace(/\s{2,}/g, " ");
    // return value
    str = str.trim();
    str = str.replace(/ /g,"-");
    return str
}
console.log(parameterize("Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ."));



// Ví dụ cho đoạn văn sau
let para =
    "Chào các bạn! Mình xin tự giới thiệu, mình là Ba, các bạn có thể gọi mình là Ba, hoặc Bar, hoặc Three. Chúc các bạn làm bài vui vẻ.";

// Bài 4

// Viết chương trình tìm highlight (in hoa) tất các từ khóa xuất hiện trong đoạn văn
// VD: 'bạn' -> "Xin chào các BẠN! ..."
// key là từ khóa
// key không chứa ký tự đặc biệt
// Từ khóa phải là một từ riêng biệt (phía sau có dấu cách hoặc dấu câu)
// KHÔNG phân biệt chữ hoa chữ thường
// Code sẵn là gợi ý
function highlight(para, key) {
    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ ký tự đặc biệt
    // modifiedPara = modifiedPara.replace(/./g, " ");
    modifiedPara = modifiedPara.replace(/,/g, " ");
    modifiedPara = modifiedPara.replace(/!/g, " ");

    // // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toLowerCase() + " ";
    modifiedPara= modifiedPara.slice(0,modifiedPara.indexOf(modifiedKey))


    return modifiedPara


}
console.log(highlight(para,"bạn"));

// Bài 5

// Viết chương trình lấy ra câu đầu tiên xuất hiện từ khóa, đồng thời highlight (in hoa) từ khóa
// Code sẵn là gợi ý
function firstSentence(para, key) {
    // Chuyển đổi tất cả dấu kết thúc câu khác như !; thành .
    let onlyDot = para.replace(/!/g, ".");

    // Chuyển đổi thành viết thường
    let modifiedPara = para.toLowerCase();

    // Loại bỏ dấu kết thúc câu
    // modifiedPara = modifiedPara.replace(/./g, " ");
    modifiedPara = modifiedPara.replace(/,/g, " ");
    modifiedPara = modifiedPara.replace(/!/g, " ");

    // Thêm ký tự dấu cách cho key
    let modifiedKey = key.toLowerCase() + " ";
    // Nếu không có từ khóa, return null
    // Nếu có, return câu đó kèm highlight từ khóa
    modifiedPara = modifiedPara.slice(0,modifiedPara.indexOf(modifiedKey)) + modifiedKey.toLocaleUpperCase()
    return modifiedPara
}
console.log(firstSentence(para,"ba"));

// Bài 6

// Viết chương trình tính số ngày còn lại đến tết dương lịch năm sau
function daysLeft() {
    // return number
    let day = new  Date();
    let nextYear = new Date(day.getFullYear(), 12,1 );

    let daysLeft= nextYear - day;
    return parseInt(daysLeft /24 / 60 / 60 / 1000);
    
}
console.log(daysLeft());

// Bài 7

// Viết chương trình tính số tuổi theo ngày tháng năm sinh
// Tính chính xác theo ngày
// birthday là chuỗi ngày tháng năm sinh theo format "YYYY-MM-DD"
// Kiểm tra ngày tháng truyền vào có hợp lệ hay không
// Ví dụ birthday truyền vào và ngày thực tế tạo ra không khớp, hoặc birthday từ tương lai
// Nếu không hợp lệ thì trả về NaN
function calcAge(birthday) {
    // Nếu birthday không khớp format "YYYY-MM-DD"
    if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(birthday)) return NaN;
    let happyBirtDay = new Date(birthday);
    let nowDay = new Date();
    if(happyBirtDay!==nowDay){
        return NaN
    }else if(happyBirtDay.getFullYear() < nowDay.getFullYear()){
        return NaN
    }else if(happyBirtDay.getMonth()===nowDay.getMonth() || happyBirtDay.getMonth() < nowDay.getMonth() ){
        return nowDay.getFullYear() - happyBirtDay.getFullYear()
    }else{
        return nowDay.getFullYear() - happyBirtDay.getFullYear() - 1
    }
    

    
    // return number
    
}
console.log(calcAge("1997-06-01"));


// Bài 8

// Viết chương trình tạo mã màu HEX ngẫu nhiên
function randHex() {
    // return hex
    let Hex = "#"
    for(let i = 1;i<6;i++){
        let randoColor = Math.floor(Math.random() * 16)
        Hex += randoColor.toString(16)
        return Hex
    }
}
console.log(randHex());