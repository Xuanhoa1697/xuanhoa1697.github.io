import menu from "./menu.js";

$(() => {
  let count = 0;
  let number = 0;
  let countText = 0;
  let text = "";
  let inputText = [
    "Lots of promotions are waiting for you !",
    "Explore this year's fashion culture and trends with us now !",
    "New products are available in the store !",
  ];

  $(`.menu-app`).on("click", () => {
    count++;
    menu($(`.menu-drop`), count);
  });
  function textPlaceHolder() {
    text += inputText[countText].charAt(number);
    $(`.text-wellcome`).text(text);
    number++;
    if (number >=100) {
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
    $(`.login`).css({
      display: "flex",
      "justify-content": "center",
    });
  });
  $(`.bi-x`).on(`click`,()=>{
    $(`.login`).css({
      display: "none",
    });
    event.preventDefault()
  })
  $(`.bi-x-lg`).on(`click`,()=>{
    $(`.search-item`).css({
      visibility:"hidden",
      opacity:0,
      top:"100px"
    })
    event.preventDefault()
  })

  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 600,
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
  $(`.bi-search`).on("click",()=>{
    event.preventDefault()
    $(`.search-item`).css({
      visibility:"visible",
      opacity:1,
      top:0
    })
  })
  $(window).on("scroll",()=>{
    $(`.search-item`).css({
      visibility:"hidden",
      opacity:0,
      top:"100px"
    })
    let x = document.documentElement.scrollTop
    if(x--){
      $(`.pricing`).css({
        border:"1px solid rgb(76,162,172)"
      })
      $(`.header-top`).css({
        top:"-30px"
      })
      $(`.bi-heart`).css({
        color:"black"
      })
      $(`.bi-search`).css({
        color:"black"
      })
      $(`.bi-person-circle`).css({
        color:"black"
      })
      $(`.header`).css({
        position:`fixed`,
        top:0,
        right:0,
        left:0,
        background:"white",
        height:"100px"
      })
      $(`.text-header-logo`).css({
        color:"black"
      })
      $(`.text-sign`).css({
        color:"black"
      })
    }else{
      $(`.pricing`).css({
        border:"none"
      })
      $(`.bi-heart`).css({
        color:"white"
      })
      $(`.bi-search`).css({
        color:"white"
      })
      $(`.bi-person-circle`).css({
        color:"white"
      })
      $(`.header-top`).css({
        top:0
      })
      $(`.pricing`).css({
        " background-Color":"white",
        "border":"none"
       })
      $(`.header`).css({
        position:`absolute`,
        top:"30px",
        right:0,
        left:0,
        background:"rgba(0, 0, 0, 0.4)",
        height:"100px"
      })
      $(`.text-header-logo`).css({
        color:"white"
      })
      $(`.text-sign`).css({
        color:"white"
      })
      $(`.menu-drop`).css({
        left:"-40%"
      })
      
    }
  })
  
});
 