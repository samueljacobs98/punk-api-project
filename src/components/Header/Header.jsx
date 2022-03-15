import "./Header.scss";

import deskHero from "../../assets/svgs/desktop/hero.svg";
import deskHeroDark from "../../assets/svgs/desktop/heroDark.svg";
import mobHero from "../../assets/svgs/mobile/hero.svg";
import mobHeroDark from "../../assets/svgs/mobile/heroDark.svg";
import logo from "../../assets/images/logo.png";

const Header = ({ windowType, searchTerm, handleInput, theme }) => {
  let searchClass = "header__search";
  let logoClass = "header__logo";
  if (theme === "dark") {
    searchClass += " header__search--dark";
    logoClass += ` ${logoClass}--dark`;
  }
  const mobHeader = () => {
    const headerJSX = (
      <>
        <img
          className="header__hero--mob"
          src={theme === "light" ? mobHero : mobHeroDark}
          alt="heading background"
        />
        <img
          className={`${logoClass} header__logo--mob`}
          src={logo}
          alt="Brewdog logo"
          width="190px"
        />
        <div className="header__search-container header__search-container--mob">
          <input
            className={searchClass}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onInput={handleInput}
          />
        </div>
      </>
    );
    return headerJSX;
  };

  const deskHeader = () => {
    const headerJSX = (
      <>
        <img
          className="header__hero--desk"
          src={theme === "light" ? deskHero : deskHeroDark}
          alt="heading background"
        />
        <img
          className={`${logoClass} header__logo--desk`}
          src={logo}
          alt="Brewdog logo"
          width="190px"
        />
        <div className="header__search-container header__search-container--desk">
          <input
            className={searchClass}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onInput={handleInput}
          />
        </div>
      </>
    );

    return headerJSX;
  };

  return (
    <header className="header">
      {windowType === "desk" ? deskHeader() : mobHeader()}
    </header>
  );
};

export default Header;
