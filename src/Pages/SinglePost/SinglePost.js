import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";
import "./SinglePost.css";

function SinglePost() {
  const { id } = useParams();
  const { tasks, darkMode, themeColor } = useContext(Context);

  const { author, title, time, date, likes, replies, shares, picture } =
    tasks.find((el) => JSON.stringify(el.id) === id) || "";

  return (
    <div className="singlePostWrapper">
      <div className="singlePostHeader">
        <div
          className="singlePostPhoto"
          style={picture ? { display: "block" } : { display: "none" }}
        >
          {picture ? (
            <img
              src={picture}
              alt=""
              className="picture"
              style={darkMode ? themeColor.pictureBorder : null}
            />
          ) : null}
        </div>

        <div className="singlePostName">{author}</div>
      </div>
      <div
        className="singlePostTitle"
        style={darkMode ? themeColor.post : null}
      >
        {title}
      </div>
      <div
        className="postDate"
        style={darkMode ? themeColor.dateAndlikes : null}
      >
        {time}
        {" · "}
        {date}, 2022
      </div>
      <div
        className="likesShareRepost"
        style={darkMode ? themeColor.dateAndlikes : null}
      >
        <span className="likes">
          <strong>{likes}</strong> Лайков
        </span>
        <span className="replies">
          <strong>{replies}</strong> Ответов
        </span>
        <span className="shares">
          <strong>{shares}</strong> Репостов
        </span>
      </div>
    </div>
  );
}

export default SinglePost;
