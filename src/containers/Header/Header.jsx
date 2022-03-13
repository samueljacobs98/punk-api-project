import React from "react";
import "./Header.scss";

import mobHero from "../../assets/svgs/mobile/hero.svg";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__hero" src={mobHero} alt="heading background" />
      <img
        className="header__logo"
        src={logo}
        alt="Brewdog logo"
        width="190px"
      />
      <div className="header__mob-search-container">
        <input className="header__search" type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
