const KEY = "y552Ig0rBsEWCcvr10kYKLiEkmyHutLT";
const SEARCH_API = "https://api.giphy.com/v1/gifs/search";

$(() => {
  $(`.form`).on(`submit`, (e) => {
    e.preventDefault();
    $(`.remove`).remove();
    $(`<div class="page">
          <p class="text">1</p>
      </div>`).appendTo(`.container`)
    $(`.direct`).html(`<span class="prev">
                          <a href=""><i class="bi bi-caret-left-square-fill"></i></a>
                      </span>
                      <span class="next">
                          <a href=""><i class="bi bi-caret-right-square-fill"></i></a>
                      </span>`);

    let inputValue = $(`.input`).val().trim();
    let limit = 12;
    let page = 1;
    let offset = 0;



    $(`.next`).on(`click`, () => {
      page++;
      offset = (page - 1) * limit;
      event.preventDefault();
      $(`.remove`).remove();
      $(`.page`).text(page)
      render(inputValue, limit, offset);
    });



    $(`.prev`).on(`click`, () => {
      page--;
      if (page === 0) {
        page = 1;
      }
      offset = (page - 1) * limit;
      event.preventDefault();
      $(`.remove`).remove();
      $(`.page`).text(page)
      render(inputValue, limit, offset);
    });



    render(inputValue, limit, offset);
  });


  let render = (value, limit, offset) => {
    if (value.length > 0) {
      axios
        .get(SEARCH_API, {
          params: {
            api_key: KEY,
            q: value,
            limit: limit,
            offset: offset,
          },
        })
        .then((response) => response.data)
        .then((dataImg) => {
          let pathImg = dataImg.data;
          console.log(pathImg);
          if (pathImg.length === 0) {
            alert("Không có hình ảnh phù hợp!!!");
          } else {
            pathImg.map((link) => {
              let img = link.images;
              let links = img[`480w_still`].url;
              let widthImg = img[`480w_still`].width;
              console.log(links);
              let $div = $(
                `<div class="col-3 remove p-0 p-2 display-img d-flex justify-content-center align-items-center">`
              );
              let $imgLinks = $(
                `<img class="img-link rounded"  src="${links}" alt="Ảnh" />`
              ).css({
                width: widthImg,
              });
              $div.html($imgLinks).appendTo(`.row`);
            });
          }
        });
    }
  };
});
