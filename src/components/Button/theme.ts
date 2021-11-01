import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.S_32]: {
    height: "32px",
    padding: "7px 20px",
  },
  [scales.S_36]: {
    height: "36px",
    padding: "0 16px",
  },
  [scales.S_40]: {
    height: "40px",
    padding: "10px 20px",
    minWidth: "186px",
  },
};

export const styleVariants = {
  [variants.RED]: {
    backgroundColor: "main.red",
    color: "greyscale.white",
  },
  [variants.BROWN]: {
    backgroundColor: "brownscale.brown",
    color: "greyscale.white",
  },
  [variants.LIGHT_BROWN]: {
    backgroundColor: "brownscale.lightbrown",
    color: "greyscale.white",
  },
  [variants.LINE]: {
    backgroundColor: "white",
    color: "greyscale.deepgrey",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "greyscale.lightgrey"
  },


  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
};

