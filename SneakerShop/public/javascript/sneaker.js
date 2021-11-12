$(()=>{
    $(`.slider-range`).slider({
        range:false,
        min:0,
        max:3500000,
        step:100000,
        value:1750000,
        slide:(event,data)=>{
            let price = data.value
            $(`.max`).text(price.toLocaleString("vi-VN") + "đ")
            $(`.span-color`).css({
                background:`linear-gradient(90deg, #f54f29 ${((data.value / 3500000) * 100) + "%"}, rgb(207, 207, 207) ${((data.value / 3500000) * 100) + "%"})`
            })
        }
    })
    let number = 0
    let page = Array.from($(".link-page"))
    $(`.prev`).on("click",()=>{
        if(page.length <= 0)
        number = page.length
        number--
        if(number <= 0){
            number =0
        }
        $(".link-page").removeClass("active-page")
        $(page[number]).addClass("active-page")
        event.preventDefault()
        console.log("lol");
    })
    $(`.next`).on("click",()=>{
        if(number >= page.length-1) 
        number = 3
        number++
        if(number >= 3){
            number = 3
        }
        $(".link-page").removeClass("active-page")
        $(page[number]).addClass("active-page")
        event.preventDefault()
        console.log(number);
    })
    for(let i = 0;i <= page.length;i++){
        $(page[i]).on("click",()=>{
            $(".link-page").removeClass("active-page")
            $(page[i]).addClass("active-page")
            number = i
            event.preventDefault()
        })
    }
})