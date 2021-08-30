//export cho index.js
export { email, password, iconPadding };

//Style input
let email = document.querySelector(".email");
let iconEmail = document.querySelector(".icon-email");
let password = document.querySelector(".password");
let iconPass = document.querySelector(".icon-pass");

email.addEventListener("click", () => {
  email.style.paddingLeft = "30px";
  iconEmail.style.transform = "translateX(0)";
  password.style.paddingLeft = "13px";
  iconPass.style.transform = "translateX(-25px)";
  email.style.borderColor = "#ED2553";
});
password.addEventListener("click", () => {
  password.style.paddingLeft = "30px";
  iconPass.style.transform = "translateX(0)";
  email.style.paddingLeft = "13px";
  iconEmail.style.transform = "translateX(-25px)";
  password.style.borderColor = "#ED2553";
});

let iconPadding = () => {
  password.style.paddingLeft = "13px";
  iconPass.style.transform = "translateX(-25px)";
  email.style.paddingLeft = "13px";
  iconEmail.style.transform = "translateX(-25px)";
};
