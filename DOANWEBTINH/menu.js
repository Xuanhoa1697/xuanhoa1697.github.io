export default function menu(node1, node2, node3,node4,node5, count) {
  if (count % 2 == 0) {
    node1.css({
      transform: "rotate(0)",
      position:"absolute",
      top:"18px"
    });
    node3.css({
      transform: "rotate(0)",
      position:"absolute",
      top:"30px"
    });
    node2.css({
        transform: "translateX(0)"
    });
    node4.css({
        left:"-40%"
    })
    node5.css({
      right:"-60%",
    })
  } else {
    node1.css({
      transform: "rotate(44deg)",
      position:"absolute",
      top:"25px"
    });
    node3.css({
      transform: "rotate(-44deg)",
      position:"absolute",
      top:"25px"
    });
    node2.css({
        transform: "translateX(50px)",
    });
    node4.css({
        left:0
    })
    node5.css({
      right:0,
    })
  }
}
