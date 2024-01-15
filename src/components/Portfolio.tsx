import React from "react";
import styled from "styled-components";
import image1 from "../img/portfolio1.jpg";
import image2 from "../img/portfolio2.jpg";
import image3 from "../img/portfolio3.jpg";
import {
  container,
  grid,
  section,
  sectionSubTitle,
  sectionTitle,
} from "../genStyles";
import { buttonFlex } from "../genStyles";
import { button } from "../genStyles";
import { buttonSmall } from "../genStyles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
const Container = styled.section`
  ${section}
`;
const SectionTitle = styled.h2`
  ${sectionTitle}
`;
const SectionSubTitle = styled.span`
  ${sectionSubTitle}
`;
const PortfolioContainer = styled.div`
  ${container}
`;
const PortfolioContent = styled(SwiperSlide)`
  ${grid}
  padding:0 1.5rem;
`;
const PortFolioImage = styled.img`
  width: 265px;
  border-radius: 0.5rem;
`;
const PortfolioData = styled.div``;
const PortFolioTitle = styled.h3`
  font-size: ${(props) => props.theme.h3FontSize};
  margin-bottom: ${(props) => props.theme.mb0To5};
`;
const PortfolioDescription = styled.p`
  margin-bottom: ${(props) => props.theme.mb0To75};
`;
const PortfolioButton = styled.a`
  ${buttonFlex}
  ${button}
  ${buttonSmall}
`;
const ImageContainer = styled.div``;
const ButtonArrow = styled.i``;
const PaginationArrow = styled.i`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.firstColor};
`;

interface Content {
  title: string;
  description: string;
  image: string;
}
const Portfolio: React.FC = (): JSX.Element => {
  const data: Content[] = [
    {
      title: "Modern Website",
      description:
        "Websites adaptable to all devices and animated interactions",
      image: image1,
    },
    {
      title: "Brand Design",
      description:
        "Websites adaptable to all devices and animated interactions",
      image: image2,
    },
    {
      title: "Online store",
      description:
        "Websites adaptable to all devices and animated interactions",
      image: image3,
    },
  ];
  return (
    <Container>
      <SectionTitle id="portfolio">Portfolio</SectionTitle>
      <SectionSubTitle>Most Recent Work</SectionSubTitle>
      <PortfolioContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          loop
        >
          {data.map((item) => (
            <>
              <SwiperSlide className="grid">
                <PortfolioData>
                  <PortFolioImage src={item.image} alt="portfolio Image One" />

                  <PortFolioTitle>{item.title}e</PortFolioTitle>
                  <PortfolioDescription>
                    {item.description}
                  </PortfolioDescription>
                  <PortfolioButton about="#">
                    Demo
                    <ButtonArrow className="uil uil-arrow-right"></ButtonArrow>
                  </PortfolioButton>
                </PortfolioData>
                <div className="swiper-button-next">
                  <PaginationArrow className="uil uil-angle-right-b "></PaginationArrow>
                </div>
                <div className="swiper-button-prev">
                  <PaginationArrow className="uil uil-angle-left-b "></PaginationArrow>
                </div>
                <div className="swiper-pagination"></div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </PortfolioContainer>
    </Container>
  );
};

export default Portfolio;
