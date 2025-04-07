const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
            const addedTask = document.createElement("li");
            addedTask.textContent = taskText;
            taskList.appendChild(addedTask);
            taskInput.value = "";
    }
}
addTaskBtn.addEventListener("click", addTask);
