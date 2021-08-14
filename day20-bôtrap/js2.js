



let exName = document.querySelector("#name-value")
let nameHelp = document.querySelector(".name-help")


let exEmail= document.querySelector("#emailValue")
let emailRegisHelp = document.querySelector(".email-gis-help")

let exPhone = document.querySelector("#phone-value")
let phoneHelp = document.querySelector(".phone-help")


let exPass = document.querySelector("#passGitValue")
let passGisHelp = document.querySelector(".pass-gis-help")

let passConfirm = document.querySelector("#passConfirm")
let passConfirmHelp = document.querySelector(".pass-confirm-help")

const formRegis = document.forms.regisForm




formRegis.addEventListener("submit",function(){
    event.preventDefault()
    const naValue = exName.value;
    const emailValue = exEmail.value;
    const phoneValue = exPhone.value;
    const passGisValue = exPass.value;
    const passConfirmValue = passConfirm.value;


    let regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/
    let regexEmail1 = /[a-z]+[0-9]+@[a-z]+.[a-z]{2,}$/;
    let regexEmail2 = /[a-z]+@[a-z]+.[a-z]{2,}$/;
    let regexPhone = /((09|03|07|08|05)+([0-9]{8})\b)$/;
    let regexPass1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
     let flag1=false
     let flag2=false
     let flag3=false
     let flag4=false
     let flag5=false


    if(!(regexName.test(naValue))){
        nameHelp.textContent="Tên không hợp lệ"

    }else{
        nameHelp.textContent=""
        flag1=true
    }
     if((regexEmail1.test(emailValue) ==true) ||
     (regexEmail2.test(emailValue))==true){
        emailRegisHelp.textContent=""
        flag2=true
    }else{
        emailRegisHelp.textContent="Email không hợp lệ"
    }

    if(!(regexPhone.test(phoneValue))){
        phoneHelp.textContent="Số điện thoại không đúng"
    }else{
        phoneHelp.textContent=""
        flag3=true
    }

    if(!(regexPass1.test(passGisValue))){
        passGisHelp.textContent = "Mật khẩu gồm 8 ký tự tối thiểu 1 chữ và 1 số!"
    }else{
        passGisHelp.textContent = ""
        flag4=true
    }
    if(!(regexPass1.test(passConfirmValue)) && !(passConfirmValue===passGisValue)){
        passConfirmHelp.textContent="Không trùng mật khẩu hiện tại!"
    }else{
        passConfirmHelp.textContent=""
        flag5=true
    }

    if(flag1==true && flag2==true && flag3==true && flag4==true && flag5==true){
        alert("Đã tạo tài khoản!!")
    }
    

    
})