import {
  section,
  grid,
  container,
  button,
  buttonFlex,
  buttonIcon,
  sectionTitle,
  sectionSubTitle,
} from "../genStyles";
import styled from "styled-components";

import aboutImage from "../img/about.jpg";
const SectionContainer = styled.section`
  ${section}
`;
const SectionTitle = styled.h2`
  ${sectionTitle}
`;
const SectionSubTitle = styled.span`
  ${sectionSubTitle}
`;
const AboutContainer = styled.div`
  ${container}
  ${grid}
`;
const AboutImage = styled.img`
  width: 200px;
  border-radius: 0.5rem;
  align-self: center;
  justify-self: center;
`;
const AboutData = styled.div``;
const AboutDescription = styled.p`
  text-align: center;
  margin-bottom: ${(props) => props.theme.mb2To5};
`;
const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AboutTitleInfo = styled.span`
  font-size: ${(props) => props.theme.h2FontSize};
  text-align: center;
  font-weight: ${(props) => props.theme.fontSemiBold};
  display: block;
  color: ${(props) => props.theme.colors.titleColor};
`;
const AboutTitleInfoName = styled.span`
  font-size: ${(props) => props.theme.smallFontSize};
  display: block;
  text-align: center;
`;
const AboutButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutButton = styled.a`
  ${button}
  ${buttonFlex}
`;
const DownloadIcon = styled.i`
  ${buttonIcon}
`;
const About = () => {
  return (
    <SectionContainer id="about">
      <SectionTitle>About Me </SectionTitle>
      <SectionSubTitle> My Introduction</SectionSubTitle>
      <AboutContainer>
        <AboutImage src={aboutImage} />
        <AboutData>
          <AboutDescription>
            Web developer, with extensive knowledge and years of experience,
            working in web technology and UI/UX design, delivering quality work.
          </AboutDescription>
          <AboutInfo>
            <div>
              <AboutTitleInfo>+08</AboutTitleInfo>
              <AboutTitleInfoName>
                Years <br /> experience{" "}
              </AboutTitleInfoName>
            </div>
            <div>
              <AboutTitleInfo>+20</AboutTitleInfo>
              <AboutTitleInfoName>
                Completed <br /> Projects{" "}
              </AboutTitleInfoName>
            </div>
            <div>
              <AboutTitleInfo>+05</AboutTitleInfo>
              <AboutTitleInfoName>
                Companies <br /> Worked{" "}
              </AboutTitleInfoName>
            </div>
          </AboutInfo>
        </AboutData>
        <AboutButtons>
          <AboutButton href="#">
            Download CV
            <DownloadIcon className="uil uil-download-alt"></DownloadIcon>
          </AboutButton>
        </AboutButtons>
      </AboutContainer>
    </SectionContainer>
  );
};

export default About;
