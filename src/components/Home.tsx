import React from "react";
import {
  container,
  grid,
  section,
  button,
  buttonIcon,
  buttonFlex,
} from "../genStyles";
import styled from "styled-components";
import { socials } from "../data/navbar";
import perfil from "../img/perfil.png";
const SectionContainer = styled.section`
  ${section}
`;
const MainContainer = styled.div`
  ${container}
  ${grid}
  gap: 1rem;
`;
const HomeContent = styled.div`
  ${grid}
  grid-template-columns:0.5fr 3fr;
  align-items: center;
  padding-top: 3.5rem;
`;
const HomeImage = styled.div``;
const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;
const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.firstColor};
  &:hover {
    color: ${(props) => props.theme.colors.firstColorAlt};
  }
`;
const ProfileImage = styled.image`
  width: 170px;
`;
const HomeBlob = styled.svg`
  width: 200px;
  fill: ${(props) => props.theme.colors.firstColor};
`;
const IntroductionData = styled.div`
  grid-column: 1/3;
`;
const HomeTitle = styled.h1`
  font-size: ${(props) => props.theme.bigFontSize};
`;
const HomeSubTitle = styled.h2`
  font-size: ${(props) => props.theme.h3FontSize};
  color: ${(props) => props.theme.colors.textColor};
  font-weight: ${(props) => props.theme.fontMedium};
  margin-bottom: ${(props) => props.theme.mb0To75};
`;
const Description = styled.p`
  margin-bottom: ${(props) => props.theme.mb2};
`;
const ContactMeButton = styled.a`
  ${button}
  ${buttonFlex}
  margin-bottom:1rem;
`;
const ContactMeIcon = styled.i`
  ${buttonIcon}
`;
const Scroll = styled.div`
  display: none;
`;
const ScrollButton = styled.a`
  color: ${(props) => props.theme.colors.firstColor};
  ${buttonFlex}
  transition: 0.3s;

  &:hover {
    transform: translateY(0.25rem);
  }
`;
const HomeScrollMouse = styled.i`
  font-size: 2rem;
`;
const ScrollName = styled.span`
  font-size: ${(props) => props.theme.smallFontSize};
  font-weight: ${(props) => props.theme.fontMedium};
  color: ${(props) => props.theme.colors.titleColor};
  margin-right: ${(props) => props.theme.mb0To25};
`;
const HomeScrollArrow = styled.i`
  font-size: 1.25rem;
`;
const Home = () => {
  return (
    <SectionContainer id="home">
      <MainContainer>
        <HomeContent>
          <SocialContainer>
            {socials.map((item, index) => (
              <SocialIcon href={item.path} key={index} target="_blank">
                <i className={item.icon}></i>
              </SocialIcon>
            ))}
          </SocialContainer>
          <HomeImage>
            <HomeBlob
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/HomeBlob"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <ProfileImage href={perfil} x="12" y="18" />
              </g>
            </HomeBlob>
          </HomeImage>
          <IntroductionData>
            <HomeTitle>Hi, I'am Barnabas</HomeTitle>
            <HomeSubTitle>FrontEnd Developer</HomeSubTitle>
            <Description>
              High level experience in web design and development knowledge,
              producing quality work.
            </Description>
            <ContactMeButton href="#Contact">
              Contact Me{" "}
              <ContactMeIcon className="uil uil-message"></ContactMeIcon>
            </ContactMeButton>
            <Scroll>
              <ScrollButton>
                <HomeScrollMouse className="uil uil-mouse-alt"></HomeScrollMouse>
                <ScrollName>Scroll down</ScrollName>
                <HomeScrollArrow className="uil uil-arrow-down"></HomeScrollArrow>
              </ScrollButton>
            </Scroll>
          </IntroductionData>
        </HomeContent>
      </MainContainer>
    </SectionContainer>
  );
};

export default Home;
