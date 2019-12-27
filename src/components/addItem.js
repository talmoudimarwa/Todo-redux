import React from "react";
import { connect } from "react-redux";
import {
  addTask,
  removeTask,
  checkTask,
  inputTask
} from "../actions/actions.js";
import Moodal from "./Moodal"
/* eslint-disable*/

function addItem({
  text = "",
  Tasks = [],
  removeTask = () => {},
  inputTask = () => {},
  addTask = () => {},
  checkTask = () => {}
}) {
  let id = Math.random();
  return (
    <div>
      <div className="navbar">
        <div className="todo">
          <h1 className="todo-app">Daily Todo Lists</h1>
        </div>
        <input
          className="enter"
          type="text"
          placeholder="Enter new task"
          value={text}
          onChange={e => inputTask(e.target.value)}
        />
        <button
          className="btn-add"
          onClick={() => {
            addTask({ text, id, isComplete: false });
          }}
        >
          add
        </button>
      </div>
      <div className="lists">
        <ul id="list">
          {Tasks.map((el, i) => (
            <li className="item">
              <h4
                style={{
                  display: "inline",
                  textDecoration: el.isComplete ? "line-through" : ""
                }}
              >
                {el.text}
              </h4>
           
              <button className="complete-btn" onClick={() => checkTask(el.id)}>
                {el.isComplete ? "Undo" : "Complete"}
              </button>
              <button
                className="delete-btn"
                onClick={e => {
                  e.preventDefault();
                  removeTask(i);
                }}
              >
                delete
              </button>
              <Moodal el={el} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// redux
// 1
const mapStateToProps = state => {
  return {
    Tasks: state.Tasks,
    text: state.Input
  };
};

// 2
const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => dispatch(addTask(payload)),
    inputTask: payload => dispatch(inputTask(payload)),
    removeTask: payload => dispatch(removeTask(payload)),
    checkTask: payload => dispatch(checkTask(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addItem);
