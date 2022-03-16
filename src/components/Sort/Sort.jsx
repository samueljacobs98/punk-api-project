import "./Sort.scss";

const Sort = ({ windowType, handleSort, theme }) => {
  let containerClass = `sort-container sort-container--${windowType}`;
  if (theme === "dark") containerClass += " sort-container--dark";

  let selectClass = "sort-container__select";
  if (theme === "dark") selectClass += ` ${selectClass}--dark`;

  return (
    <div className={containerClass}>
      <label className={`sort-container__label`} htmlFor="sort-method">
        Sort
      </label>
      <select
        className={selectClass}
        name="sort-method"
        id="sort-method"
        onChange={handleSort}
      >
        <option value="none">Select...</option>
        <option value="abv-h2l">ABV (highest to lowest)</option>
        <option value="abv-l2h">ABV (lowest to highest)</option>
        <option value="acid-h2l">Acidity (highest to lowest)</option>
        <option value="acid-l2h">Acidity (lowest to highest)</option>
      </select>
    </div>
  );
};

export default Sort;
