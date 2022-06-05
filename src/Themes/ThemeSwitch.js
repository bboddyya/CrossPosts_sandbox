import React, { useContext } from "react";
import { Context } from "../Context";
import "./ThemeBtn.css";

function ThemeSwitch() {
  const { darkMode, setDarkMode } = useContext(Context);

  function toogleThemeSwitch() {
    darkMode === false ? setDarkMode(true) : setDarkMode(false);
    console.log(darkMode);
  }

  return (
    <div className="themeWrapper">
      <button className="themeSwitch" onClick={toogleThemeSwitch}>
        {darkMode ? (
          <span class="lnr lnr-sun"></span>
        ) : (
          <span className="lnr lnr-moon"></span>
        )}
      </button>
    </div>
  );
}

export default ThemeSwitch;
