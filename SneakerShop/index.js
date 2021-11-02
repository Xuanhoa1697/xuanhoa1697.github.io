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
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    prevArrow:`<i class="bi bi-chevron-compact-left position-absolute"></i>`,
    nextArrow:`<i class="bi bi-chevron-compact-right position-absolute"></i>`,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          daptiveHeight:true,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          daptiveHeight:true,
          arrows:false
        }
      },
      
    ]
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
        top: 0
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
        top: "50px"
      });
    }
  });
  let numberList = 0
  $(`.bi-list`).on(`click`,()=>{
    numberList++
    if(numberList % 2 ==0){
      $(`.reponsive-menu`).css({
        top:"-100%"
      })
    }else{
      $(`.reponsive-menu`).css({
        top:"120px"
      })
    }
    event.preventDefault()
  })
$(`.login-reponsive`).on(`click`,()=>{
  event.preventDefault()
})
$(`.support-slider`).slick({
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight:true,
    adaptiveWidth:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
})
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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

  function dayLeft(){
    
    setInterval(() => {
      let dayNow = new Date()
      let presentDay = new Date(2021,10,15)
      let left = presentDay - dayNow
      let day = Math.ceil(left / 1000 / 60 /60 / 24)
      let hour = Math.ceil(left / 1000 / 60 /60) % 24
      let minute = Math.ceil(left /1000 / 60 ) % 60
      let second = Math.ceil(left / 1000) % 60
      $(`.render-day`).text(day)
      $(`.render-hour`).text(hour)
      $(`.render-minute`).text(minute)
      $(`.render-second`).text(second)
    }, 1000);
  }
  dayLeft()
  let buy = Array.from($(`.text-buy`))
  let numberProduct = 0
  $(buy).on("click",()=>{
    numberProduct++
    event.preventDefault()
    $(`.loading`).addClass("flex-visible")
    setTimeout(()=>{
      $(`.aqua-cart`).text(numberProduct)
      $(`.loading`).removeClass("flex-visible")
    },1500)
  })
});
