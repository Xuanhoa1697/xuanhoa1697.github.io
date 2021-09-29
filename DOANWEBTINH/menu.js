export default function menu(node1, node2, node3,node4, count) {
  if (count % 2 == 0) {
    node1.css({
      transform: "rotate(0)",
      position:"absolute",
      top:"4px"
    });
    node3.css({
      transform: "rotate(0)",
      position:"absolute",
      top:"16px"
    });
    node2.css({
        transform: "translateX(0)"
    });
    node4.css({
        left:"-40%"
    })
  } else {
    node1.css({
      transform: "rotate(44deg)",
      position:"absolute",
      top:"10px"
    });
    node3.css({
      transform: "rotate(-44deg)",
      position:"absolute",
      top:"10px"
    });
    node2.css({
        transform: "translateX(50px)",
    });
    node4.css({
        left:0
    })

  }
}

