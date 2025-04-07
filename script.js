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

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "❌";
            deleteBtn.className = "deleteBtn";
            deleteBtn.onclick = () => taskList.removeChild(addedTask);
            addedTask.appendChild(deleteBtn);

           
    }
}
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) =>{
    if (e.key === "Enter"){
        addTask();
    }
});
