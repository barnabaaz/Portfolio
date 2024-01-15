import React from "react";
import {
  section,
  container,
  grid,
  sectionTitle,
  sectionSubTitle,
} from "../genStyles";
import styled, { keyframes } from "styled-components";

interface Width {
  width: string;
}
interface Open {
  open: boolean;
}
const Container = styled.section`
  ${section}
  row-gap:0;
`;
const SectionTitle = styled.h2`
  ${sectionTitle}
`;
const SectionSubTitle = styled.span`
  ${sectionSubTitle}
`;
const SkillsContainer = styled.div`
  ${grid}
  ${container}
`;
const SkillsContent = styled.div``;
const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mb2To5};
  cursor: pointer;
`;
const SkillsIcon = styled.i`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.firstColor};
  margin-right: ${(props) => props.theme.mb0To75};
`;
const SkillsTitle = styled.h1`
  font-size: ${(props) => props.theme.h3FontSize};
  transition: 0.4s;
`;
const SkillsSubtitle = styled.span`
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.colors.textColorLight};
`;
const SkillsArrow = styled.i<Open>`
  font-size: 2rem;
  margin-left: auto;
  transition: 0.4s;
  transform: ${(props) => props.open && "rotate(-180deg)"};
`;
const Wrapper = styled.div<Open>`
  display: grid;
  position: relative;
  overflow: hidden;
  grid-template-rows: ${(props) => (props.open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease;
`;
const SkillsList = styled.div<Open>`
  ${grid};
  min-height: 0;
  row-gap: 1.5rem;
  padding-left: 2.7rem;
  margin-bottom: ${(props) => props.open && props.theme.mb2To5};
`;

const SkillsData = styled.div``;
const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.mb0To5};
`;
const SkillsName = styled.h3`
  font-size: ${(props) => props.theme.normalFontSize};
  font-weight: ${(props) => props.theme.fontMedium};
`;
const SkillBar = styled.div`
  height: 5px;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.firstColorLighter};
`;
const SkillPercentage = styled.span<Width>`
  height: 5px;
  display: block;
  background-color: ${(props) => props.theme.colors.firstColor};
  border-radius: 0.25rem;
  width: ${(props) => props.width};
`;

const SkillsNumber = styled.span``;

interface Data {
  title: string;
  SkillsSubtitle: string;
  icon: string;
  open: boolean;

  skillData: SkillData[];
}
interface SkillData {
  skillTitle: string;
  skillStrength: string;
}

const data: Data[] = [
  {
    title: "Frontend Developer",
    SkillsSubtitle: "More than four Years",
    icon: "uil uil-brackets-curly",
    open: true,

    skillData: [
      {
        skillTitle: "HTML",
        skillStrength: "90%",
      },
      {
        skillTitle: "CSS",
        skillStrength: "70%",
      },
      {
        skillTitle: "Javascript",
        skillStrength: "60%",
      },
      {
        skillTitle: "React",
        skillStrength: "85%",
      },
    ],
  },
  {
    title: "Backend Developer",
    SkillsSubtitle: "More than two Years",
    icon: "uil uil-server-network",
    open: false,

    skillData: [
      {
        skillTitle: "Python",
        skillStrength: "70%",
      },
      {
        skillTitle: "Node js",
        skillStrength: "80%",
      },
      {
        skillTitle: "Firebase",
        skillStrength: "65%",
      },
    ],
  },
  {
    title: "Designer",
    SkillsSubtitle: "More than one year",
    icon: "uil uil-swatchbook",
    open: false,

    skillData: [
      {
        skillTitle: "Figma",
        skillStrength: "75%",
      },
      {
        skillTitle: "Sketch",
        skillStrength: "80%",
      },
      {
        skillTitle: "PhotoShop",
        skillStrength: "60%",
      },
    ],
  },
];

const Skills = () => {
  const [usedData, setUsedData] = React.useState(data);
  const handleOpen = (item: Data) => {
    item.open = !item.open;
    for (let index = 0; index < usedData.length; index++) {
      if (usedData[index] !== item) {
        usedData[index].open = false;
      }
    }
    setUsedData(() => [...usedData]);
  };
  return (
    <Container id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubTitle>My Technical Level</SectionSubTitle>
      <SkillsContainer>
        <div>
          {usedData &&
            usedData.map((item, index) => (
              <SkillsContent key={index}>
                <SkillsHeader onClick={() => handleOpen(item)}>
                  <SkillsIcon className={item.icon}></SkillsIcon>
                  <div>
                    <SkillsTitle>{item.title}</SkillsTitle>
                    <SkillsSubtitle>{item.SkillsSubtitle}</SkillsSubtitle>
                  </div>
                  <SkillsArrow className="uil uil-angle-down" open={item.open}>
                    {" "}
                  </SkillsArrow>
                </SkillsHeader>
                <Wrapper open={item.open}>
                  <SkillsList open={item.open}>
                    {item.skillData.map((item, index) => (
                      <SkillsData key={index}>
                        <SkillsTitles>
                          <SkillsName>{item.skillTitle}</SkillsName>
                          <SkillsNumber>{item.skillStrength}</SkillsNumber>
                        </SkillsTitles>
                        <SkillBar>
                          <SkillPercentage
                            width={item.skillStrength}
                          ></SkillPercentage>
                        </SkillBar>
                      </SkillsData>
                    ))}
                  </SkillsList>
                </Wrapper>
              </SkillsContent>
            ))}
        </div>
        <SkillsData></SkillsData>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
