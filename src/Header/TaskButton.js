import React from "react";
import { Link } from "react-router-dom";

function TaskButton() {
  return (
    <div className="task header-link">
      <Link to="/task">Blog</Link>
    </div>
  );
}

export default TaskButton;
