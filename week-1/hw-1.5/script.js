class Task {
  constructor(text, completed, action) {
    this.text = text;
    this.completed = completed;
  }

  addTaskToTableBody(id) {
    const tableBody = document.getElementsByTagName("tbody")[0];
    let newTaskRow = document.createElement("tr");
    let taskText = document.createElement("td");
    taskText.innerText = this.text;
    if (id) {
      newTaskRow.id = id;
    }

    this.styleRow(newTaskRow);
    this.styleText(taskText);

    let taskCompleted = document.createElement("td");
    let taskCompletedCheck = document.createElement("input");
    taskCompletedCheck.type = "checkbox";
    // if (!this.completed) {
    //     taskCompletedCheck.checked = false;
    // } else {
    taskCompletedCheck.checked = this.completed;
    // }
    this.handleCompletedCheck(newTaskRow, taskCompletedCheck);

    this.styleCheckBox(taskCompleted, taskCompletedCheck);

    let actions = document.createElement("td");
    let actionButtonGroup = document.createElement("div");
    actionButtonGroup.setAttribute("role", "group");

    let deleteButton = document.createElement("button");
    let updateButton = document.createElement("button");
    // let editButton = document.createElement("button");

    this.styleButtons(actions, actionButtonGroup, deleteButton, updateButton);

    actionButtonGroup.appendChild(deleteButton);
    actionButtonGroup.appendChild(updateButton);
    actions.appendChild(actionButtonGroup);

    taskCompleted.appendChild(taskCompletedCheck);

    newTaskRow.appendChild(taskText);
    newTaskRow.appendChild(taskCompleted);
    newTaskRow.appendChild(actions);

    tableBody.appendChild(newTaskRow);

    // this.saveTaskToLocalStorage();
  }

  styleRow(row) {
    row.className = "row w-100 text-center my-2 py-2";
  }

  styleText(cell) {
    cell.className = "col-sm-3";
  }

  styleCheckBox(cell, check) {
    cell.className = "col-sm-3 check";
  }

  styleButtons(cell, buttonGroup, dlt, update) {
    cell.className = "col-sm-6";
    buttonGroup.className = "btn-group";

    dlt.type = "button";
    dlt.innerText = "Delete";

    update.type = "button";
    update.innerText = "Update";

    dlt.setAttribute("class", "btn btn-primary");
    update.setAttribute("class", "btn btn-primary");
  }

  handleCompletedCheck(row, check) {
    // console.log(row.id);
    // console.log(check.checked);

    check.addEventListener("change", (event) => {
      // console.log(check.checked);
      event.preventDefault();
      let taskObject = this.getSpecificTaskFromLocalStorage(row.id);
      console.log(taskObject);
      if (taskObject) {
        // console.log(check.checked);
        taskObject.completed = check.checked;

        this.updateExistingTaskToLocalStorage(taskObject, row.id);
      }
    });
  }

  updateExistingTaskToLocalStorage(taskObject, key) {
    // console.log(key);
    let stringObject = JSON.stringify(taskObject);
    localStorage.setItem(key, stringObject);
  }

  getSpecificTaskFromLocalStorage(id) {
    let item = JSON.parse(localStorage.getItem(id));
    // console.log(id, item);
    return item;
  }
}

const tableBody = document.getElementsByTagName("tbody")[0];
const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const completedChecks = document.getElementsByClassName("check");
let taskRows = tableBody.children;

function addTask() {
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let task = new Task(taskInput.value, false);
    task.addTaskToTableBody();
    taskInput.value = "";
    saveTaskToLocalStorage(task);
  });
}


function saveTaskToLocalStorage(task) {
  let randomKey = (1000 * Math.random()).toFixed(0);
  let taskObject = {
    text: task.text,
    completed: task.completed,
  };

  localStorage.setItem(randomKey, JSON.stringify(taskObject));
}

function getTasksFromLocalStorage() {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    let key = localStorage.key(i);
    let item = JSON.parse(localStorage.getItem(key));
    console.log(item);
    let task = new Task(item.text, item.completed);
    task.addTaskToTableBody(key);
  }
}

// function getSpecificTaskFromLocalStorage(id) {
//         let item = JSON.parse(localStorage.getItem(id));
//         console.log(id, item);
//         return item;
// }

getTasksFromLocalStorage();
addTask();
// handleCompletedCheck();
