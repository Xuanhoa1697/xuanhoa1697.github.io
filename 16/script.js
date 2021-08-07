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
    {
        id: 4,
        title: "Học HTML, CSS",
        completed: true,
    },
];

function update(todo) {
    todo.completed = true;
    render();
}

function createListItem(todo) {
    let li = document.createElement("li");
    li.className = "list-item";

    let input = document.createElement("input");
    input.type = "radio";
    input.checked = todo.completed ? true : false;
    input.disabled = todo.completed ? true : false;
    input.onchange = !todo.completed
        ? function () {
              update(todo);
          }
        : null;

    let label = document.createElement("label");
    label.append(input, todo.title);

    li.append(label);

    return li;
}

const todoList = document.querySelector(".todo-list .list");
const todoNumber = document.querySelector(".todo-list .number");
const completedList = document.querySelector(".completed-list .list");
const completedNumber = document.querySelector(".completed-list .number");

function render() {
    let todoCount = 0;
    let completedCount = 0;
    todoList.innerHTML = "";
    completedList.innerHTML = "";

    for (let todo of todos) {
        let item = createListItem(todo);

        if (todo.completed) {
            completedCount++;
            completedList.append(item);
        } else {
            todoCount++;
            todoList.append(item);
        }
    }

    todoNumber.textContent = todoCount;
    completedNumber.textContent = completedCount;
}

render();

let time = document.querySelector(".time");

let date = new Date();

let dateString = date.toLocaleDateString("vi-VN", {
    dateStyle: "full",
});

let comma = dateString.indexOf(", ");
dateString =
    "<span class='date'>" +
    dateString.slice(0, comma + 1) +
    "</span>" +
    dateString.slice(comma + 2);

time.innerHTML = dateString;

// Xử lý phần form thêm todo
let form = document.forms.new;
let button = document.querySelector(".btn");

button.addEventListener("click", function (event) {
    form.classList.toggle("show");
});

// Sự kiện submit
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let title = form.elements.todo.value;

    if (title.trim().length > 0) {
        todos.push({ id: todos.length + 1, title: title, completed: false });
        render();
        form.elements.todo.value = "";
    } else {
        alert("Vui lòng nhập công việc");
        return;
    }
});
