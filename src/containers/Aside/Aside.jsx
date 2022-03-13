import React from "react";

import "./Aside.scss";

import Sort from "../../components/Sort/Sort";
import Filter from "../../components/Filter/Filter";

const Aside = ({ windowType }) => {
  return (
    <aside className={`aside aside--${windowType}`}>
      <Sort windowType={windowType} />
      <Filter windowType={windowType} />
    </aside>
  );
};

export default Aside;
