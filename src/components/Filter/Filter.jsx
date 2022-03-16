import downArrow from "../../assets/svgs/mobile/down-arrow.svg";
import downArrowLight from "../../assets/svgs/mobile/down-arrow-light.svg";
import upArrow from "../../assets/svgs/mobile/up-arrow.svg";
import upArrowLight from "../../assets/svgs/mobile/up-arrow-light.svg";
import add from "../../assets/svgs/desktop/add.svg";
import "./Filter.scss";
import { useState } from "react";

const Filter = ({ windowType, filters, handleFilter, theme }) => {
  const [toggle, setToggle] = useState(false);

  const toggleFilter = () => {
    setToggle(!toggle);
  };

  const getClass = (filter) => {
    let returnClass = "filter-container__option";
    if (theme === "dark") returnClass = `${returnClass} ${returnClass}--dark`;
    if (filters[filter] && theme === "dark") returnClass += "--active";
    if (filters[filter] && theme === "light")
      returnClass += " " + returnClass + "--active";
    return returnClass;
  };

  const abvClass = getClass("highABV", true) + " highABV";
  const classicClass = getClass("classicRange", true) + " classic";
  const phClass = getClass("acidic", true) + " ph";

  const filtersSubJSX = (
    <>
      <label htmlFor="abvButton" className="button-label">
        Filter for high ABV only
      </label>
      <button id="abvButton" className={abvClass} onClick={handleFilter}>
        {"High ABV (> 6.0%)"}
        <img src={add} alt="add filter" className="highABV" />
      </button>
      <label htmlFor="classicButton" className="button-label">
        Filter for the Classic Range only
      </label>
      <button
        id="classicButton"
        className={classicClass}
        onClick={handleFilter}
      >
        {"Classic Range"}
        <img src={add} alt="add filter" className="classic" />
      </button>
      <label htmlFor="phButton" className="button-label">
        Filter for low ph (acidic) only
      </label>
      <button id="phButton" className={phClass} onClick={handleFilter}>
        {"Acidic (pH < 4)"}
        <img src={add} alt="add filter" className="ph" />
      </button>
    </>
  );

  const arrowSource = !toggle
    ? theme === "light"
      ? downArrow
      : downArrowLight
    : theme === "light"
    ? upArrow
    : upArrowLight;

  const filterJSX = (
    <>
      <div className="filter-container__container">
        <p className="filter-container__label">Filter</p>
        {windowType === "mob" && (
          <img
            className="filter-container__arrow"
            onClick={toggleFilter}
            src={arrowSource}
            alt="toggle filter menu"
          />
        )}
      </div>
      {windowType === "mob" && toggle && filtersSubJSX}
      {windowType === "desk" && filtersSubJSX}
    </>
  );

  return (
    <div className={`filter-container filter-container--${windowType}`}>
      {filterJSX}
    </div>
  );
};

export default Filter;
