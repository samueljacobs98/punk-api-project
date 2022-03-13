import "./Header.scss";

import deskHero from "../../assets/svgs/desktop/hero.svg";
import mobHero from "../../assets/svgs/mobile/hero.svg";
import logo from "../../assets/images/logo.png";

const Header = ({ windowType }) => {
  const mobHeader = () => {
    const headerJSX = (
      <>
        <img
          className="header__hero--mob"
          src={mobHero}
          alt="heading background"
        />
        <img
          className="header__logo header__logo--mob"
          src={logo}
          alt="Brewdog logo"
          width="190px"
        />
        <div className="header__search-container header__search-container--mob">
          <input
            className="header__search"
            type="text"
            placeholder="Search..."
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
          src={deskHero}
          alt="heading background"
        />
        <img
          className="header__logo header__logo--desk"
          src={logo}
          alt="Brewdog logo"
          width="190px"
        />
        <div className="header__search-container header__search-container--desk">
          <input
            className="header__search"
            type="text"
            placeholder="Search..."
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
