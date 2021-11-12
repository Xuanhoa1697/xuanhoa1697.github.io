import menu from "./menu.js";

$(() => {
  $(`.bi-person-circle`).on("click", () => {
    event.preventDefault();
    $(`.modal-open`).removeAttr("style");
  });
  $(`.bi-chevron-up`).on("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
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
    prevArrow: `<i class="bi bi-chevron-compact-left position-absolute"></i>`,
    nextArrow: `<i class="bi bi-chevron-compact-right position-absolute"></i>`,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          daptiveHeight: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          daptiveHeight: true,
          arrows: false,
        },
      },
    ],
  });

  let transformProduct = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2,4,2.5];
  let $Product = Array.from($(`.transform-product`));
  let $Product1 = Array.from($(`.product`));
  let $Product2 = Array.from($(`.render-sneaker .product`))
  console.log($Product2);
  $(window).on("scroll", () => {
    console.log(document.documentElement.scrollTop);
    let x = document.documentElement.scrollTop;
    if(x>950){
      $(`.img-adds`).css({
        animation: "img 0.7s ease forwards"
      })
    }
    if(x > 300){
      for (let i = 0; i < $Product2.length; i++) {
        $($Product2[i]).css({
          animation: "product 0.5s ease forwards",
          "animation-delay": `${transformProduct[i] + "s"}`,
        });
      }
    }
    if(x > 1700){
      for (let i = 0; i < $Product1.length; i++) {
        $($Product1[i]).css({
          animation: "product 0.5s ease forwards",
          "animation-delay": `${transformProduct[i] + "s"}`,
        });
      }
    }
    if (x > 2800) {
      for (let i = 0; i < $Product.length; i++) {
        $($Product[i]).css({
          animation: "product 0.5s ease forwards",
          "animation-delay": `${transformProduct[i] + "s"}`,
        });
      }
    }
    if (x > 100) {
      $(`.direct`).addClass("hide")
      $(`.list-shopping`).css({
        "margin-top": "120px",
      });
      $(`.dropdown-menu1`).css({
        top: 0,
        height: "350px",
      });
      $(`.content-body`).css({
        marginTop: "90px",
      });
      $(`.header-menu`).css({
        top: "-60px",
      });
      $(`.header`).css({
        top: 0,
      });
    } else {
      $(`.direct`).removeClass("hide")
      $(`.list-shopping`).css({
        "margin-top": "170px",
      });
      $(`.dropdown-menu1`).css({
        top: 0,
        height: "450px",
      });
      $(`.header-menu`).css({
        top: 0,
      });
      $(`.content-body`).css({
        marginTop: "170px",
      });
      $(`.header`).css({
        top: "50px",
      });
    }
  });
  $(`.render-add`).slick({
    dots:false,
    infinite: true,
    speed: 200,
    cssEase: "linear",
    arrows: true,
    prevArrow: `<i class="bi bi-chevron-compact-left position-absolute"></i>`,
    nextArrow: `<i class="bi bi-chevron-compact-right position-absolute"></i>`,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          daptiveHeight: true,
          arrows: false,
        },
      }
    ]
  })
  $(`.span-search .bi-heart`).on("click", () => {
    event.preventDefault();
  });
  $(`.bi-search`).on("click", () => {
    event.preventDefault();
  });
  $(`.bi-list`).on(`click`, () => {
    $(`.reponsive-menu`).css({
      top: "120px",
    });
    $(`.bi-list`).css({
      display: "none",
    });
    $(".list .bi-x").css({
      display: "block",
    });
    event.preventDefault();
  });
  $(".list .bi-x").on("click",()=>{
    event.preventDefault()
    $(`.reponsive-menu`).css({
      top: "-100%",
    });
    $(`.bi-list`).css({
      display: "block",
    });
    $(".list .bi-x").css({
      display: "none",
    });
  })

  $(`.login-reponsive`).on(`click`, () => {
    event.preventDefault();
  });
  $(`.support-slider`).slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(`.render-product`).slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrows: true,
    prevArrow: `<i class="bi bi-chevron-compact-left position-absolute"></i>`,
    nextArrow: `<i class="bi bi-chevron-compact-right position-absolute"></i>`,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  let arrBorder = Array.from($(`.select-link`));
  arrBorder.forEach((select) => {
    $(select).on(`click`, () => {
      event.preventDefault();
      $(`.select-link`).removeClass(`border-active`);
      $(select).addClass(`border-active`);
    });
  });

  let arrHeart = Array.from($(`.bi-heart-fill`));
  arrHeart.forEach((heart) => {
    let numberHeart = 0;
    $(heart).on(`click`, () => {
      event.preventDefault();

      numberHeart++;
      if (numberHeart % 2 == 0) {
        $(heart).css({
          color: "rgb(170, 170, 170)",
        });
      } else {
        $(heart).css({
          color: "rgb(197, 79, 79)",
        });
      }
    });
  });

  function dayLeft() {
    setInterval(() => {
      let dayNow = new Date();
      let presentDay = new Date(2021, 10, 15);
      let left = presentDay - dayNow;
      let day = Math.ceil(left / 1000 / 60 / 60 / 24);
      let hour = Math.ceil(left / 1000 / 60 / 60) % 24;
      let minute = Math.ceil(left / 1000 / 60) % 60;
      let second = Math.ceil(left / 1000) % 60;
      $(`.render-day`).text(day);
      $(`.render-hour`).text(hour);
      $(`.render-minute`).text(minute);
      $(`.render-second`).text(second);
      if (second < 10) {
        $(`.render-second`).text("0" + second);
      }
      if (day < 10) {
        $(`.render-day`).text("0" + day);
      }
      if (minute < 10) {
        $(`.render-minute`).text("0" + minute);
      }
      if (hour < 10) {
        $(`.render-hour`).text("0" + hour);
      }
    }, 1000);
  }
  dayLeft();
  let buy = Array.from($(`.buy`));
  let numberProduct = 0;
  $(buy).on("click", () => {
    numberProduct++;
    event.preventDefault();
    $(`.loading`).addClass("flex-visible");
    setTimeout(() => {
      $(`.aqua-cart`).text(numberProduct);
      $(`.loading`).removeClass("flex-visible");
    }, 1500);
  });
  let addNow = Array.from($(`.add-now`));
  addNow.forEach((add) => {
    $(add).on(`click`, () => {
      $(`.loading`).addClass("flex-visible");
      setTimeout(() => {
        $(`.aqua-cart`).text(numberProduct);
        $(`.loading`).removeClass("flex-visible");
      }, 1500);
      event.preventDefault();
    });
  });
  let $removeNow = Array.from($(`.remove-like`));
  let $listLike = Array.from($(`.like-product`));
  for (let remove = 0; remove < $removeNow.length; remove++) {
    $($removeNow[remove]).on(`click`, () => {
      $($listLike[remove]).remove();
      $(`.empty-like`).remove();
      event.preventDefault();
      console.log($removeNow.length);
      console.log($("div").hasClass("like-product"));
      if (!$("div").hasClass("like-product")) {
        $(`<p class="empty-like">Không có sản phẩm yêu thích</p>`).appendTo(
          ".list-like"
        );
      }
    });
  }
  let removeAll = Array.from($(`.remove-all`));
  $(removeAll).on(`click`, () => {
    $(`.empty-like`).remove();
    event.preventDefault();
    $(`.like-product`).remove();
    if (!$("div").hasClass("like-product")) {
      $(`<p class="empty-like">Không có sản phẩm yêu thích</p>`).appendTo(
        ".list-like"
      );
    }
  });
});
