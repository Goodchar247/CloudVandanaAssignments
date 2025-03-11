function addTask() {
    let taskIn = document.getElementById("taskin");
    let taskText = taskIn.value.trim();
    if (taskText === "") return;
    let taskLi = document.getElementById("taskli");
    let existingTasks = Array.from(taskLi.getElementsByTagName("li")).map(li => li.textContent.replace("X", "").trim());
    if (existingTasks.includes(taskText)) {
        alert("Task already exists!");
        return;
    }
    let listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
    taskLi.appendChild(listItem);
    taskIn.value = "";
}
function removeTask(button) {
    let listItem = button.parentElement;
    listItem.remove();
}