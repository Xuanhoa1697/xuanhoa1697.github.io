let todos = [
    {
        id: 1,
        title: "Thực hành với DOM",
        completed: false,
    },
    {
        id: 2,
        title: "Tự clone 3 trang web",
        completed: false,
    },
    {
        id: 3,
        title: "Học DOM Event",
        completed: true,
    },
];

for(let i = 0;i<todos.length;i++){
    let table = document.createElement("table")


let form = document.createElement("form")

let label = document.createElement("label")
label.type = "checkbox"

label.innerHTML = todos[i].id


label.appendChild(form)
form.appendChild(table)
}


