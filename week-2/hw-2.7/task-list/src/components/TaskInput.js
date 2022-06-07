import React, { useState } from "react";

export default function TaskInput(props) {
  const [task, setTask] = useState("");

  function onTaskFormSubmit(e) {
    e.preventDefault();
    console.log(task);
    // console.log(props);

    props.onTaskCreate(task);
    setTask("");
  }

  return (
    <div>
      <form onSubmit={onTaskFormSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button className="btn btn-outline-secondary" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
