import React from "react";
import EnergyTable from "../components/EnergyTable";
import { energytable } from "../data/energytable";

const EnergyPage = () => {
  return (
    <div>
      <EnergyTable energy={energytable} />
    </div>
  );
};

export default EnergyPage;