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

  const getHero = () => {
    if (theme === "light") {
      if (windowType === "desk") return deskHero;
      return mobHero;
    }
    if (windowType === "desk") return deskHeroDark;
    return mobHeroDark;
  };

  const headerJSX = (
    <>
      <img
        className={`header__hero--${windowType}`}
        src={getHero()}
        alt="heading background"
      />
      <img
        className={`${logoClass} header__logo--${windowType}`}
        src={logo}
        alt="Brewdog logo"
        width="190px"
      />
      <div
        className={`header__search-container header__search-container--${windowType}`}
      >
        <label htmlFor="search" className="search">
          Search beers
        </label>
        <input
          id="search"
          className={searchClass}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onInput={handleInput}
        />
      </div>
    </>
  );

  return <header className="header">{headerJSX}</header>;
};

export default Header;
