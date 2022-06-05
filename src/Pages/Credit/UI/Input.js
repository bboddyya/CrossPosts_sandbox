import React, { useContext } from "react";
import "./Input.css";
import { randomLikes, randomReplies, randomShares } from "./Input-utils";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";

function Input() {
  const { tasks, setTasks, name, title, setTitle, postValue } =
    useContext(Context);

  function addPost() {
    const date = new Date();
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        author: name,
        title: title,
        postValue: postValue,
        date: date.getDate() + " мая",
        time:
          date.getHours() +
          ":" +
          (date.getMinutes() < 10 ? "0" : "") +
          date.getMinutes(),

        likes: randomLikes(),
        replies: randomReplies(),
        shares: randomShares(),
      },
    ]);
    setTitle("");
  }
  return (
    <div className="input">
      <div className="inputPost">
        <textarea
          placeholder="What's happening?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="addButton" onClick={addPost}>
          <Link to={"/task"}>ADD NEW!</Link>
        </button>
      </div>
    </div>
  );
}

export default Input;
