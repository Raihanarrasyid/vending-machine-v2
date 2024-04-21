import React from "react";
import Shelf from "./Frontlook/Shelf";
import Sidedrawer from "./Frontlook/Sidedrawer";
import { machineSettings } from "../global/state";
import Vent from "./Frontlook/Vent";

function Frontlook() {
  const vent = machineSettings.vent;
  return (
    <div className="relative flex w-[837px] h-[1884px] bg-black flex-col rounded-lg mt-1">
      <div className="h-[90%] flex ">
        <Shelf />
        <Sidedrawer />
      </div>
      <div className="mt-5">{vent && <Vent />}</div>
    </div>
  );
}

export default Frontlook;
