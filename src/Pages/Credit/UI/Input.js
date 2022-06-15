import React, { useContext } from "react";
import "./Input.css";
import { randomLikes, randomReplies, randomShares } from "./Input-utils";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";

function Input() {
  const { tasks, setTasks, name, title, setTitle, themeColor, darkMode } =
    useContext(Context);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addPost();
    }
  };
  function addPost() {
    const date = new Date();
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        author: name,
        title: title,
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
      <div className="inputPost" style={darkMode ? themeColor.post : null}>
        <textarea
          placeholder="What's happening?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={darkMode ? themeColor.textarea : null}
          onKeyPress={handleKeyPress}
        />

        <button
          className="addButton"
          onClick={addPost}
          style={darkMode ? themeColor.buttonInput : null}
        >
          <Link to={"/task"}>ADD NEW!</Link>
        </button>
      </div>
    </div>
  );
}

export default Input;
