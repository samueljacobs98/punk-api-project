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

  const getClass = (filter, isDiv) => {
    isDiv = isDiv || false;
    let returnClass = "filter-container__option";
    if (!isDiv) returnClass += "-text";
    if (theme === "dark") returnClass = `${returnClass} ${returnClass}--dark`;
    if (filters[`${filter}`] && theme === "dark") returnClass += "--active";
    if (filters[`${filter}`] && theme === "light")
      returnClass += " " + returnClass + "--active";
    return returnClass;
  };

  const abvClass = getClass("highABV", true) + " highABV";
  const classicClass = getClass("classicRange", true) + " classic";
  const phClass = getClass("acidic", true) + " ph";

  const abvTextClass = getClass("highABV", false) + " highABV";
  const classicTextClass = getClass("classicRange", false) + " classic";
  const phTextClass = getClass("acidic", false) + " ph";

  const filtersSubJSX = (
    <>
      <div className={abvClass} onClick={handleFilter}>
        <p className={abvTextClass}>{"High ABV (> 6.0%)"}</p>
        <img src={add} alt="add filter" className="highABV" />
      </div>
      <div className={classicClass} onClick={handleFilter}>
        <p className={classicTextClass}>Classic Range</p>
        <img src={add} alt="add filter" className="classic" />
      </div>
      <div className={phClass} onClick={handleFilter}>
        <p className={phTextClass}>{"Acidic (pH < 4)"}</p>
        <img src={add} alt="add filter" className="ph" />
      </div>
    </>
  );

  const filterJSX = (
    <>
      <div className="filter-container__container">
        <p className="filter-container__label">Filter</p>
        {windowType === "mob" && !toggle ? (
          <img
            className="filter-container__arrow"
            onClick={toggleFilter}
            src={theme === "light" ? downArrow : downArrowLight}
          />
        ) : (
          <img
            className="filter-container__arrow"
            onClick={toggleFilter}
            src={theme === "light" ? upArrow : upArrowLight}
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
