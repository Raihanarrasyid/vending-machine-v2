import CocaColaSVG from "../assets/bottle-diet.svg";
import DasaniSVG from "../assets/bottle-dasani.svg";
import CokeSVG from "../assets/bottle-coke.svg";

export const ButtonContents = {
  1: ["A", "B", "C"],
  2: ["D", "E", "F"],
  3: ["1", "2", "3"],
  4: ["4", "5", "6"],
};

// Input your product details here
const CocaCola = {
  name: "Coca Cola",
  price: 1.5,
  image: CocaColaSVG,
};

const Dasani = {
  name: "Dasani",
  price: 1.5,
  image: DasaniSVG,
};

const Coke = {
  name: "Coke",
  price: 1.5,
  image: CokeSVG,
};

//Key represent Shelf and Index represent the Slot
export const Products = {
  A: [CocaCola, Dasani, Coke, CocaCola, Dasani, Coke],
  B: [CocaCola, Dasani, Coke, CocaCola, Dasani, Coke],
  C: [CocaCola, Dasani, Coke, CocaCola, Dasani, Coke],
  D: [CocaCola, Dasani, Coke, CocaCola, Dasani, Coke],
  E: [CocaCola, Dasani, Coke, CocaCola, Dasani, Coke],
  F: [CocaCola, Dasani, Coke, CocaCola, Dasani, Coke],
};

// machineSettings
export const machineSettings = {
  drawerColor: "#f80506",
  drawerLogo: "/drawer.webp",
  metalRollingColor: "#5B5B5B",
  sideLogo: "/side.webp",
  sideMachine: "#f80506",
  availableRows: 3,
  availableColumns: 4,
  vent: true,
};
