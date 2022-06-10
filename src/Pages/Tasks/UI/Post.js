import React, { useContext } from "react";
import "./Posts.css";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";

function Post() {
  const { tasks, darkMode, themeColor } = useContext(Context);

  return (
    <div className="postWrapper">
      {tasks
        .map(
          ({
            author,
            title,
            time,
            date,
            likes,
            replies,
            shares,
            id,
            picture,
          }) => {
            return (
              <Link to={`/tasks/${id}`} key={id}>
                <div className="post" style={darkMode ? themeColor.post : null}>
                  <div className="headerWrapper">
                    <div className="pictureWrapper">
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
                    <div className="postHeader">{author}</div>
                  </div>

                  <div className="postTitle">{title}</div>
                  <div
                    className="postDate"
                    style={darkMode ? themeColor.likesShareRepost : null}
                  >
                    {time}
                    {" · "}
                    {date}, 2022
                  </div>
                  <div
                    className="likesShareRepost"
                    style={darkMode ? themeColor.likesShareRepost : null}
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
              </Link>
            );
          }
        )
        .reverse()}
    </div>
  );
}

export default Post;
