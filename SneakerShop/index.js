import menu from "./menu.js";

$(() => {
  $(`.bi-person-circle`).on("click", () => {
    event.preventDefault();
    $(`.modal-open`).removeAttr("style")
  });
  let $nav = Array.from($(`.nav-link`))
  $nav.forEach(nav=>{
    $(nav).on(`click`,()=>{
      $(`.nav-link`).removeClass("color-forcut")
      $(nav).addClass("color-forcut")
    })
  })
  $(`.bi-arrow-up-square-fill`).on("click", (e) => {
    let toTop = setInterval(() => {
      document.documentElement.scrollTop -= 50;
      console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop === 0) {
        clearInterval(toTop);
      }
    }, 15);
    e.preventDefault();
  });
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    // autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    prevArrow:`<i class="bi bi-chevron-compact-left position-absolute"></i>`,
    nextArrow:`<i class="bi bi-chevron-compact-right position-absolute"></i>`,
    adaptiveHeight:true
  });

  $(`.bi-search`).on("click", () => {
    $(`.span-search`).addClass("display-search")
      $(`.search-hidden`).addClass("display-hidden")
    
    event.preventDefault();
  });
  $(`.bi-x`).on("click", () => {
    $(`.span-search`).removeClass("display-search")
      $(`.search-hidden`).removeClass("display-hidden")

    event.preventDefault();
  });
  $(window).on("scroll", () => {
    console.log(document.documentElement.scrollTop);
    let x = document.documentElement.scrollTop;
    if (x>500) {
      $(`.list-shopping`).css({
        "margin-top":"90px"
      })
      $(`.dropdown-menu`).css({
        top:0,
        height:"350px",
      })
      $(`.content-body`).css({
        marginTop:"90px"
      })
      $(`.header-menu`).css({
       top:"-60px"
      })
      $(`.header`).css({
        top: 0,
        height:"90px"
      });
    } else {
      $(`.list-shopping`).css({
        "margin-top":"170px"
      })
      $(`.dropdown-menu`).css({
        top:0,
        height:"450px"
      })
      $(`.header-menu`).css({
        top:0
      })
      $(`.content-body`).css({
        marginTop:"170px"
      })   
      $(`.header`).css({
        top: "50px",
        height:"120px"
      });
    }
  });

  $(`.render-product`).slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight:true,
    adaptiveWidth:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  });
  let arrBorder = Array.from($(`.select-link`))
  arrBorder.forEach(select=>{
    $(select).on(`click`,()=>{;
      event.preventDefault()
      $(`.select-link`).removeClass(`border-active`)
      $(select).addClass(`border-active`)
    })
  })
  
  let arrHeart = Array.from($(`.bi-heart-fill`))
  arrHeart.forEach(heart=>{
    let numberHeart = 0
    $(heart).on(`click`,(()=>{
      event.preventDefault()
      
      numberHeart++
      if(numberHeart % 2 ==0){
        setTimeout(()=>{
          $(heart).css({
            color:"rgb(170, 170, 170)"
          })
        },1000)
      }else{
        setTimeout(()=>{
          $(heart).css({
            color:"rgb(197, 79, 79)"
          })
        },1000)
      }
    }))
  })

});
