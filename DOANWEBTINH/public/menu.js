export default function menu(node4, count) {
  if (count % 2 == 0) {
    node4.css({
        left:"-40%"
    })
  } else {
    node4.css({
        left:0
    })
    $(`.login`).css({
      display:"none"
    })
  }
}

