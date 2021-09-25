import menu from "./menu.js";

$(() => {
  let count = 0;
  let numnerLogin = 0;
  let number = 0;
  let countText = 0;
  let text = "";
  let inputText = [
    "Search for your perfect!                                                   ",
    "Find yourself the best shoes!                                                  ",
    "@ShoseName + @FashionName you need to find!                                                  ",
  ];

  $(`.menu-app`).on("click", () => {
    count++;
    menu($(`.app1`), $(`.app2`), $(`.app3`), $(`.menu-drop`), count);
  });
  function textPlaceHolder() {
    text += inputText[countText].charAt(number);
    $(`.search`).attr(`placeholder`, text);
    number++;
    if (number >= inputText[countText].length) {
      text = "";
      number = 0;
      countText++;
      if (countText >= inputText.length) {
        countText = 0;
      }
    }
  }
  let set = setInterval(textPlaceHolder, 80);
  $(`.search`).on("input",()=>{
    clearInterval(set)
    $(`.search`).attr(`placeholder`, inputText[0]);
  })

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
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
});
