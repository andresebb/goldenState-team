import React from "react";
import Holders from "./Holders";
import Alternetes from "./Alternetes";

const SelectedTeam = () => {
  return (
    <section className="selectTeam__container">
      <Holders />
      <Alternetes />
    </section>
  );
};

export default SelectedTeam;
