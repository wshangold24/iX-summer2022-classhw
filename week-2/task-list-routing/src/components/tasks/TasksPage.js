import React, { useEffect, useState } from "react";

//import components from components folder
import TaskTable from "./TaskTable";
import TaskInput from "./TaskInput";

//import the Task class from the models folder
import { Task } from "../../models/task";

//import firebase
// import { db } from './firebase/firebase';
import TaskService from "../../services/task.service";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const existingTasks = await TaskService.fetchTasks();
    setTasks(existingTasks);
  }

  async function onTaskCreate(name) {
    // console.log("App.js", name);
    //create the task
    // const task = new Task(new Date().getTime(), name, false);

    const task = await TaskService.createTask(new Task(null, name, false));

    //add the task to the tasks state
    setTasks([...tasks, task]);
  }

  async function onTaskCompleteToggle(taskId) {
    //toggle the task completed state
    const taskToToggle = tasks.find((task) => task.id === taskId);

    //update the tasks state
    taskToToggle.complete = !taskToToggle.complete;

    //update the task in the firebase collection
    await TaskService.updateTask(taskToToggle);

    setTasks(
      tasks.map((task) => {
        return task.id === taskId ? taskToToggle : task;
      })
    );
  }

  async function onTaskRemove(taskId) {
    //delete the task from the firebase collection
    await TaskService.deleteTask(taskId);

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
