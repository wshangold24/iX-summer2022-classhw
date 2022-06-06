class Task {
  constructor(text, completed) {
    this.text = text;
    this.completed = completed;
  }

  addTaskToTableBody(id) {
    const tableBody = document.getElementsByTagName("tbody")[0];
    let newTaskRow = document.createElement("tr");
    let taskText = document.createElement("td");
    taskText.innerText = this.text;
    if (id) newTaskRow.id = id;

    this.styleRow(newTaskRow);
    this.styleText(taskText);

    let taskCompleted = document.createElement("td");
    let taskCompletedCheck = document.createElement("input");
    taskCompletedCheck.type = "checkbox";
    taskCompletedCheck.checked = this.completed;

    this.handleCompletedCheck(newTaskRow, taskCompletedCheck);

    this.styleCheckBox(taskCompleted, taskCompletedCheck);

    let actions = document.createElement("td");
    let actionButtonGroup = document.createElement("div");
    actionButtonGroup.setAttribute("role", "group");

    let deleteButton = document.createElement("button");
    let updateButton = document.createElement("button");

    this.handleDeleteButton(newTaskRow, deleteButton);
    this.handleUpdateButton(newTaskRow, updateButton, taskText);
    this.styleButtons(actions, actionButtonGroup, deleteButton, updateButton);

    actionButtonGroup.appendChild(deleteButton);
    actionButtonGroup.appendChild(updateButton);
    actions.appendChild(actionButtonGroup);

    taskCompleted.appendChild(taskCompletedCheck);

    newTaskRow.appendChild(taskText);
    newTaskRow.appendChild(taskCompleted);
    newTaskRow.appendChild(actions);

    tableBody.appendChild(newTaskRow);
  }

  styleRow(row) {
    row.className = "row w-100 text-center align-items-center my-2 py-2";
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
    check.addEventListener("change", (event) => {
      event.preventDefault();
      let taskObject = this.getSpecificTaskFromLocalStorage(row.id);
      console.log(taskObject);
      if (taskObject) {
        taskObject.completed = check.checked;

        this.updateExistingTaskToLocalStorage(taskObject, row.id);
      }
    });
  }

  handleDeleteButton(row, deleteBtn) {
    deleteBtn.addEventListener("click", (event) => {
      event.preventDefault();
      row.remove();
      localStorage.removeItem(row.id);
    });
  }

  handleUpdateButton(row, updateBtn, text) {
    updateBtn.addEventListener("click", (event) => {
      event.preventDefault();
      let prevText = text.innerText;
      text.innerText = "";

      let taskUpdateForm = document.createElement("form");
      taskUpdateForm.className = "w-100 d-flex";
      let updateSubmit = document.createElement("button");
      let taskTextInput = document.createElement("input");

      taskUpdateForm.appendChild(taskTextInput);
      taskUpdateForm.appendChild(updateSubmit);

      this.styleUpdateForm(taskUpdateForm, taskTextInput, updateSubmit);

      taskTextInput.setAttribute("class", "w-100");
      taskTextInput.value = prevText;
      text.appendChild(taskUpdateForm);

      taskUpdateForm.addEventListener("submit", (event) => {
        event.preventDefault();
        text.innerText = taskTextInput.value;
        let taskObject = this.getSpecificTaskFromLocalStorage(row.id);
        taskObject.text = taskTextInput.value;
        this.updateExistingTaskToLocalStorage(taskObject, row.id);
        taskUpdateForm.remove();
      });
    });
  }

  styleUpdateForm(form, text, btn) {
    btn.className = "btn btn-secondary";
    btn.innerText = "✔";
  }

  updateExistingTaskToLocalStorage(taskObject, key) {
    let stringObject = JSON.stringify(taskObject);
    localStorage.setItem(key, stringObject);
  }

  getSpecificTaskFromLocalStorage(id) {
    let item = JSON.parse(localStorage.getItem(id));
    return item;
  }
}

class TaskList extends Task {
  constructor(
    text,
    completed,
    tableBody,
    addButton,
    taskInput,
    completedChecks,
    taskRows
  ) {
    super(text, completed);
    this.tableBody = tableBody;
    this.addButton = addButton;
    this.taskInput = taskInput;
    this.completedChecks = completedChecks;
    this.taskRows = taskRows;
  }
  addTask() {
    addButton.addEventListener("click", (event) => {
      event.preventDefault();
      let task = new Task(taskInput.value, false);
      this.saveTaskToLocalStorage(task);
      task.addTaskToTableBody();
      taskInput.value = "";
    });
  }

  saveTaskToLocalStorage(task) {
    let randomKey = (1000 * Math.random()).toFixed(0);
    let taskObject = {
      text: task.text,
      completed: task.completed,
    };

    localStorage.setItem(randomKey, JSON.stringify(taskObject));
  }

  getTasksFromLocalStorage() {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      let key = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(key));
      let task = new Task(item.text, item.completed);
      task.addTaskToTableBody(key);
    }
  }

  generateTaskList() {
    this.getTasksFromLocalStorage();
    this.addTask();
  }
}

const tableBody = document.getElementsByTagName("tbody")[0];
const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const completedChecks = document.getElementsByClassName("check");
let taskRows = tableBody.children;

let taskList = new TaskList(
  tableBody,
  addButton,
  taskInput,
  completedChecks,
  taskRows
);
taskList.generateTaskList();
