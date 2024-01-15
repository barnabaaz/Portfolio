import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    headerHeight: string;
    borderRadius: string;
    bodyFont: string;
    bigFontSize: string;
    h1FontSize: string;
    h2FontSize: string;
    h3FontSize: string;
    normalFontSize: string;
    smallFontSize: string;
    smallerFontSize: string;
    fontMedium: string;
    fontSemiBold: string;
    mb0To25: string;
    mb0To5: string;
    mb0To75: string;
    mb1: string;
    mb2: string;
    mb1To5: string;
    mb1To5: string;
    mb2To5: string;
    mb3: string;
    zTooltip: number;
    zFixed: number;
    zModel: number;

    colors: {
      firstColor: string;
      firstColorSecond: string;
      firstColorAlt: string;
      firstColorLighter: string;
      titleColor: string;
      textColor: string;
      textColorLight: string;
      inputColor: string;
      bodyColor: string;
      containerColor: string;
    };
    screenSize9688: {
      bigFontSize: string;
      h1FontSize: string;
      h2FontSize: string;
      h3FontSize: string;
      normalFontSize: string;
      smallFontSize: string;
      smallerFontSize: string;
    };
  }
}
