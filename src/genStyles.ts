import styled, {
  css,
  keyframes,
  createGlobalStyle,
} from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    padding:0;
    margin:0;
  }
  html{
    scroll-behavior:smooth;

  }

body {
  margin: 0 0  ${(props) => props.theme.headerHeight} 0;
  font-family: ${(props) => props.theme.bodyFont};
  background:${(props) => props.theme.colors.bodyColor};
  color:${(props) => props.theme.colors.textColor};
  font-size:${(props) => props.theme.normalFontSize}
}
h1,h2,h3,h4 {
  color: ${(props) => props.theme.colors.titleColor};
  font-weight:${(props) => props.theme.fontSemiBold};
}
img{
  height:auto;
  max-width:100%;
}
ul{
  list-style:none;
}
a {
  text-decoration:none;
}
`;
export const section = css`
  padding: 2rem 0 4rem;
`;

export const sectionTitle = css`
  font-size: ${(props) => props.theme.h1FontSize};
  text-align: center;
`;

export const container = css`
  max-width: 768px;
  margin-left: ${(props) => props.theme.mb1To5};
  margin-right: ${(props) => props.theme.mb1To5};
`;

export const sectionSubTitle = css`
  display: block;
  text-align: center;
  font-size: ${(props) => props.theme.smallFontSize};
  margin-bottom: ${(props) => props.theme.mb3};
`;

export const grid = css`
  display: grid;
  gap: 1.5rem;
`;

export const header = css`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${(props) => props.theme.zFixed};
  background-color: ${(props) => props.theme.colors.bodyColor};
`;

export const button = css`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.firstColor};
  padding: 1rem;
  color: #fff;
  font-weight: ${(props) => props.theme.fontMedium};
  border-radius: 0.5rem;
  &:hover {
    background: ${(props) => props.theme.colors.firstColorAlt};
  }
`;

export const buttonSmall = css`
  padding: 0.75rem 1rem;
`;
export const buttonLink = css`
  padding: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.firstColor};
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.firstColorAlt};
  }
`;
export const buttonIcon = css`
  font-size: 1.25rem;
  margin-left: ${(props) => props.theme.mb0To5};
  transition: 0.3s;
`;
export const buttonFlex = css`
  display: inline-flex;
  align-items: center;
`;
