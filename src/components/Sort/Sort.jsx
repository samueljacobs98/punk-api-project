import "./Sort.scss";

const Sort = ({ windowType }) => {
  return (
    <div className={`sort-container sort-container--${windowType}`}>
      <label className={`sort-container__label`} htmlFor="sort-method">
        Sort
      </label>
      <select
        className={`sort-container__select`}
        name="sort-method"
        id="sort-method"
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
