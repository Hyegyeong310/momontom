const form = document.querySelector(".js-todo"),
  input = form.querySelector("input"),
  list = document.querySelector(".todo-list");

const TODOS = "todos";

let todoList = [];

function saveTodos() {
  localStorage.setItem(TODOS, JSON.stringify(todoList));
}

function finishTodo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  btn.classList.toggle("finished");
  todoList = todoList.map(function (todo) {
    if (todo.id === parseInt(li.id, 10)) {
      todo.finish = !todo.finish;
    }
    return todo;
  });
  saveTodos();
}

function deleteTodo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  list.removeChild(li);
  todoList = todoList.filter(function (todo) {
    return todo.id !== parseInt(li.id, 10);
  });
  saveTodos();
}

function paintTodo(todo) {
  const { text, finish } = todo;
  const li = document.createElement("li");
  const checkBtn = document.createElement("i");
  const delBtn = document.createElement("i");
  const span = document.createElement("span");
  const newId = todoList.length + 1;

  checkBtn.classList.add("far", "fa-check-circle");
  checkBtn.addEventListener("click", finishTodo);

  delBtn.classList.add("fas", "fa-trash");
  delBtn.addEventListener("click", deleteTodo);

  span.innerText = text;

  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  list.appendChild(li);
  const todoObj = {
    text,
    id: newId,
    finish: finish || false,
  };
  todoList.push(todoObj);
  saveTodos();
}

function handleSubmit(e) {
  e.preventDefault();
  const currentTodo = input.value.trim();
  if (!currentTodo) {
    input.value = "";
    return;
  }
  paintTodo({ text: currentTodo });
  input.value = "";
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS);
  if (loadedTodos) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach(function (todo) {
      paintTodo(todo);
    });
  }
}

function init() {
  loadTodos();
  form.addEventListener("submit", handleSubmit);
}

init();
