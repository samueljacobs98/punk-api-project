import React from "react";
import toDarkToggle from "../../assets/svgs/general/toDarkToggle.svg";
import toLightToggle from "../../assets/svgs/general/toLightToggle.svg";

import "./Toggle.scss";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <img
      className="theme-toggle"
      src={theme === "light" ? toDarkToggle : toLightToggle}
      alt="toggle theme"
      onClick={toggleTheme}
    />
  );
};

export default Toggle;
