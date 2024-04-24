import React from "react";
import { machineSettings } from "../global/state";

function Sidepart() {
  const sideMachine = machineSettings.sideMachine;
  const sideLogo = machineSettings.sideLogo;
  return (
    <div className="flex relative items-center justify-center">
      <div
        style={{
          borderLeft: `229px solid ${sideMachine}`,
          borderTop: "180px solid transparent",
          borderBottom: "180px solid transparent",
        }}
        className="h-[1880px] flex items-center justify-center relative"
      ></div>
      <img src={sideLogo} alt="side" className="w-[150px] h-[545px] absolute" />
    </div>
  );
}

export default Sidepart;
