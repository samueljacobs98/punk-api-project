import downArrow from "../../assets/svgs/mobile/down-arrow.svg";
import upArrow from "../../assets/svgs/mobile/up-arrow.svg";
import add from "../../assets/svgs/desktop/add.svg";
import "./Filter.scss";
import { useState } from "react";

const Filter = ({ windowType, filters, handleFilter }) => {
  const [toggle, setToggle] = useState(false);

  const toggleFilter = () => {
    setToggle(!toggle);
  };

  const abvClass = filters.highABV
    ? "filter-container__option filter-container__option--active highABV"
    : "filter-container__option highABV";

  const classicClass = filters.classicRange
    ? "filter-container__option filter-container__option--active classic"
    : "filter-container__option classic";

  const phClass = filters.acidic
    ? "filter-container__option filter-container__option--active ph"
    : "filter-container__option ph";

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
            <div className={abvClass} onClick={handleFilter}>
              <p className="filter-container__option-text highABV">
                {"High ABV (> 6.0%)"}
              </p>
              <img src={add} alt="add filter" className="highABV" />
            </div>
            <div className={classicClass} onClick={handleFilter}>
              <p className="filter-container__option-text classic">
                Classic Range
              </p>
              <img src={add} alt="add filter" className="classic" />
            </div>
            <div className={phClass} onClick={handleFilter}>
              <p className="filter-container__option-text ph">
                {"Acidic (pH < 4)"}
              </p>
              <img src={add} alt="add filter" className="ph" />
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
        <div className={abvClass} onClick={handleFilter}>
          <p className="filter-container__option-text highABV">
            {"High ABV (> 6.0%)"}
          </p>
          <img src={add} alt="add filter" className="highABV" />
        </div>
        <div className={classicClass} onClick={handleFilter}>
          <p className="filter-container__option-text classic">Classic Range</p>
          <img src={add} alt="add filter" className="classic" />
        </div>
        <div className="filter-container__option ph" onClick={handleFilter}>
          <p className="filter-container__option-text ph">
            {"Acidic (pH < 4)"}
          </p>
          <img src={add} alt="add filter" className="ph" />
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
