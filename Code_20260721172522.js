const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 渲染任务
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => toggleTask(index));

    const delBtn = document.createElement("button");
    delBtn.textContent = "删除";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// 添加任务
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  taskInput.value = "";
  saveAndRender();
}

// 切换完成状态
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveAndRender();
}

// 删除任务
function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

// 保存 & 渲染
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

addBtn.addEventListener("click", addTask);

// 回车添加
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// 初始化
renderTasks();
