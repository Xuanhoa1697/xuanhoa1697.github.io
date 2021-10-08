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
    if (number >= 100) {
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
  $(`.bi-x-lg`).on(`click`, () => {
    $(`.search-item`).css({
      visibility: "hidden",
      opacity: 0,
      top: "100px",
    });
    event.preventDefault();
  });
  $(`.slider-review`).slick({
    dots: false,
    infinite: true,
    speed: 200,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
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
  $(`#slick-slide-control10`).text(" ");
  $(`#slick-slide-control11`).text(" ");
  $(`#slick-slide-control12`).text(" ");
  $(`#slick-slide-control13`).text(" ");
  $(`#slick-slide-control14`).text(" ");
  $(`.bi-search`).on("click", () => {
    event.preventDefault();
    $(`.search-item`).css({
      visibility: "visible",
      opacity: 1,
      top: 0,
    });
  });
  $(window).on("scroll", () => {
    $(`.search-item`).css({
      visibility: "hidden",
      opacity: 0,
      top: "100px",
    });
    let x = document.documentElement.scrollTop;
    if (x >= 1350) {
      let arrDelay = [0.1, 0.15, 0.2, 0.25, 0.1, 0.15, 0.2, 0.25];
      let numberDelay = -1;
      let arrTech = Array.from($(`.technology`));
      arrTech.forEach((item) => {
        numberDelay++;
        item.style.animation = `tech 0.5s ease-out forwards`;
        item.style.animationDelay = `${arrDelay[numberDelay] + "s"}`;
      });
    }
    if (x > 0) {
      $(`.pricing`).css({
        border: "1px solid rgb(76,162,172)",
      });
      $(`.header-top`).css({
        top: "-30px",
      });
      $(`.bi-heart`).css({
        color: "black",
      });
      $(`.bi-search`).css({
        color: "black",
      });
      $(`.bi-person-circle`).css({
        color: "black",
      });
      $(`.header`).css({
        position: `fixed`,
        top: 0,
        right: 0,
        left: 0,
        background: "white",
        height: "100px",
        "box-shadow": "0 4px 40px rgb(0 0 0 / 30%)",
      });
      $(`.text-header-logo`).css({
        color: "black",
      });
      $(`.text-sign`).css({
        color: "black",
      });
    } else {
      $(`.pricing`).css({
        border: "none",
      });
      $(`.bi-heart`).css({
        color: "white",
      });
      $(`.bi-search`).css({
        color: "white",
      });
      $(`.bi-person-circle`).css({
        color: "white",
      });
      $(`.header-top`).css({
        top: 0,
      });
      $(`.pricing`).css({
        " background-Color": "white",
        border: "none",
      });
      $(`.header`).css({
        position: `absolute`,
        top: "30px",
        right: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.4)",
        height: "120px",
      });
      $(`.text-header-logo`).css({
        color: "white",
      });
      $(`.text-sign`).css({
        color: "white",
      });
      $(`.menu-drop`).css({
        left: "-40%",
      });
    }
  });
  // $(`.searching`).on(`input`, () => {
  //   $(`.item-result`).remove()
  //   axios.get(`./product?q=${$(`.searching`).val()}`).then((resSearch) => {
  //     let itemSearch = resSearch.data
  //     itemSearch.forEach(valueSearch=>{
  //       console.log(valueSearch);
  //       $(`<a class="item-result mt-2 d-flex justify-content-start align-items-center " href="#">
  //         <img class="img-result" src="${valueSearch.image}" alt="">
  //         <div class="text-result-search">
  //           <p class="m-0 text-result">${valueSearch.nameProduct}</p>
  //           <p class="m-0 text-result-money">${valueSearch.money}</p>
  //         </div>
  //       </a>`).appendTo($(`.result-search`))
  //     })
  //   });
  // });
  axios.get("./product").then((res) => {
    let data = res.data;
    data.slice(0, 8).forEach((itemNewProduct) => {
      $(`<div class="col-3 pb-4">
    <div class="technology border">
      <div class="sale position-absolute">
        <p class="text-sale m-0 h-100 text-center d-flex justify-content-center align-items-center">${itemNewProduct.sale}</p>
      </div>
      <i class="bi bi-heart-fill position-absolute"></i>          
      <div class=" img-product w-100 d-flex justify-content-center align-items-center ">
        <a class="d-flex justify-content-center align-items-center" href="#123">
          <img class="img-teck" src="${itemNewProduct.image}" alt="" />
        <a>
      </div>
      <div class="info-cart border border-start-0 border-end-0 border-bottom-0 w-100">
        <div class="row h-100">
          <div class="col-8">
            <div class="text-cart-money h-100">
              <p class="make-money text-center m-0">
                ${itemNewProduct.money}
              </p>
              <p class="name-fashion text-center m-0">
                ${itemNewProduct.nameProduct}
              </p>
            </div>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center">
            <i class="bi bi-cart-plus-fill"></i>
          </div>
        </div>
      </div>
    </div>
    </div>`).appendTo(`.render-product`);
    });
    let arrHeart = Array.from($(`.bi-heart-fill`));
    for (let check of arrHeart) {
      let count = 0;
      $(check).on("click", () => {
        count++;
        if (count % 2 == 0) {
          check.style.color = "rgb(219, 219, 219)";
        } else {
          setTimeout(() => {
            check.style.color = "rgb(160,0,0)";
          }, 700);
        }
      });
    }
    let number = 0;
    let addProduct = Array.from($(`.bi-cart-plus-fill`));
    for (let add of addProduct) {
      $(add).on("click", () => {
        number++;
        $(`.cart-circle`).remove();
        $(` <span class="cart-circle"></span>`).prependTo(`.status`);
        setTimeout(() => {
          $(`.aqua-cart`).text(number);
        }, 2500);
        $(`.loading`).css({
          display: "flex",
        });
        setTimeout(() => {
          $(`.cart-circle`).remove();
          $(`.loading`).css({
            display: "none",
          });
        }, 2000);
      });
    }
  });
  $('.item-brand').slick({
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 7,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 1000,
    prevArrow:`<div class="prev-arrow"><i class="bi bi-chevron-compact-left"></i></div>`,
    nextArrow:`<div class="next-arrow"><i class="bi bi-chevron-compact-right"></i></div>`,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 3
        }
      }
    ]
  });
});
