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
        <div className="singlePostPhoto">
          {picture ? (
            <img
              src={picture}
              alt=""
              className="picture"
              style={darkMode ? themeColor.pictureBorder : null}
            />
          ) : (
            <div
              className="lnr lnr-user profilePicture"
              style={darkMode ? themeColor.profilePicture : null}
            />
          )}
        </div>

        <div className="singlePostName">{author}</div>
      </div>
      <h2>{time}</h2>
      <h3>{likes}</h3>
    </div>
  );
}

export default SinglePost;
