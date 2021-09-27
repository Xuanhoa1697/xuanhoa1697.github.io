import menu from "./menu.js";

$(() => {
  let count = 0;
  let numnerLogin = 0;
  let number = 0;
  let countText = 0;
  let text = "";
  let inputText = [
    "Search for your perfect!",
    "Find yourself the best shoes!",
    "@ShoseName + @FashionName you need to find!",
  ];

  $(`.menu-app`).on("click", () => {
    count++;
    menu($(`.app1`), $(`.app2`), $(`.app3`), $(`.menu-drop`),$(`.drop-right`), count);
  });
  function textPlaceHolder() {
    text += inputText[countText].charAt(number);
    $(`.text-wellcome`).text(text);
    number++;
    if (number >=80) {
      text = "";
      number = 0;
      countText++;
      if (countText >= inputText.length) {
        countText = 0;
      }
    }
  }
  let set = setInterval(textPlaceHolder, 80);

  $(`.sign`).on("click", () => {
    event.preventDefault();
    numnerLogin++;
    if (numnerLogin % 2 == 0) {
      $(`.login`).css({
        display: "none",
      });
    } else {
      $(`.login`).css({
        display: "flex",
        "justify-content": "center",
      });
    }
  });

  $(".mr-img").slick({
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
  $(`#slick-slide-control00`).text("")
  $(`#slick-slide-control01`).text("")
  $(`#slick-slide-control02`).text("")
  $(`#slick-slide-control03`).text("")
  $(`#slick-slide-control04`).text("")

  $(window).on("scroll",()=>{
    let x = document.documentElement.scrollTop
    if(x>0){
      $(`.header`).css({
        position:`fixed`,
        top:"30px",
        right:0,
        left:0,
        background:"white",
        height:"80px"
      })
      $(`.text-logo`).css({
        color:"black"
      })
      $(`.search-header`).css({
        "border-color":"black"
      })
      $(`.text-header-logo`).css({
        color:"black"
      })
      $(`.app1`).css({
        background:"black"
      })
      $(`.app2`).css({
        background:"black"
      })
      $(`.app3`).css({
        background:"black"
      })
      $(`.menu-app`).css({
        "border-color": "#0000 !important"
      })
      $(`.text-sign`).css({
        color:"black"
      })
    }else{
      $(`.header`).css({
        position:`absolute`,
        top:"30px",
        right:0,
        left:0,
        background:"none",
        height:"60px"
      })
      $(`.text-logo`).css({
        color:"white"
      })
      $(`.text-header-logo`).css({
        color:"white"
      })
      $(`.search-header`).css({
        "border-color":"white"
      })
      $(`.app1`).css({
        background:"white"
      })
      $(`.app2`).css({
        background:"white"
      })
      $(`.app3`).css({
        background:"white"
      })
      $(`.menu-app`).css({
        "border-color": "black "
      })
      $(`.text-sign`).css({
        color:"white"
      })
    }
  })
  
});
