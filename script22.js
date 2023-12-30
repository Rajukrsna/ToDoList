$(document).ready(function () {
  const taskList = $("#taskList");
  const taskInput = $("#taskInput");

  // Initialize tasks from local storage
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render tasks
  function renderTasks() {
    taskList.empty();
    $.each(storedTasks, function (index, task) {
      const li = $("<li class=list-group-item>").html(`
      
        <span class="text-center"><i class="fa-solid fa-hippo"></i>${task}</span></li>
        <button class="deleteBtn  btn btn-success btn-block btn-xs ">Delete</button>
       
      `);
      taskList.append(li);
    });
  }

  // Add new task
  $("#addTaskBtn").on("click", function () {
    const task = taskInput.val().trim();
    if (task !== "") {
      storedTasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      taskInput.val("");
      renderTasks();
    }
  });

  // Delete task
  taskList.on("click", ".deleteBtn", function () {
    const index = $(this).closest("li").index();
    storedTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    renderTasks();
  });

  // Initial rendering
  renderTasks();
});