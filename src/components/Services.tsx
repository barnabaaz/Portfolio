import React from "react";
import styled from "styled-components";
import Modal from "./ServiceModal";
import {
  container,
  section,
  sectionSubTitle,
  sectionTitle,
  grid,
  button,
  buttonFlex,
  buttonSmall,
  buttonLink,
  buttonIcon,
} from "../genStyles";

const Container = styled.section`
  ${section}
`;
const SectionTitle = styled.h2`
  ${sectionTitle}
`;
const SectionSubTitle = styled.span`
  ${sectionSubTitle}
`;
const ServicesContainer = styled.div`
  ${container}
  ${grid}
  gap:1.5rem;
  grid-template-columns: repeat(2, 1fr);
`;

const ServicesContent = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.containerColor};
  padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ServicesIcon = styled.i`
  display: block;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.firstColor};
  margin-bottom: ${(props) => props.theme.mb1};
`;
const ServicesTitle = styled.h3`
  font-size: ${(props) => props.theme.h3FontSize};
  font-weight: ${(props) => props.theme.fontMedium};
  margin-bottom: ${(props) => props.theme.mb1};
`;
const ButtonIcon = styled.i``;

const ServicesButton = styled.span`
  ${button}
  ${buttonLink}
  ${buttonSmall}
  ${buttonFlex}
  cursor:pointer;
  font-size: ${(props) => props.theme.normalFontSize};
  &:hover {
    ${ButtonIcon} {
      transform: translateX(0.25rem);
      transition: transform 0.2s;
    }
  }
`;

export interface Content {
  icon: string;
  service: string;
}

export interface Services {
  serviceHeader: string;
  serviceTitle: string;
  icon: string;
  content: Content[];
}

const Services: React.FC = (): JSX.Element => {
  const data: Services[] = [
    {
      serviceHeader: "UI/UX",
      serviceTitle: "Designer",
      icon: "uil uil-web-grid",
      content: [
        { icon: "uil uil-check-circle", service: "I develop User Interface" },
        { icon: "uil uil-check-circle", service: "Web Page Development" },
        {
          icon: "uil uil-check-circle",
          service: "I Create UX Element Interactions",
        },
        {
          icon: "uil uil-check-circle",
          service: "I Position your Company Brand",
        },
      ],
    },
    {
      serviceHeader: "Frontend",
      serviceTitle: " Engineer",
      icon: "uil uil-arrow",
      content: [
        { icon: "uil uil-check-circle", service: "I develop User Interface" },
        { icon: "uil uil-check-circle", service: "Web Page Development" },
        {
          icon: "uil uil-check-circle",
          service: "I Create UX Element Interactions",
        },
        {
          icon: "uil uil-check-circle",
          service: "I Position your Company Brand",
        },
      ],
    },
    {
      serviceHeader: "Branding",
      serviceTitle: "Designer",
      icon: "uil uil-pen",
      content: [
        { icon: "uil uil-check-circle", service: "I develop User Interface" },
        { icon: "uil uil-check-circle", service: "Web Page Development" },
        {
          icon: "uil uil-check-circle",
          service: "I Create UX Element Interactions",
        },
        {
          icon: "uil uil-check-circle",
          service: "I Position your company Brand  ",
        },
      ],
    },
  ];
  const [service, setService] = React.useState<null | Services>();
  const [open, setOpen] = React.useState(false);
  const handleClick = (service: Services) => {
    setOpen(true);
    setService(service);
  };
  return (
    <Container id="services">
      <SectionTitle>Services</SectionTitle>
      <SectionSubTitle>What i offer</SectionSubTitle>
      <ServicesContainer>
        {data.map((item, index) => (
          <ServicesContent key={index}>
            <div>
              <ServicesIcon className={item.icon} />
              <ServicesTitle>
                {item.serviceHeader} <br /> {item.serviceTitle}
              </ServicesTitle>
            </div>
            <ServicesButton onClick={() => handleClick(item)}>
              View More
              <ButtonIcon className="uil uil-arrow-right"></ButtonIcon>
            </ServicesButton>
          </ServicesContent>
        ))}
        {service && typeof service === "object" && (
          <Modal
            content={service.content}
            open={open}
            serviceHeader={service.serviceHeader}
            serviceTitle={service.serviceTitle}
            setClose={setOpen}
          />
        )}
      </ServicesContainer>
    </Container>
  );
};

export default Services;
