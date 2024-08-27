"use client";
import React, { useState } from "react";
import styles from "./page.css";

const page = () => {
  const [task, settask] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { task }]);
    settask("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h3>No Task Available</h3>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i} className="taskitems">
            <div className="taskShown">
              <h4>{t.task}</h4>
            </div>
            <button
              className="deleteButton"
              onClick={() => {
                deleteHandler(i);
              }}
            >
              Delete
            </button>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <div className="mainContainer">
        <h1>Todo App</h1>
        <form onSubmit={submitHandler}>
          <div className="upper">
            <input
              className="taskbox"
              type="text"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
            ></input>
            <button className="taskadd">+</button>
          </div>
        </form>

        <div className="taskLists">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
