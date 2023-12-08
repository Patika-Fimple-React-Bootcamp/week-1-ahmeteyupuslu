document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todoForm");
  const todoList = document.getElementById("todoList");
  const loading = document.getElementById("loading");

  function createListItem(title, completed) {
    const listItem = document.createElement("li");
    const completionSymbol = completed ? "&#9745" : "&#9746";
    listItem.innerHTML = `<span class="checkspan">${completionSymbol}</span><span>${title}</span>`;
    return listItem;
  }

  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      loading.style.display = "none";
      todoList.style.display = "block";

      data.forEach((todo) => {
        const listItem = createListItem(todo.title, todo.completed);
        todoList.appendChild(listItem);
      });
    });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const completed = document.getElementById("completed").checked;
    const listItem = createListItem(title, completed);
    todoList.appendChild(listItem);
    form.reset();
  });
});
