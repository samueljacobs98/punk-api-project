import downArrow from "../../assets/svgs/mobile/down-arrow.svg";
import upArrow from "../../assets/svgs/mobile/up-arrow.svg";
import add from "../../assets/svgs/desktop/add.svg";
import "./Filter.scss";
import { useState } from "react";

const Filter = ({ windowType }) => {
  const [toggle, setToggle] = useState(false);

  const toggleFilter = () => {
    setToggle(!toggle);
  };

  const mobJSX = () => {
    return (
      <>
        <div className="filter-container__container">
          <p className="filter-container__label">Filter</p>

          {!toggle ? (
            <img
              className="filter-container__arrow"
              onClick={toggleFilter}
              src={downArrow}
            />
          ) : (
            <img
              className="filter-container__arrow"
              onClick={toggleFilter}
              src={upArrow}
            />
          )}
        </div>
        {toggle && (
          <>
            <div className="filter-container__option">
              <p className="filter-container__option-text">
                {"High ABV (> 6.0%)"}
              </p>
              <img src={add} alt="add filter" />
            </div>
            <div className="filter-container__option filter-container__option--active">
              <p className="filter-container__option-text">Classic Range</p>
              <img src={add} alt="add filter" />
            </div>
            <div className="filter-container__option">
              <p className="filter-container__option-text">
                {"Acidic (pH < 4)"}
              </p>
              <img src={add} alt="add filter" />
            </div>
          </>
        )}
      </>
    );
  };

  const deskJSX = () => {
    return (
      <>
        <p className="filter-container__label">Filter</p>
        <div className="filter-container__option">
          <p className="filter-container__option-text">{"High ABV (> 6.0%)"}</p>
          <img src={add} alt="add filter" />
        </div>
        <div className="filter-container__option filter-container__option--active">
          <p className="filter-container__option-text">Classic Range</p>
          <img src={add} alt="add filter" />
        </div>
        <div className="filter-container__option">
          <p className="filter-container__option-text">{"Acidic (pH < 4)"}</p>
          <img src={add} alt="add filter" />
        </div>
      </>
    );
  };

  return (
    <div className={`filter-container filter-container--${windowType}`}>
      {windowType === "desk" ? deskJSX() : mobJSX()}
    </div>
  );
};

export default Filter;
