import React, { useContext } from "react";
import { Context } from "../Context";
import "./ThemeBtn.css";

function ThemeSwitch() {
  const { darkMode, setDarkMode } = useContext(Context);

  function toogleThemeSwitch() {
    darkMode === false ? setDarkMode(true) : setDarkMode(false);
  }

  return (
    <div className="themeWrapper">
      <button className="themeSwitch" onClick={toogleThemeSwitch}>
        {darkMode ? (
          <span className="lnr lnr-sun" style={{ color: "#b0bac2" }} />
        ) : (
          <span className="lnr lnr-moon" />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitch;
