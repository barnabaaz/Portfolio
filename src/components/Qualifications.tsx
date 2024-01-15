import React from "react";
import styled from "styled-components";
import {
  buttonFlex,
  container,
  section,
  sectionSubTitle,
  sectionTitle,
} from "../genStyles";

interface SwitchQualification {
  switch: boolean;
}
const Container = styled.section`
  ${section}
`;
const SectionTitle = styled.h2`
  ${sectionTitle}
`;
const SectionSubTitle = styled.span`
  ${sectionSubTitle}
`;
const QualificationContainer = styled.div`
  ${container}
`;
const QualificationTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${(props) => props.theme.mb2To5};
`;
const QualificationButton = styled.div<SwitchQualification>`
  ${buttonFlex}
  font-size:${(props) => props.theme.h3FontSize};
  font-weight: ${(props) => props.theme.fontMedium};
  color: ${(props) => props.switch && props.theme.colors.firstColor};

  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.firstColor};
  }
`;
const QualificationIcon = styled.i`
  font-size: 1.8rem;
  margin-right: ${(props) => props.theme.mb0To25};
`;
const QualificationSections = styled.div``;
const Wrapper = styled.div<SwitchQualification>`
  transition: ${(props) => props.switch && "1"};
`;
const QualificationContent = styled.div<SwitchQualification>`
  display: block;
`;
const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
`;
const QualificationSubtitle = styled.span`
  font-size: ${(props) => props.theme.smallFontSize};
  margin-bottom: ${(props) => props.theme.mb1};
  display: inline-block;
`;
const QualificationCalender = styled.div`
  font-size: ${(props) => props.theme.smallerFontSize};
  color: ${(props) => props.theme.colors.textColorLight};
`;
const QualificationCalenderIcon = styled.i``;
const QualificationTitle = styled.h3`
  font-size: ${(props) => props.theme.normalFontSize};
  font-weight: ${(props) => props.theme.fontMedium};
`;
const QualificationRounder = styled.div`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.theme.colors.firstColor};
  border-radius: 50%;
`;

const QualificationLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.firstColor};
  transform: translate(6px, -7px);
`;
interface Data {
  qualificationTitle: string;
  universityAttended: string;
  qualificationDate: string;
  icon: string;
}

interface Content {
  open: boolean;
  content: Data[];
}

const Qualification: React.FC = () => {
  const data: Content[] = [
    {
      open: true,
      content: [
        {
          qualificationTitle: "Computer Engineering",
          universityAttended: "Peru - University",
          qualificationDate: "2014 - 2018",
          icon: "uil uil-calendar-alt",
        },
        {
          qualificationTitle: "Web Design",
          universityAttended: "Spain - Institute",
          qualificationDate: "2017-2021",
          icon: "uil uil-calendar-alt",
        },
        {
          qualificationTitle: "Web Development",
          universityAttended: "Peru - University",
          qualificationDate: "2016-2022",
          icon: "uil uil-calendar-alt",
        },
        {
          qualificationTitle: "Masters in UI/UX",
          universityAttended: "MIT - University ",
          qualificationDate: "2022- 2023",
          icon: "uil uil-calendar-alt",
        },
      ],
    },
    {
      open: false,
      content: [
        {
          qualificationTitle: "Software Engineering",
          universityAttended: "Microsoft - Institute",
          qualificationDate: "2016 - 2018",
          icon: "uil uil-calendar-alt",
        },
        {
          qualificationTitle: "Frontend Developer",
          universityAttended: "Apple Inc - Spain",
          qualificationDate: "2018-2020",
          icon: "uil uil-calendar-alt",
        },
        {
          qualificationTitle: "UI Designer",
          universityAttended: "Figma - Spain",
          qualificationDate: "2016-2022",
          icon: "uil uil-calendar-alt",
        },
      ],
    },
  ];
  const [usedData, setUsedData] = React.useState(data);
  React.useEffect(() => {
    setUsedData(data);
  }, []);

  const [switchQualification, setSwitchQualification] = React.useState({
    education: true,
    work: false,
  });
  // const handleSwitch = (item: Content) => {
  //   item.open = !item.open;
  //   for (let index = 0; index < usedData.length; index++) {
  //     if (usedData[index] !== item) {
  //       usedData[index].open = false;
  //     }
  //   }
  //   setUsedData([...usedData]);
  // };
  const handleToggleWork = () => {
    setSwitchQualification({
      education: !switchQualification.education,
      work: !switchQualification.work,
    });
    const newData: Content[] = [
      {
        open: !usedData[0].open,
        content: [...usedData[0].content],
      },
      {
        open: !usedData[1].open,
        content: [...usedData[1].content],
      },
    ];
    setUsedData(newData);
  };
  return (
    <Container id="qualification">
      <SectionTitle>Qualification</SectionTitle>
      <SectionSubTitle> My Journey So far</SectionSubTitle>
      <QualificationContainer>
        <QualificationTabs>
          <QualificationButton
            switch={switchQualification.education}
            onClick={handleToggleWork}
          >
            <QualificationIcon className="uil uil-graduation-cap "></QualificationIcon>
            Education
          </QualificationButton>
          <QualificationButton
            switch={switchQualification.work}
            onClick={handleToggleWork}
          >
            <QualificationIcon className="uil uil-briefcase-alt  "></QualificationIcon>
            Work
          </QualificationButton>
        </QualificationTabs>
        <QualificationSections>
          {usedData.map(
            (item, index) =>
              item.open && (
                <QualificationContent
                  key={index}
                  switch={switchQualification.work}
                >
                  {item.content.map((item, index) => (
                    <QualificationData key={index}>
                      {(index + 1) % 2 ? (
                        <>
                          <div>
                            <QualificationTitle>
                              {item.qualificationTitle}
                            </QualificationTitle>
                            <QualificationSubtitle>
                              {item.universityAttended}
                            </QualificationSubtitle>
                            <QualificationCalender>
                              <QualificationCalenderIcon
                                className={item.icon}
                              ></QualificationCalenderIcon>
                              {item.qualificationDate}
                            </QualificationCalender>
                          </div>
                          <div>
                            <QualificationRounder> </QualificationRounder>
                            <QualificationLine></QualificationLine>
                          </div>
                        </>
                      ) : (
                        <>
                          <div></div>
                          <div>
                            <QualificationRounder></QualificationRounder>
                            {index + 1 !== 4 && (
                              <QualificationLine></QualificationLine>
                            )}
                          </div>
                          <div>
                            <QualificationTitle>
                              {item.qualificationTitle}
                            </QualificationTitle>
                            <QualificationSubtitle>
                              {item.universityAttended}
                            </QualificationSubtitle>
                            <QualificationCalender>
                              <QualificationCalenderIcon
                                className={item.icon}
                              ></QualificationCalenderIcon>
                              {item.qualificationDate}
                            </QualificationCalender>
                          </div>
                        </>
                      )}
                    </QualificationData>
                  ))}
                </QualificationContent>
              )
          )}
        </QualificationSections>
      </QualificationContainer>
    </Container>
  );
};

export default Qualification;
