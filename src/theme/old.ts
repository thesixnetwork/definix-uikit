const dark = {
  "siteWidth": 1200,
  "breakpoints": ["0px", "600px", "960px", "1280px", "1920px"],
  "breakpointMap": {
    "xs": 0,
    "sm": 600,
    "md": 960,
    "lg": 1280,
    "xl": 1920
  },
  "mediaQueries": {
    "xs": "@media screen and (min-width: 0px)",
    "sm": "@media screen and (min-width: 600px)",
    "md": "@media screen and (min-width: 960px)",
    "lg": "@media screen and (min-width: 1280px)",
    "xl": "@media screen and (min-width: 1920px)",
    "nav": "@media screen and (min-width: 960px)"
  },
  "spacing": [0, 4, 8, 16, 24, 32, 48, 64],
  "shadows": {
    "level1": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    "active": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    "success": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    "warning": "0px 0px 0px 1px #d42837, 0px 0px 0px 4px rgba(212, 40, 55, 0.2)",
    "focus": "0px 0px 0px 1px #0973B9, 0px 0px 0px 4px rgba(9, 115, 185, 0.2)",
    "inset": "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
    "inset2": "inset 0 6px 30px rgba(165, 194, 205, 0.5)",
    "inset3": "inset 0 1px 15px rgba(16, 39, 72, 0.2)",
    "elevation": "0 1px 2px rgba(0,0,0,0.16)",
    "elevation1": "0 3px 6px rgba(0,0,0,0.16)",
    "elevation2": "0 6px 9px rgba(0,0,0,0.16)",
    "elevation3": "0 6px 30px rgba(165, 194, 205, 0.5)"
  },
  "radii": {
    "small": "8px",
    "medium": "16px",
    "large": "32px",
    "default": "8px",
    "card": "12px",
    "circle": "50%"
  },
  "zIndices": {
    "dropdown": 10,
    "modal": 100
  },
  "isDark": false,
  "alert": {
    "background": "#FFFFFF"
  },
  "button": {
    "primary": {
      "background": "#1587C9",
      "backgroundActive": "#004889",
      "backgroundHover": "#59a1ec",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
      "boxShadowActive": "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    },
    "secondary": {
      "background": "#FFFFFF",
      "backgroundActive": "#FFFFFF",
      "backgroundHover": "#1587C9",
      "border": "1px solid #1587C9",
      "borderColorHover": "#1587C9",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#1587C9",
      "colorHover": "#FFFFFF"
    },
    "tertiary": {
      "background": "#EFF4F5",
      "backgroundActive": "#EFF4F5",
      "backgroundHover": "#EFF4F5",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#1587C9",
      "colorHover": "#1587C9"
    },
    "text": {
      "background": "transparent",
      "backgroundActive": "transparent",
      "backgroundHover": "#EFF4F5",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#1587C9",
      "colorHover": "#1587C9"
    },
    "danger": {
      "background": "#d42837",
      "backgroundActive": "#D43285",
      "backgroundHover": "#d74956",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    },
    "subtle": {
      "background": "#8C90A5",
      "backgroundActive": "#8C90A5D9",
      "backgroundHover": "#8C90A5B3",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    },
    "success": {
      "background": "#2A9D8F",
      "backgroundActive": "#2A9D8FD9",
      "backgroundHover": "#2A9D8FB3",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    }
  },
  "colors": {
    "failure": "#d42837",
    "primary": "#1587C9",
    "primaryBright": "#59a1ec",
    "primaryDark": "#004889",
    "secondary": "#0973B9",
    "success": "#2A9D8F",
    "successAlpha": "rgba(42,157,143,0.1)",
    "warning": "#E5B339",
    "binance": "#F0B90B",
    "background": "#FCFCFC",
    "backgroundHeader": "#FFFFFF",
    "backgroundSideMenu": "#FFFFFF",
    "backgroundFooter": "#FFFFFF",
    "backgroundDisabled": "#F6F7FA",
    "backgroundBox": "rgba(186, 191, 199, 0.12)",
    "backgroundGray": "#F7F6FB",
    "backgroundRadial": "radial-gradient(#FFFFFF, #e2e7f4)",
    "backgroundPolygon": "/static/media/polygon-white.79f48ae8.png",
    "backgroundBlueGradient": "linear-gradient(#0D418E, #349BE7)",
    "contrast": "#191326",
    "invertedContrast": "#FFFFFF",
    "input": "#EFF4F5",
    "tertiary": "#EFF4F5",
    "text": "#222331",
    "textInvert": "#222331",
    "textDisabled": "#D7D7D7",
    "textSubtle": "#8C90A5",
    "card": "#FFFFFF",
    "cardFooter": "#fafcff",
    "gradients": {
      "bubblegum": "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)"
    },
    "border": "#ECECEC",
    "white": "#FFFFFF",
    "placeholder": "#CCCCCC",
    "harvest": "#24B181",
    "grayBlue": "#e2e7f4",
    "connectBtnBorder": "#FFFFFF",
    "connectBtnInner": "#8C90A5",
    "networkBtnBorder": "#FFFFFF",
    "networkBtnInner": "#FFFFFF"
  },
  "card": {
    "background": "#FFFFFF",
    "boxShadow": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    "boxShadowActive": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    "boxShadowSuccess": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    "boxShadowWarning": "0px 0px 0px 1px #d42837, 0px 0px 0px 4px rgba(212, 40, 55, 0.2)",
    "cardHeaderBackground": "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)"
  },
  "toggle": {
    "handleBackground": "#FFFFFF"
  },
  "nav": {
    "background": "#FFFFFF",
    "hover": "#EEEAF4"
  },
  "modal": {
    "background": "#FFFFFF"
  },
  "radio": {
    "handleBackground": "#FFFFFF"
  }
}

const light = {
  "siteWidth": 1200,
  "breakpoints": ["0px", "600px", "960px", "1280px", "1920px"],
  "breakpointMap": {
    "xs": 0,
    "sm": 600,
    "md": 960,
    "lg": 1280,
    "xl": 1920
  },
  "mediaQueries": {
    "xs": "@media screen and (min-width: 0px)",
    "sm": "@media screen and (min-width: 600px)",
    "md": "@media screen and (min-width: 960px)",
    "lg": "@media screen and (min-width: 1280px)",
    "xl": "@media screen and (min-width: 1920px)",
    "nav": "@media screen and (min-width: 960px)"
  },
  "spacing": [0, 4, 8, 16, 24, 32, 48, 64],
  "shadows": {
    "level1": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    "active": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    "success": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    "warning": "0px 0px 0px 1px #d42837, 0px 0px 0px 4px rgba(212, 40, 55, 0.2)",
    "focus": "0px 0px 0px 1px #0973B9, 0px 0px 0px 4px rgba(9, 115, 185, 0.2)",
    "inset": "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
    "inset2": "inset 0 6px 30px rgba(165, 194, 205, 0.5)",
    "inset3": "inset 0 1px 15px rgba(16, 39, 72, 0.2)",
    "elevation": "0 1px 2px rgba(0,0,0,0.16)",
    "elevation1": "0 3px 6px rgba(0,0,0,0.16)",
    "elevation2": "0 6px 9px rgba(0,0,0,0.16)",
    "elevation3": "0 6px 30px rgba(165, 194, 205, 0.5)"
  },
  "radii": {
    "small": "8px",
    "medium": "16px",
    "large": "32px",
    "default": "8px",
    "card": "12px",
    "circle": "50%"
  },
  "zIndices": {
    "dropdown": 10,
    "modal": 100
  },
  "isDark": true,
  "alert": {
    "background": "#212121"
  },
  "button": {
    "primary": {
      "background": "#1587C9",
      "backgroundActive": "#004889",
      "backgroundHover": "#59a1ec",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
      "boxShadowActive": "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    },
    "secondary": {
      "background": "#2c2c2c",
      "backgroundActive": "#FFFFFF",
      "backgroundHover": "#1587C9",
      "border": "1px solid #57575B",
      "borderColorHover": "#1587C9",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    },
    "tertiary": {
      "background": "#2c2c2c",
      "backgroundActive": "#2c2c2c",
      "backgroundHover": "#2c2c2c",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#1587C9",
      "colorHover": "#1587C9"
    },
    "text": {
      "background": "transparent",
      "backgroundActive": "transparent",
      "backgroundHover": "#2c2c2c",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#1587C9",
      "colorHover": "#1587C9"
    },
    "danger": {
      "background": "#d42837",
      "backgroundActive": "#D43285",
      "backgroundHover": "#d74956",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    },
    "subtle": {
      "background": "#8C90A5",
      "backgroundActive": "#8C90A5D9",
      "backgroundHover": "#8C90A5B3",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    },
    "success": {
      "background": "#2A9D8F",
      "backgroundActive": "#2A9D8FD9",
      "backgroundHover": "#2A9D8FB3",
      "border": 0,
      "borderColorHover": "currentColor",
      "boxShadow": "none",
      "boxShadowActive": "none",
      "color": "#FFFFFF",
      "colorHover": "#FFFFFF"
    }
  },
  "colors": {
    "failure": "#d42837",
    "primary": "#1587C9",
    "primaryBright": "#59a1ec",
    "primaryDark": "#0098A1",
    "secondary": "#9A6AFF",
    "success": "#2A9D8F",
    "successAlpha": "rgba(42,157,143,0.1)",
    "warning": "#E5B339",
    "binance": "#F0B90B",
    "background": "#100C18",
    "backgroundHeader": "#1E1E1E",
    "backgroundSideMenu": "#2E2F30",
    "backgroundFooter": "#1C1C1D",
    "backgroundDisabled": "#2c2c2c",
    "backgroundBox": "rgba(186, 191, 199, 0.12)",
    "backgroundGray": "#100C18",
    "backgroundRadial": "#1A1A1A",
    "backgroundPolygon": "/static/media/polygon-black.e9dc8efe.png",
    "backgroundBlueGradient": "linear-gradient(#0D418E, #349BE7)",
    "contrast": "#FFFFFF",
    "invertedContrast": "#2c2c2c",
    "input": "#483f5a",
    "tertiary": "#2c2c2c",
    "text": "#FFFFFF",
    "textInvert": "#222331",
    "textDisabled": "#464646",
    "textSubtle": "#737375",
    "card": "#212121",
    "cardFooter": "#212121",
    "gradients": {
      "bubblegum": "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)"
    },
    "border": "#57575B",
    "white": "#FFFFFF",
    "placeholder": "#CCCCCC",
    "harvest": "#24B181",
    "grayBlue": "#e2e7f4",
    "connectBtnBorder": "#3D3D3D",
    "connectBtnInner": "#57575B",
    "networkBtnBorder": "#57575B",
    "networkBtnInner": "#2c2c2c"
  },
  "card": {
    "background": "#212121",
    "boxShadow": "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    "boxShadowActive": "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    "boxShadowSuccess": "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    "boxShadowWarning": "0px 0px 0px 1px #d42837, 0px 0px 0px 4px rgba(212, 40, 55, 0.2)",
    "cardHeaderBackground": "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)"
  },
  "toggle": {
    "handleBackground": "#212121"
  },
  "nav": {
    "background": "#212121",
    "hover": "#473d5d"
  },
  "modal": {
    "background": "#212121"
  },
  "radio": {
    "handleBackground": "#212121"
  }
}

export default {
  dark,
  light
};