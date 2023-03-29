import "./styles.css";
import { useState } from "react";

export default function App() {
  let [task, setTask] = useState("");
  let [listItems, setListItems] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "create an app in react" },
    { id: 3, task: "improve the portfolio project" }
  ]);

  let nextId = 4;

  function handleChange(event) {
    let newTask = event.target.value;
    setTask(newTask);
  }

  function handleClick(event) {
    event.preventDefault();
    if (task === "") {
      alert("Add a task");
    } else {
      let newListItems = [...listItems, { id: nextId++, task: task }];
      setTask("");
      setListItems(newListItems);
    }
  }

  function deleteItem(id) {
    let updatedList = listItems.filter((item) => item.id !== id);
    setListItems(updatedList);
  }

  return (
    <div className="container App mt-5  w-50">
      <h1 className="text-center">ToDo App</h1>
      <form className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={task}
        />
        <button className="btn btn-info" onClick={handleClick}>
          Add to List
        </button>
      </form>
      <ul className="list-group">
        {listItems.map((item) => {
          return (
            <li
              className="list-group-item m-2 d-flex justify-content-between"
              key={item.id}
              onClick={() => deleteItem(item.id)}
            >
              <p>{item.task}</p>
              <button className="btn btn-light">
                <span role="img" aria-label="remove">
                  ❌
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
