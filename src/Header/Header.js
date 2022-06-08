import React, { useContext } from "react";
import ProfileButton from "./ProfileButton";
import CreditButton from "./CreditButton";
import TaskButton from "./TaskButton";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import ThemeSwitch from "../Themes/ThemeSwitch";

function Header() {
  const { themeColor, darkMode } = useContext(Context);
  return (
    <header style={darkMode ? themeColor.header : null}>
      <ThemeSwitch />
      <Link to="/about">
        {/* <img src={mops} /> */}
        <div className="crossTitle">Cross Posts</div>
      </Link>
      <TaskButton />
      <ProfileButton />
      <CreditButton />
    </header>
  );
}

export default Header;
