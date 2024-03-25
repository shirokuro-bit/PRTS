import {ComplexStyleRule, keyframes, style} from "@vanilla-extract/css";

export const window = style({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const mainMenu = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
});

export const logoBox = style({
  borderTop: "solid",
  borderBottom: "solid"
});

const logoText: ComplexStyleRule = {
  margin: 0
};

export const logoText1 = style({
  ...logoText,
  fontSize: 55
});

export const logoText2 = style({
  ...logoText,
  fontSize: 10
});

export const logoText3 = style({
  ...logoText,
  fontSize: 21
});

const loginAnimation = keyframes({
  "0%": {opacity: 1},
  "100%": {opacity: 0}
})

export const loginText = style({
  fontSize: 25,
  animationName: `${loginAnimation}`,
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
  animationDuration: "2s",
  
})