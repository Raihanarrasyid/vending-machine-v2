import React from "react";
import BottlesShelf from "./BottlesShelf";
import Drawer from "./Drawer";
import Glass from "./Glass";
import Vent from "./Vent";
import { machineSettings } from "../../global/state";

function Shelf() {
  const vent = machineSettings.vent;
  return (
    <div className="flex flex-col w-[80%] h-[100%] border-x-[22px] border-graytheme-light rounded-lg">
      <div className="relative h-[65%] mt-[33px] bg-graytheme-default flex justify-center items-center">
        <Glass />
        <BottlesShelf />
        <div
          style={{ boxShadow: "inset 0 5px 10px 5px rgba(0, 0, 0, 1)" }}
          className="absolute h-full w-full bg-graytheme-default z-[0]"
        ></div>
      </div>
      <div className="flex justify-center h-[35%] items-center flex-1 flex-col">
        <Drawer />
        {vent && <Vent />}
      </div>
    </div>
  );
}

export default Shelf;
