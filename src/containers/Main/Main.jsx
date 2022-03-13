import React from "react";
import Aside from "../Aside/Aside";

const Main = ({ windowType }) => {
  return (
    <main>
      <Aside windowType={windowType} />
    </main>
  );
};

export default Main;
