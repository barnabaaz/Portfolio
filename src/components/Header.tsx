import React from "react";
import { container, grid } from "../genStyles";
import styled, { css } from "styled-components";
import { navbar as navbarData } from "../data/navbar";
interface Show {
  show: boolean;
}
const Container = styled.div`
  position: fixed;
  width: 100%;
  background: #ffffff;
  bottom: 0;
  left: 0;
  /* z-index: ${(props) => props.theme.zFixed}; */
  z-index: 1;
`;
const Nav = styled.div`
  ${container}
  max-width:928px;
  height: ${(props) => props.theme.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavList = styled.ul`
  ${grid}
  grid-template-columns:repeat(3,1fr);
  gap: 2rem;
`;
const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props) => props.theme.smallFontSize};
  color: ${(props) => props.theme.colors.titleColor};
  font-weight: ${(props) => props.theme.fontMedium};
  &:hover {
    color: ${(props) => props.theme.colors.firstColor};
  }
`;
const NavIcon = styled.i`
  font-size: 1.2rem;
`;
const NavLogo = styled.a`
  color: ${(props) => props.theme.colors.titleColor};
`;
const NavItem = styled.li``;
const NavMenu = styled.div<Show>`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: ${(props) => (props.show ? "0" : "-100%")};
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.bodyColor};
    padding: 2rem 1.5rem 4rem;
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    transition: 0.5s ease;
  }
`;
const NavClose = styled.i`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.firstColor};
  &:hover {
    color: ${(props) => props.theme.colors.firstColorAlt};
  }
`;
const NavButtons = styled.div``;
const NavToggle = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.firstColor};
  }
`;

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleShow = () => {
    setOpenMenu(!openMenu);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <Container>
      <Nav>
        <NavLogo href="#home"> Barnabas</NavLogo>
        <NavMenu show={openMenu}>
          <NavList>
            {navbarData.map((item, index) => (
              <NavItem onClick={handleClose} key={index}>
                <NavLink href={item.path}>
                  <NavIcon className={item.icon}></NavIcon> {item.title}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          <NavClose className="uil uil-times" onClick={handleClose}></NavClose>
        </NavMenu>
        <NavButtons>
          <NavToggle onClick={handleShow}>
            <NavIcon className="uil uil-apps"></NavIcon>
          </NavToggle>
        </NavButtons>
      </Nav>
    </Container>
  );
};

export default Header;
