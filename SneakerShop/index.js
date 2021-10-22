import menu from "./menu.js";

$(() => {
  $(`.sign`).on("click", () => {
    event.preventDefault();
    setTimeout(() => {
      $(`.login`).css({
        display: "flex",
        "justify-content": "center",
      });
    }, 300);
  });

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

  $(`.bi-x`).on(`click`, () => {
    $(`.login`).css({
      display: "none",
    });
    event.preventDefault();
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
    adaptiveHeight:true
  });
  $(`#slick-slide-control00`).text(" ");
  $(`#slick-slide-control01`).text(" ");
  $(`#slick-slide-control02`).text(" ");
  $(`#slick-slide-control03`).text(" ");
  $(`#slick-slide-control04`).text(" ");
  $(`.bi-search`).on("click", () => {
    event.preventDefault();
    $(`.search-item`).css({
      visibility: "visible",
      opacity: 1,
      top: 0,
    });
  });
  $(window).on("scroll", () => {
    console.log(document.documentElement.scrollTop);
    let x = document.documentElement.scrollTop;
    if (x++) {
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
  let settingNumber = 0
  $(`.bi-gear-fill`).on(`click`,()=>{
    event.preventDefault()
    // settingNumber++
    // if(settingNumber % 2 == 0){
    //   $(`.form-setting`).css({
    //     transform:"translateY(30px)",
    //     visibility:"hidden",
    //     opacity:0
    //   })
    // }else{
    //   $(`.form-setting`).css({
    //     transform:"translate(0)",
    //     visibility:"visible",
    //     opacity:1
    //   })
    // }

  })
  // $(`.render-product`).slick({
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   adaptiveHeight:true,
  //   adaptiveWidth:true,
  //   arrows:false,
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 2,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 2
  //       }
  //     }
  //   ]
  // });
  // let arrBannerSLider = Array.from($(`.img-product`))
  // let numberSlick = 0
  // for(let slider of arrBannerSLider){
  //   numberSlick++
  //   $(slider).addClass(`slider-banner-` + numberSlick).slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     speed:200,
  //     asNavFor: `.slider-nav-` + numberSlick
  //   });
  // }
  
  // let arrBannerSub = Array.from($(`.sub-slider`))
  // let numberSub = 0
  // for(let nav of arrBannerSub){
  //   numberSub++
  //   $(nav).addClass(`slider-nav-` + numberSub).slick({
  //     slidesToShow: 4,
  //     asNavFor: `.slider-banner-` + numberSub,
  //     dots: false,
  //     arrows:false,
  //     centerMode: true,
  //     userCSS:false,
  //     focusOnSelect: true
  //   });
  // }
  
});
