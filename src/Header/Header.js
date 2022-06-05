import React, { useContext } from "react";
import ProfileButton from "./ProfileButton";
import CreditButton from "./CreditButton";
import TaskButton from "./TaskButton";
import mops from "../img/Cross Posts.png";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { themeColor, darkMode } = useContext(Context);
  return (
    <header style={darkMode ? themeColor.header : null}>
      <Link to="/about">
        <img src={mops} />
      </Link>
      <TaskButton />
      <ProfileButton />
      <CreditButton />
    </header>
  );
}

export default Header;
