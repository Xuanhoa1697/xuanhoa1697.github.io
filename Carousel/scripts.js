$(function () {
  const $slider1 = $(`<div />`, {
    class: "slide",
    width: "655px",
    height: "264px",
  })
    .css({
      "background-image": "url(./image/Images.png)",
      position: "absolute",
      right: 0,
    })
    .append(`<h1 class="text">Ha Long Bay</h1>`)
    .append(
      `<p class="textP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit, error velit quo animi mollitia quae?</p>`,
      {}
    );
  const $slider2 = $(`<div />`, {
    class: "slide",
    width: "655px",
    height: "264px",
  })
    .css({
      "background-image": "url(./image/Images.png)",
      position: "absolute",
      right: "-655px",
    })
    .append(`<h1 class="text">Ha Long Bay</h1>`)
    .append(
      `<p class="textP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit, error velit quo animi mollitia quae?</p>`,
      {}
    );
  const $slider3 = $(`<div />`, {
    class: "slide",
    width: "655px",
    height: "264px",
  })
    .css({
      "background-image": "url(./image/Images.png)",
      position: "absolute",
      right: "-1310px",
    })
    .append(`<h1 class="text">Ha Long Bay</h1>`)
    .append(
      `<p class="textP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit, error velit quo animi mollitia quae?</p>`,
      {}
    );
    const $slider4 = $(`<div />`, {
      class: "slide",
      width: "655px",
      height: "264px",
    })
      .css({
        "background-image": "url(./image/Images.png)",
        position: "absolute",
        right: "-1965px",
      })
      .append(`<h1 class="text">Ha Long Bay</h1>`)
      .append(
        `<p class="textP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit, error velit quo animi mollitia quae?</p>`,
        {}
      );
  const $next = $(`<span></span>`, {
    width: "33px",
    height: "43px",
  }).css({
    "background-image": "url(./image/next.png)",
    "z-index": 1,
    position: "absolute",
    right: 0,
    top: "110px",
  });
  const $prev = $(`<span></span>`, {
    width: "33px",
    height: "43px",
  }).css({
    "background-image": "url(./image/prev1.png)",
    "z-index": 1,
    position: "absolute",
    left: 0,
    top: "110px",
  });
  
  const $nav = $(`<div class="bi-cirle" />`).css({
    width:"70px",
    height:"10px",
    display:"flex",
    "justify-content":"space-between",
    position:"absolute",
    top:"239px",
    left:"288px"
  }).append($(`
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="line-circle"/>`
  ))

  const $slider = $(`<div />`, {
    class: "slider",
    width: "655px",
    height: "264px",
  }).append($slider1, $slider2, $slider3,$slider4, $next, $prev,$nav);


  $(".container").append($slider);



  
  let count = 0;
  let arr = [0, `100%`, `200.5%`,`301%`];
  let margin = [0,`20%`,`40%`,`60%`,]
  $prev.on("click", function () {
    if (count <= 0)
    count = arr.length;
    count--;
    $(`.slide`).css({
      "margin-right": `${arr[count]}`,
    });
    $next.css({
      opacity: 0.3,
    });
    $prev.css({
      opacity: 1,
    });
    $(`.line-circle`).css({
      "margin-left":`${margin[count]}`
    })
    clearInterval(time)
  });
  $next.on("click", function () {
    if (count >= arr.length - 1) count = -1;
    count++;
    $(`.slide`).css({
      "margin-right": `${arr[count]}`,
    });
    $prev.css({
      opacity: 0.3,
    });
    $next.css({
      opacity: 1,
    });
    $(`.line-circle`).css({
      "margin-left":`${margin[count]}`
    })
    clearInterval(time)
  });

  let time =setInterval(()=>{
    count++
    $(`.slide`).css({
      "margin-right": `${arr[count]}`,
    });
    $(`.line-circle`).css({
      "margin-left":`${margin[count]}`
    })
    if (count >= arr.length - 1)
     count = -1
  },1500)
});
