import { ColorStyles } from "@/theme";
import { textStyle } from "@/theme/text";
import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.S32]: {
    height: "32px",
    padding: "7px 20px",
    minWidth: "142px"
  },
  [scales.S32_ICON]: {
    height: "32px",
    padding: "0 8px",
  },
  [scales.S36]: {
    height: "36px",
    padding: "0 16px",
  },
  [scales.S40]: {
    height: "40px",
    padding: "10px 20px",
    minWidth: "186px",
    ...textStyle.R_14B
  },
};
export const styleVariants = {
  [variants.RED]: {
    backgroundColor: ColorStyles.RED,
    color: ColorStyles.WHITE,
  },
  [variants.BROWN]: {
    backgroundColor: ColorStyles.BROWN,
    color: ColorStyles.WHITE,
  },
  [variants.DEEPBROWN]: {
    backgroundColor: ColorStyles.DEEPBROWN,
    color: ColorStyles.WHITE,
  },
  [variants.LIGHTBROWN]: {
    backgroundColor: ColorStyles.LIGHTBROWN,
    color: ColorStyles.WHITE,
  },
  [variants.LINE]: {
    backgroundColor: ColorStyles.WHITE,
    color: ColorStyles.DEEPGREY,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: ColorStyles.LIGHTGREY
  },
  [variants.TRANSPARENT]: {
    backgroundColor: "transparent",
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

