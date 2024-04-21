import React from "react";
import Frontlook from "../components/Frontlook";
import Sidepart from "../components/Sidepart";
import { Element } from "react-scroll";

function VendingMachine() {
  return (
    <div className="flex justify-center gap-0 w-full flex-1 overflow-auto">
      <Element name="topOfPage" />
      <Frontlook />
      <Sidepart />
    </div>
  );
}

export default VendingMachine;
