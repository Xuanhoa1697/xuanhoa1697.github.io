let login = document.querySelector(".login");
let regis = document.querySelector(".regis");
let log = document.querySelector(".log");

log.addEventListener("click", function () {
  regis.style.backgroundColor = "rgb(238, 238, 238)";
});

regis.addEventListener("submit", function () {
  login.style.backgroundColor = "rgb(238, 238, 238)";
  regis.style.backgroundColor = "white";
});

login.addEventListener("click", function () {
  login.style.backgroundColor = "white";
  regis.style.backgroundColor = "rgb(238, 238, 238)";
});

//valid

let MXH1 = document.querySelector(".MXH1");
let MXH2 = document.querySelector(".MXH2");
let MXH3 = document.querySelector(".MXH3");

let edit = document.querySelector(".edit");
let textInner = document.querySelector(".text-inner");
let flag = true;
MXH1.addEventListener("click", function () {
  edit.style.left = "35px";
  textInner.textContent = `Đăng nhâp thành công với Google`;
  flag = false;

  event.preventDefault();
  if (flag == false) {
    setTimeout(function () {
      edit.style.left = "-350px";
    }, 1500);
  }
});

MXH2.addEventListener("click", function () {
  edit.style.left = "35px";
  textInner.textContent = `Đăng nhâp thành công với FaceBook`;
  flag = false;

  event.preventDefault();
  if (flag == false) {
    setTimeout(function () {
      edit.style.left = "-350px";
    }, 1500);
  }
});

MXH3.addEventListener("click", function () {
  edit.style.left = "35px";
  textInner.textContent = `Đăng nhâp thành công với PornHub`;
  flag = false;

  event.preventDefault();
  if (flag == false) {
    setTimeout(function () {
      edit.style.left = "-350px";
    }, 1500);
  }
});

//data//

const formInput = document.forms.loginInput;
let password = formInput.querySelector("#examplePass");
let passHepl = formInput.querySelector(".pass-help");
let email = formInput.querySelector("#exampleIEmail");
let emailHepl = formInput.querySelector(".email-help");

formInput.addEventListener("submit", function () {
  event.preventDefault();
  let isValid = true;
  const emailValue = email.value;
  const passValue = password.value;
  let regexEmail1 = /[a-z]+[0-9]+@[a-z]+.[a-z]{2,}$/;
  let regexEmail2 = /[a-z]+@[a-z]+.[a-z]{2,}$/;
  let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/; //8 ký tư tói thiểu 1 số 1 chữ
  if (
    (regexEmail1.test(emailValue) || regexEmail2.test(emailValue)) &&
    regexPass.test(passValue)
  ) {
    isValid;
    edit.style.left = "35px";
    textInner.textContent = `Đăng nhâp thành công!!!`;

    
  } else if (
    (regexEmail1.test(emailValue) == false ||
      regexEmail2.test(emailValue) == false) &&
    regexPass.test(passValue)==true
  ) {
    emailHepl.textContent = "Email không hợp lệ";
    setTimeout(function () {
      emailHepl.textContent = "";
      isValid = false;
    }, 1500);
  } else if (
    (regexEmail1.test(emailValue) == true ||
      regexEmail2.test(emailValue) == true) &&
    regexPass.test(passValue) == false
  ) {
    passHepl.textContent =
      "Mật khẩu gồm 8-20 ký tự gồm tối thiểu 1 chữ và 1 số";
    setTimeout(function () {
      passHepl.textContent = "";
      isValid = false;
    }, 2000);
  } else if((regexEmail1.test(emailValue) == false ||
    regexEmail2.test(emailValue) == false) &&
    regexPass.test(passValue)==false
    ){
        emailHepl.textContent = "Nhập lại Email";
        passHepl.textContent = "Nhập lại mật khẩu";
        setTimeout(function () {
            passHepl.textContent = "";
            emailHepl.textContent = "";
            isValid = false;
        }, 2000);
    }

  if (
    (emailValue == "" || emailValue == null) &&
    (passValue == "" || passValue == null)
  ) {
    isValid = false;
    emailHepl.textContent = "Không được bỏ trống Email @@";
    passHepl.textContent = "Không được bỏ trống Password @@";
    email.style.borderColor = "red";
    password.style.borderColor = "red";
    setTimeout(function () {
      emailHepl.textContent = "";
      passHepl.textContent = "";
      email.style.borderColor = "rgb(192, 192, 192)";
      password.style.borderColor = "rgb(192, 192, 192)";
    }, 1200);
  } else if (emailValue == "" || emailValue == null) {
    isValid = false;
    emailHepl.textContent = "Không được bỏ trống Email @@";
    email.style.borderColor = "red";
    setTimeout(function () {
      emailHepl.textContent = "";

      email.style.borderColor = "rgb(192, 192, 192)";
    }, 1200);
  } else if (passValue == "" || passValue == null) {
    isValid = false;
    passHepl.textContent = "Không được bỏ trống Password @@";
    password.style.borderColor = "red";
    setTimeout(function () {
      passHepl.textContent = "";

      password.style.borderColor = "rgb(192, 192, 192)";
    }, 1200);
  }

  if (isValid) {
    setTimeout(function () {
        edit.style.left = "-350px";
      }, 1500);
  }
});
