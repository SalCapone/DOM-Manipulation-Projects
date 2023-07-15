const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-submit");
const todoList = document.getElementById("todolist")



function addTodo(e) {
    if(todoInput.value !== "") {
        e.preventDefault();
        const newTodo = document.createElement("li");
        newTodo.innerHTML = `
            <p>${todoInput.value}</p>
            <div>
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-x"></i>
            </div>
        `;
        todoList.appendChild(newTodo);
        newTodo.children[1].children[0].addEventListener("click", () => {
            newTodo.children[0].classList.toggle("done");
        })
        newTodo.children[1].children[1].addEventListener("click", () => {
            newTodo.style.display = "none";
        })

        todoInput.value = "";
    } else {
        e.preventDefault();
        alert("Please enter a task.")
    }
}


addBtn.addEventListener("click", addTodo);