import { ColorStyles } from "@/theme";
import { textStyle } from "@/theme/text";
import { ButtonScales, ButtonVariants } from "./types";

export const scaleVariants = {
  [ButtonScales.S32]: {
    height: "32px",
    padding: "7px 12px",
    minWidth: "142px",
    ...textStyle.R_12B,
  },
  [ButtonScales.S32ICON]: {
    height: "32px",
    padding: "0 8px",
  },
  [ButtonScales.S36]: {
    height: "36px",
    padding: "0 16px",
    ...textStyle.R_12B,
  },
  [ButtonScales.S40]: {
    height: "40px",
    padding: "10px 12px",
    minWidth: "186px",
    ...textStyle.R_14B,
  },
  [ButtonScales.S48]: {
    height: "48px",
    padding: "10px 12px",
    minWidth: "186px",
    ...textStyle.R_14B,
  },
};
export const styleVariants = {
  [ButtonVariants.RED]: {
    backgroundColor: ColorStyles.RED,
    color: ColorStyles.WHITE,
  },
  [ButtonVariants.BROWN]: {
    backgroundColor: ColorStyles.BROWN,
    color: ColorStyles.WHITE,
  },
  [ButtonVariants.DEEPBROWN]: {
    backgroundColor: ColorStyles.DEEPBROWN,
    color: ColorStyles.WHITE,
  },
  [ButtonVariants.LIGHTBROWN]: {
    backgroundColor: ColorStyles.LIGHTBROWN,
    color: ColorStyles.WHITE,
  },
  [ButtonVariants.LINE]: {
    backgroundColor: ColorStyles.WHITE,
    color: ColorStyles.DEEPGREY,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: ColorStyles.LIGHTGREY,
  },
  [ButtonVariants.TRANSPARENT]: {
    backgroundColor: "transparent",
  },

  [ButtonVariants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [ButtonVariants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [ButtonVariants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [ButtonVariants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [ButtonVariants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [ButtonVariants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [ButtonVariants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
};
