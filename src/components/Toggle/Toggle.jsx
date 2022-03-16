import React from "react";
import toDarkToggle from "../../assets/svgs/general/toDarkToggle.svg";
import toLightToggle from "../../assets/svgs/general/toLightToggle.svg";

import "./Toggle.scss";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <label htmlFor="toggle" className="toggle-label">
        Toggle Theme
      </label>
      <button id="toggle" onClick={toggleTheme} className="theme-toggle">
        <img
          src={theme === "light" ? toDarkToggle : toLightToggle}
          alt="toggle theme"
        />
      </button>
    </>
  );
};

export default Toggle;
