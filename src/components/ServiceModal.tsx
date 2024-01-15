import React from "react";
import styled from "styled-components";
import { grid } from "../genStyles";
import { Services, Content } from "./Services";

export interface Open {
  close: boolean;
}
const ServicesModal = styled.div<Open>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: ${(props) => props.theme.zModel};
  opacity: ${(props) => (props.close ? "1" : "0")};
  visibility: ${(props) => (props.close ? "visible" : "hidden")};
  transition: 0.3s ease;
`;
const ServicesModalContent = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.containerColor};
  padding: 1.5rem;
  border-radius: 0.5rem;
`;
const ServicesModalTitle = styled.h4`
  font-size: ${(props) => props.theme.h3FontSize};
  font-weight: ${(props) => props.theme.fontMedium};
  margin-bottom: ${(props) => props.theme.mb1To5};
`;
const ServicesModalClose = styled.i<Open>`
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${(props) => props.theme.colors.firstColor};
  cursor: pointer;
`;
const ModalServices = styled.ul`
  ${grid}
  row-gap:1rem;
`;
const ModalService = styled.li`
  display: flex;
`;
const ServiceModalIcon = styled.i`
  color: ${(props) => props.theme.colors.firstColor};
  margin-right: ${(props) => props.theme.mb0To25};
`;
type AppProps = {
  serviceHeader: string;
  serviceTitle: string;
  content: Content[];
  open: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<AppProps> = ({
  serviceHeader,
  serviceTitle,
  content,
  open,
  setClose,
}): React.ReactElement => {
  const handleModalClose = () => {
    setClose(false);
  };
  return (
    <React.Fragment>
      <ServicesModal close={open}>
        <ServicesModalContent>
          <ServicesModalTitle>
            {serviceHeader} <br /> {serviceTitle}
          </ServicesModalTitle>
          <ServicesModalClose
            className="uil uil-times"
            close={open}
            onClick={handleModalClose}
          />
          <ModalServices>
            {content.map((service, index: number) => (
              <ModalService key={index}>
                <ServiceModalIcon className="uil uil-check-circle"></ServiceModalIcon>
                <p>{service.service}</p>
              </ModalService>
            ))}
          </ModalServices>
        </ServicesModalContent>
      </ServicesModal>
    </React.Fragment>
  );
};

export default Modal;
