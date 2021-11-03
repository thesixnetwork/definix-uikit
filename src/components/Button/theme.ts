import { ColorStyles } from "@/theme";
import { textStyle } from "@/theme/text";
import { Scales, Variants } from "./types";

export const scaleVariants = {
  [Scales.S32]: {
    height: "32px",
    padding: "7px 20px",
    minWidth: "142px"
  },
  [Scales.S32ICON]: {
    height: "32px",
    padding: "0 8px",
  },
  [Scales.S36]: {
    height: "36px",
    padding: "0 16px",
  },
  [Scales.S40]: {
    height: "40px",
    padding: "10px 20px",
    minWidth: "186px",
    ...textStyle.R_14B
  },
};
export const styleVariants = {
  [Variants.RED]: {
    backgroundColor: ColorStyles.RED,
    color: ColorStyles.WHITE,
  },
  [Variants.BROWN]: {
    backgroundColor: ColorStyles.BROWN,
    color: ColorStyles.WHITE,
  },
  [Variants.DEEPBROWN]: {
    backgroundColor: ColorStyles.DEEPBROWN,
    color: ColorStyles.WHITE,
  },
  [Variants.LIGHTBROWN]: {
    backgroundColor: ColorStyles.LIGHTBROWN,
    color: ColorStyles.WHITE,
  },
  [Variants.LINE]: {
    backgroundColor: ColorStyles.WHITE,
    color: ColorStyles.DEEPGREY,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: ColorStyles.LIGHTGREY
  },
  [Variants.TRANSPARENT]: {
    backgroundColor: "transparent",
  },


  [Variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [Variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [Variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [Variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [Variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [Variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [Variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
};

