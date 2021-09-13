async function getProducts() {
  return await fetch(`https://fakestoreapi.com/products`).then((res) =>
    res.json()
  );
}

let product = await getProducts();
console.log(product);
$(() => {
    product.slice(0,1).map(link=>{
      

      console.log(link);
      console.log(link.rating.rate);
      $(`<div class="product">
      <i class="bi bi-x-circle-fill"></i>
      <a class="popup" href="${link.image}"><img class="img" src="${link.image}" alt=""></a>
      <div class="rating">
      <p class="title">${link.title}</p>
      <p class="rate">${link.rating.rate} <i class="bi bi-star-fill"></i> / ${link.rating.count} đánh giá</p>
      </div>
      </div>
      <p class="price">${link.price}$</p>
      <form class="form">
          <input class="input" type="number" name="" id="" placeholder="1">
      </form>
      <p class="total">${link.price}$</p>`).appendTo(`.show-product`)
      $(`.bi-x-circle-fill`).on(`click`,()=>{
        $(`.show-product`).remove()
      })
      $(`.input`).on(`input`,()=>{
        $(`.total`).remove()
        $(`.add`).remove()
        $(`.total-number`).remove()
        $(`.end-result`).remove()
        $(`.number-sub`).remove()
        let number = $(`.input`).val()
        let sale = 3
        if(number<0){
          number=1
          $(`.input`).val(1)
          alert(` Không thể chọn ít hơn 1 sản phẩm!`)
        }
        if(number > 2){
          sale = 1.5
          $(`.sub`).remove()
          $(`<p class="sub">Phí ship <i class="info-sale">Giảm 50% phí ship</i></p>`).appendTo(`.total-sub`)
        }else{
          $(`.sub`).remove()
          $(`<p class="sub">Phí ship</p>`).appendTo(`.total-sub`)
        }
        $(`<p class="total">${(link.price * number).toFixed(2)}$</p>`).appendTo(`.show-product`)
        $(`<span class="add">
        <span class="product-check">${link.category}</span> <i class="bi bi-x"></i> <span class="number">${number}</span>
        </span></p>`).appendTo(`.text-check`)
        $(`<p class="total-number color">${(link.price * number).toFixed(2)}$</p>`).appendTo(`.check-info`)
        $(`<p class="number-sub color">${sale}$</p>`).appendTo(`.total-sub`)
        $(`<p class="end-result color">${(link.price * number + sale).toFixed(2)}$</p>`).appendTo(`.end-total`)
      })

    })
    $(`.popup`).magnificPopup({
      type:"image",
    })
 
});
