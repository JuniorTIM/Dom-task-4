const tasksList = document.getElementById("tasks-list");
const input = document.getElementById("input-task");

function addTask() {
  const task = document.createElement("div");
  if (input.value !== "") {
  task.classList.add("list__item");
  task.textContent = input.value;
  tasksList.prepend(task);
  input.value = "";
  }

  const checkInput = document.createElement("input");
  checkInput.classList.add("item");
  checkInput.type = "checkbox";
  checkInput.textContent = input.value;
  task.prepend(checkInput);

  task.addEventListener("change", () => {
    if (checkInput.checked) {
      task.style.textDecoration = "line-through";
      task.style.opacity = "0.3"
    } else {
      task.style.textDecoration = "none";
      task.style.opacity = "1"
    }
  });

  const deleteTask = document.createElement("button");
  deleteTask.textContent = "x";
  deleteTask.classList.add("itemm");
  task.append(deleteTask);

  deleteTask.addEventListener("click", () => {
    task.remove();
  });
}
