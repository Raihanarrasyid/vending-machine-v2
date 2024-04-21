import React from "react";
import { Products } from "../../global/state";
import Bottles from "./Bottles";

function BottleRow({ Shelf }) {
  return (
    <div className="flex justify-evenly flex-1 h-[80%]">
      {Products[`${Shelf}`].map((bottle, index) => (
        <Bottles
          key={Shelf + (index + 1)}
          value={Shelf + (index + 1)}
          bottle={bottle}
        />
      ))}
    </div>
  );
}

export default BottleRow;
