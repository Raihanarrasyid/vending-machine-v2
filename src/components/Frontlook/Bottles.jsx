import React, { useEffect, useState } from "react";
import MetalSeparator from "../svg/MetalSeparator";
import Metalroll from "../svg/Metalroll";
import { useSpring, animated } from "@react-spring/web";

import { useBuy } from "../../global/globalState";
import { machineSettings } from "../../global/state";

function Bottles({ bottle, value, column, row }) {
  const [bottleValue, setBottleValue] = useState(value);
  const buy = useBuy((state) => state.buy);
  const buyBottleCode = useBuy((state) => state.bottleCode);
  const setBuy = useBuy((state) => state.setBuy);
  const setBottle = useBuy((state) => state.setBottle);
  const [disappear, setDisappear] = useState(false);
  const [fall, setFall] = useState(false);
  const [shake, setShake] = useState(false);
  const setDrawer = useBuy((state) => state.setDrawer);

  const availableRow = machineSettings.availableRows;
  const availableColumn = machineSettings.availableColumns;

  const springPropsMetal = useSpring({
    transform: `translate(${disappear ? 10 : 0}px, ${disappear ? 10 : 0}px)`,
    opacity: disappear ? 0 : 1,
    config: { duration: 1200 },
  });

  const bottleFallPosition =
    value[0] === "A"
      ? 1000
      : value[0] === "B"
      ? 800
      : value[0] === "C"
      ? 600
      : value[0] === "D"
      ? 400
      : value[0] === "E"
      ? 200
      : 100;

  const springBeforeFall = useSpring({
    transform: `translate(0px, ${fall ? bottleFallPosition : 0}px)`,
    opacity: fall ? 0 : 1,
    rotate: fall ? 270 : 0,
    config: { duration: 800 },
    zIndex: fall ? 0 : 40,
  });

  const springAfterFall = useSpring({
    opacity: fall ? 0 : 1,
    config: { duration: 1000 },
  });

  const handleFall = () => {
    setFall(true);
    setTimeout(() => {
      setFall(false);
    }, 1000);
  };

  useEffect(() => {
    if (column > availableColumn || row > availableRow) {
      setBottleValue("");
    }
  }, []);

  useEffect(() => {
    if (buy && buyBottleCode === bottleValue) {
      setDisappear(true);
      setShake(true);
      const audio = new Audio("/bottle-shelf.mp3");
      audio.play();
      setTimeout(() => {
        handleFall();
      }, 2200);
      setTimeout(() => {
        setShake(false);
        setDisappear(false);
        setBuy(false);
        setBottle(bottle);
        setDrawer(true);
      }, 3200);
    }
  }, [buy]);

  return (
    <div className="relative flex flex-1 items-center justify-center">
      {row <= availableRow && column <= availableColumn && bottle.image && (
        <>
          <animated.div
            style={{ ...springPropsMetal, zIndex: springBeforeFall.zIndex }}
            className="absolute w-[100%] z-20 flex flex-1 justify-center right-2 items-end h-full"
          >
            <Metalroll />
          </animated.div>
          <div className="h-full w-full flex flex-1 items-end"></div>
          <animated.div
            style={fall ? springBeforeFall : springAfterFall}
            className="absolute flex flex-1 items-center justify-center z-10 right-2 bottom-1 w-full h-full"
          >
            <img
              src={bottle.image}
              alt={bottle.name}
              className="w-[40%] h-[80%]"
              style={shake ? { animation: "shake 0.5s" } : {}}
            />
          </animated.div>
        </>
      )}
      <div className="absolute z-0 w-full">
        <MetalSeparator />
      </div>
    </div>
  );
}

export default Bottles;
