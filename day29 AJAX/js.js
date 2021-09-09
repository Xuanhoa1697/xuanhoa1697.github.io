import profile from "./AJAX.js";


let perPage = 5
let curenPage = 1
let start = 0
let end = perPage

function render(data,x,y) {

 

  data.slice(0, 6).map((datas) => {
    let cmt = datas.comments
    cmt.slice(0,1).map((x)=>{
      $(`  <div class="content-info">
        <p class="span-title">Name: ${x.name}
        <span class="title">${x.email}</span></p>
        <span class="title">${x.body}</span></p>
        </div>`).appendTo($(`.content1`));

        $(`.userid1`).html(`<a class="user" href="">${datas.title}</a>`)
    })


    $(`<li class="id">
                <a class="user" href="">Profile ID ${datas.id}</a>
           </li>`).appendTo(`.userid`);
    

    $(`  <div class="content-info">
        <a id="${datas.id}" href="detail.html?postid=${datas.id}" class="span-title">Title Id ${datas.id}: <span class="title">${datas.title}</span></a>
        </div>`).appendTo($(`.content`));
  });

}


profile({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts?_embed=comments",
  succes: (res) => {
    console.log(res);
    render(res);
  },
  error: (er) => {
    console.log(er);
  },
});
