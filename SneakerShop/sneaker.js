$(()=>{
    $(`.slider-range`).slider({
        range:false,
        min:0,
        max:3500000,
        step:100000,
        value:1750000,
        slide:(event,data)=>{
            $(`.max`).text(data.value + "đ")
            $(`.span-color`).css({
                background:`linear-gradient(90deg, #f54f29 ${((data.value / 3500000) * 100) + "%"}, rgb(255, 255, 255) ${((data.value / 3500000) * 100) + "%"})`
            })
        }
    })
})