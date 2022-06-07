import React, { useState } from "react";
//import bootstrap styling from node_modules
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

//import components from components folder
import TaskTable from "./components/TaskTable";
import TaskInput from "./components/TaskInput";

//import the Task class from the models folder
import { Task } from "./models/task";

export default function App() {
  const [tasks, setTasks] = useState([
    new Task(1, "Test 1", false),
    new Task(2, "Test 2", true),
  ]);

  function onTaskCreate(name) {
    console.log("App.js", name);
    //create the task
    const task = new Task(new Date().getTime(), name, false);

    //add the task to the tasks state
    setTasks([...tasks, task]);
  }

  function onTaskCompleteToggle(taskId) {
    console.log(taskId);
    //toggle the task completed state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    console.log(taskToToggle);

    //update the tasks state
    taskToToggle.complete = !taskToToggle.complete;
    setTasks(
      tasks.map((task) => {
        return task.id === taskId ? taskToToggle : task;
      })
    );
  }

  function onTaskRemove(taskId) {
    //filter the tasks to keep tasks which don't have the id passed in
    //update the tasks state with the filtered list
    setTasks(
      tasks.filter((task) => {
        return task.id !== taskId;
      })
    );
  }

  return (
    <div className="container my-5">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <p>Our simple task list</p>

        <TaskInput onTaskCreate={onTaskCreate} />
        <TaskTable
          tasks={tasks}
          onTaskCompleteToggle={onTaskCompleteToggle}
          onTaskRemove={onTaskRemove}
        />
      </div>
    </div>
  );
}
