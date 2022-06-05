import React, { useContext } from "react";
import "./Posts.css";
import { Context } from "../../../Context";

function Post() {
  const { tasks, theme } = useContext(Context);

  return (
    <div className="postWrapper" style={theme}>
      {tasks
        .map((element) => {
          return (
            <div key={element.id} className="post">
              <div className="postHeader">{element.author}</div>
              <div className="postTitle">{element.title}</div>
              <div className="postDate">
                {element.time}
                {" · "}
                {element.date}, 2022
              </div>
              <div className="likesShareRepost">
                <span className="likes">
                  <strong>{element.likes}</strong> Лайков
                </span>
                <span className="replies">
                  <strong>{element.replies}</strong> Ответов
                </span>
                <span className="shares">
                  <strong>{element.shares}</strong> Репостов
                </span>
              </div>
            </div>
          );
        })
        .reverse()}
    </div>
  );
}

export default Post;
