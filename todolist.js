const todoList = [];

function addTask(description) {
    todoList.push({ description, completed: false });
}

function displayTasks() {
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
    });
}

function displayTasks() {
  todoList.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
  });
}

function deleteTask(index) {
  if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);
  } else {
      console.log("Invalid task index.");
  }
}

function completeTask(index) {
  if (index >= 0 && index < todoList.length) {
      todoList[index].completed = true;
  } else {
      console.log("Invalid task index.");
  }
}


function searchTasks(keyword) {
  const foundTasks = todoList.filter(task => task.description.includes(keyword));
  foundTasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
  });
}



// Test sequence
addTask("Buy stuff");
addTask("Pray");
addTask("Park the car");

console.log("  Displaying Tasks  ");
displayTasks();

console.log("\n  Deleting a Task  ");
deleteTask(1);
displayTasks();

console.log("\n  Completing a Task  ");
completeTask(2);
displayTasks();

console.log("\n---- Searching for Tasks ----");
searchTasks("stuff");
