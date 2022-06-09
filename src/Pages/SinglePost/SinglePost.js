import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";

function SinglePost() {
  const { id } = useParams();
  const { tasks } = useContext(Context);

  const { title, time, likes } =
    tasks.find((el) => JSON.stringify(el.id) === id) || "";

  console.log(useParams());

  return (
    <div className="singlePostWrapper">
      <h1>{title}</h1>
      <h2>{time}</h2>
      <h3>{likes}</h3>
    </div>
  );
}

export default SinglePost;
