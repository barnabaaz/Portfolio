import { DefaultTheme } from "styled-components";

const Theme = (hueColor: string): DefaultTheme => {
  return {
    headerHeight: "3rem",
    borderRadius: "1rem",
    bodyFont: ` 'Poppins', sans-serif `,
    bigFontSize: "2rem",
    h1FontSize: "1.5rem",
    h2FontSize: "1.25rem",
    h3FontSize: "1.125rem",
    normalFontSize: "0.983rem",
    smallFontSize: "0.813rem",
    smallerFontSize: "0.75rem",
    fontMedium: "500",
    fontSemiBold: "600",
    mb0To25: "0.25rem",
    mb0To5: "0.5rem",
    mb0To75: "1.5rem",
    mb1: "1rem",
    mb1To5: "1.5rem",
    mb2: "2rem",
    mb2To5: "2.5rem",
    mb3: "3rem",
    zTooltip: 10,
    zFixed: 100,
    zModel: 100,
    screenSize9688: {
      bigFontSize: "3rem",
      h1FontSize: "2.25rem",
      h2FontSize: "1.5rem",
      h3FontSize: "1.25rem",
      normalFontSize: "1rem",
      smallFontSize: "0.13rem",
      smallerFontSize: "0.813re",
    },

    colors: {
      firstColor: `hsl(${hueColor},69%, 61%)`,
      firstColorSecond: `hsl(${hueColor},69%, 61%)`,
      firstColorAlt: `hsl(${hueColor},57%, 53%)`,
      firstColorLighter: `hsl(${hueColor},92%, 85%)`,
      titleColor: `hsl(${hueColor},8%, 16%)`,
      textColor: `hsl(${hueColor},8%, 45%)`,
      textColorLight: `hsl(${hueColor},7%, 65%)`,
      inputColor: `hsl(${hueColor},70%, 96%)`,
      bodyColor: `hsl(${hueColor},60%, 99%)`,
      containerColor: "white",
    },
  };
};

export default Theme;
