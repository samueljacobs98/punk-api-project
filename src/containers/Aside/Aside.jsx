import React from "react";

import "./Aside.scss";

import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";

const Aside = ({ windowType, filters, handleFilter, handleSort, theme }) => {
  return (
    <aside className={`aside aside--${windowType}`}>
      <Sort windowType={windowType} handleSort={handleSort} theme={theme} />
      <Filter
        windowType={windowType}
        filters={filters}
        handleFilter={handleFilter}
        theme={theme}
      />
    </aside>
  );
};

export default Aside;
