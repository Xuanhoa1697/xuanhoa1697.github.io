let formLogin = document.querySelector(".form-login");
let loginLink = document.querySelector(".login-link");
let loginLink1 = document.querySelector(".login-link1");
let x = document.querySelector(".bi-x-lg");
let menuLink1 = document.querySelector(".menu-link1");
let menuLink2 = document.querySelector(".menu-link2");
let menuLink3 = document.querySelector(".menu-link3");
let menuLink4 = document.querySelector(".menu-link4");
let menuLink1a = document.querySelector(".menu-link1a");
let menuLink2a = document.querySelector(".menu-link2a");
let menuLink3a = document.querySelector(".menu-link3a");
let menuLink4a = document.querySelector(".menu-link4a");
let editLogin = document.querySelector(".edit-login");
let biXlg = document.querySelector(".bi-x-lg");
let biCaretUpFill = document.querySelector(".bi-caret-up-fill");
let registerLink = document.querySelector(".register-link");
let registerLink1 = document.querySelector(".register-link1");
let biXCircleFill = document.querySelector(".bi-x-circle-fill");
let formRegis = document.querySelector(".form-regis");
let editRegis = document.querySelector(".edit-regis");
loginLink.addEventListener("click", function () {
  formLogin.style.position = "absolute";
  formLogin.style.right = "320px";
  formRegis.style.position = "fixed";
  formRegis.style.right = "-320px";
  event.preventDefault();
});
loginLink1.addEventListener("click", function () {
  formLogin.style.position = "absolute";
  formLogin.style.right = "320px";
  formRegis.style.position = "fixed";
  formRegis.style.right = "-320px";
  event.preventDefault();
});
x.addEventListener("click", function () {
  formLogin.style.position = "fixed";
  formLogin.style.right = "-300px";
});

menuLink1a.addEventListener("click", function () {
  menuLink1a.classList.add("menu-bold");
  menuLink2a.classList.remove("menu-bold");
  menuLink3a.classList.remove("menu-bold");
  menuLink4a.classList.remove("menu-bold");
  menuLink1.classList.add("menu-bold");
  menuLink2.classList.remove("menu-bold");
  menuLink3.classList.remove("menu-bold");
  menuLink4.classList.remove("menu-bold");
  let home = setInterval(() => {
    document.documentElement.scrollTop += 50;
    if (document.documentElement.scrollTop >= 136) {
      clearInterval(home);
    }
  }, 15);
  event.preventDefault();
});

menuLink2a.addEventListener("click", function () {
  menuLink1a.classList.remove("menu-bold");
  menuLink2a.classList.add("menu-bold");
  menuLink3a.classList.remove("menu-bold");
  menuLink4a.classList.remove("menu-bold");
  menuLink1.classList.remove("menu-bold");
  menuLink2.classList.add("menu-bold");
  menuLink3.classList.remove("menu-bold");
  menuLink4.classList.remove("menu-bold");
  let home = setInterval(() => {
    document.documentElement.scrollTop += 50;
    if (document.documentElement.scrollTop >= 1482) {
      clearInterval(home);
    }
  }, 15);
  event.preventDefault();
});
menuLink3a.addEventListener("click", function () {
  menuLink1a.classList.remove("menu-bold");
  menuLink2a.classList.remove("menu-bold");
  menuLink3a.classList.add("menu-bold");
  menuLink4a.classList.remove("menu-bold");
  menuLink1.classList.remove("menu-bold");
  menuLink2.classList.remove("menu-bold");
  menuLink3.classList.add("menu-bold");
  menuLink4.classList.remove("menu-bold");
  let home = setInterval(() => {
    document.documentElement.scrollTop += 50;
    if (document.documentElement.scrollTop >= 3071) {
      clearInterval(home);
    }
  }, 15);
  event.preventDefault();
});
menuLink4a.addEventListener("click", function () {
  menuLink1.classList.remove("menu-bold");
  menuLink2.classList.remove("menu-bold");
  menuLink3.classList.remove("menu-bold");
  menuLink4.classList.add("menu-bold");
  menuLink1a.classList.remove("menu-bold");
  menuLink2a.classList.remove("menu-bold");
  menuLink3a.classList.remove("menu-bold");
  menuLink4a.classList.add("menu-bold");
  let home = setInterval(() => {
    document.documentElement.scrollTop += 50;
    if (document.documentElement.scrollTop >= 2515) {
      clearInterval(home);
    }
  }, 15);
  event.preventDefault();
});
menuLink1.addEventListener("click", function () {
  menuLink1a.classList.add("menu-bold");
  menuLink2a.classList.remove("menu-bold");
  menuLink3a.classList.remove("menu-bold");
  menuLink4a.classList.remove("menu-bold");
  menuLink1.classList.add("menu-bold");
  menuLink2.classList.remove("menu-bold");
  menuLink3.classList.remove("menu-bold");
  menuLink4.classList.remove("menu-bold");
  let home1 = setInterval(() => {
    document.documentElement.scrollTop -= 50;
    if (document.documentElement.scrollTop == 0) {
      clearInterval(home1);
    }
  }, 15);
  event.preventDefault();
});

menuLink2.addEventListener("click", function () {
  menuLink1a.classList.remove("menu-bold");
  menuLink2a.classList.add("menu-bold");
  menuLink3a.classList.remove("menu-bold");
  menuLink4a.classList.remove("menu-bold");
  menuLink1.classList.remove("menu-bold");
  menuLink2.classList.add("menu-bold");
  menuLink3.classList.remove("menu-bold");
  menuLink4.classList.remove("menu-bold");
  let home = setInterval(() => {
    if (document.documentElement.scrollTop >= 1482) {
      document.documentElement.scrollTop -= 50;
      if (document.documentElement.scrollTop <= 1482) {
        clearInterval(home);
      }
    } else {
      document.documentElement.scrollTop += 50;
      if (document.documentElement.scrollTop >= 1482) {
        clearInterval(home);
      }
    }
  }, 15);
  event.preventDefault();
});
menuLink3.addEventListener("click", function () {
  menuLink1a.classList.remove("menu-bold");
  menuLink2a.classList.remove("menu-bold");
  menuLink3a.classList.add("menu-bold");
  menuLink4a.classList.remove("menu-bold");
  menuLink1.classList.remove("menu-bold");
  menuLink2.classList.remove("menu-bold");
  menuLink3.classList.add("menu-bold");
  menuLink4.classList.remove("menu-bold");
  let home = setInterval(() => {
    if (document.documentElement.scrollTop >= 3071) {
      document.documentElement.scrollTop -= 50;
      if (document.documentElement.scrollTop <= 3071) {
        clearInterval(home);
      }
    } else {
      document.documentElement.scrollTop += 50;
      if (document.documentElement.scrollTop >= 3071) {
        clearInterval(home);
      }
    }
  }, 15);
  event.preventDefault();
});
menuLink4.addEventListener("click", function () {
  menuLink1.classList.remove("menu-bold");
  menuLink2.classList.remove("menu-bold");
  menuLink3.classList.remove("menu-bold");
  menuLink4.classList.add("menu-bold");
  menuLink1a.classList.remove("menu-bold");
  menuLink2a.classList.remove("menu-bold");
  menuLink3a.classList.remove("menu-bold");
  menuLink4a.classList.add("menu-bold");
  let home = setInterval(() => {
    if (document.documentElement.scrollTop >= 2515) {
      document.documentElement.scrollTop -= 50;
      if (document.documentElement.scrollTop <= 2515) {
        clearInterval(home);
      }
    } else {
      document.documentElement.scrollTop += 50;
      if (document.documentElement.scrollTop >= 2515) {
        clearInterval(home);
      }
    }
  }, 15);
  event.preventDefault();
});

registerLink.addEventListener("click", function () {
  formRegis.style.position = "absolute";
  formRegis.style.right = "462px";
  formLogin.style.position = "fixed";
  formLogin.style.right = "-300px";
  event.preventDefault();
});
registerLink1.addEventListener("click", function () {
  formRegis.style.position = "absolute";
  formRegis.style.right = "462px";
  formLogin.style.position = "fixed";
  formLogin.style.right = "-300px";
  event.preventDefault();
});
biXCircleFill.addEventListener("click", function () {
  formRegis.style.position = "fixed";
  formRegis.style.right = "-300px";

  event.preventDefault();
});

//js next prev
let sixImg = document.querySelector(".six-img-display");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let img = [`photo2222.png`,`gaixinh1.jpg`, `gaixinh2.jpg`, `gaixinh3.jpg`];
let slogan = [
`“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”`
    ,    
`"Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Nesciunt cupiditate ut quos illo quibusdam, expedita sed libero assumenda."`
    , 
`"Nha Trang is one of the most beautiful coastal cities in Vietnam. The last time I came here was 1 year ago.This place was wonderful."`
,
`"Last summer I had the opportunity to go to Phu Quoc. This is one of the great tourist destinations that I have been to. Phu Quoc is
 an island district."
`
,
`"People often say that Ho Chi Minh City is just a place to develop a career, and very few people choose HCM as a tourist destination. 
And I also think so, I think HCM is dusty and not suitable for travel."
`
];
let visiter = [`Founder Circle`,`Tourists`,`Visitor`,`Vloger`]
let nameAdd = [`Edward Newgate`,`Emily Emma`,` Laura Linda`,` Daniel Brian`];
let count = 0;
let textSix = document.querySelector(".text-six")
let sixName = document.querySelector(".six-name")
let forName = document.querySelector(".for-name")

prev.addEventListener("click", prevClick);

function prevClick() {
  if (count <= 0) count = img.length;
  console.log(count);
  count--;
  console.log(count);
  sixImg.setAttribute(`src`, img[count]);
  textSix.textContent = slogan[count]
  sixName.textContent = nameAdd[count]
  forName.textContent = visiter[count]
  next.addEventListener("click", nextClick);
  next.style.opacity = 1;
  if (count === 0) {
    prev.removeEventListener("click", prevClick);
    prev.style.opacity = 0.2;
  }
}
//=====================
next.addEventListener("click", nextClick);
function nextClick() {
  if (count >= img.length - 1) count = -1;
  console.log(count);
  count++;
  console.log(count);
  sixImg.setAttribute(`src`, img[count]);
  textSix.textContent = slogan[count]
  sixName.textContent = nameAdd[count]
  forName.textContent = visiter[count]
  prev.addEventListener("click", prevClick);
  prev.style.opacity = 1;
  if (count === 3) {
    next.removeEventListener("click", nextClick);
    next.style.opacity = 0.2;
  }
}

//=================

let displayNav = document.querySelector(".firt-content");
let displayNav1 = document.querySelector(".firt-content1");
let secondContent = document.querySelector(".second-content");
let threeContent = document.querySelector(".three-content");
let fourContent = document.querySelector(".four-content");
let fiveContent = document.querySelector(".five-content");
let sixContent = document.querySelector(".six-content");
let sevenContent = document.querySelector(".seven-content");
let backTop = document.querySelector(".bi-arrow-up-square-fill")
let ponsive = document.querySelector(".ponsive")
let ponsive1 = document.querySelector(".ponsive1")
backTop.addEventListener("click",()=>{
    let home1 = setInterval(() => {
        document.documentElement.scrollTop -= 150;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(home1);
        }
      }, 15);
      event.preventDefault()
})
function displayFixed() {
  displayNav1.style.top = 0;
  displayNav1.style.transition = "ease-out 1s all";
  formRegis.style.position = "fixed";
  formRegis.style.right = "-320px";
  formLogin.style.position = "fixed";
  formLogin.style.right = "-300px";
}
window.addEventListener("scroll", function () {
  console.info(document.documentElement.scrollTop);
  let x = document.documentElement.scrollTop;
  if (x >= 415) {
    displayFixed();
    backTop.style.right = "10px"
    ponsive1.style.bottom = "120px"
    ponsive.style.bottom = "70px"
  } else {
    displayNav1.style.top = "-60px";
    displayNav1.style.transition = "none";
    backTop.style.right = "-50px"
    ponsive1.style.bottom = "70px"
    ponsive.style.bottom = "20px"
  }
});

let date = document.querySelector(".date")
date.textContent =new  Date().toDateString("vi-VN",{
    weekday:"full",
    day:"numeric",
    month:"long",
    year:"numeric"
})
let number = 0
let chat =document.querySelector(".view-chat")
let biChatFill = document.querySelector(".bi-chat-fill")
biChatFill.addEventListener("click",()=>{
  number++;
  if(number % 2 !==0){
    chat.style.display = "block"
  }else{
    chat.style.display = "none"
  }
  event.preventDefault()
})
