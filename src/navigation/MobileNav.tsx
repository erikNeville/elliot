import React from "react";
import Collapse from "react-bootstrap/Collapse";
import styled from "styled-components";

import { HeaderProps } from "./Header";
import { NavLinks } from "./NavLinks";

const MAX_HEIGHT = 190;

type MobileNavProps = {
  displayMenu: boolean;
};

const RootContainer = styled("nav")<MobileNavProps>`
  background: ${(props) => props.theme.nav};
  align-self: center;
  display: block;
  flex-flow: column nowrap;
  justify-content: center;
  max-height: ${`${MAX_HEIGHT}px`};
  width: 100%;

  .nav-links {
    max-height: ${(props) => (props.displayMenu ? `${MAX_HEIGHT}px` : "0")};
    overflow: hidden;
    text-align: center;
    transition: ${(props) =>
      props.displayMenu
        ? "max-height 0.4s ease-in"
        : "max-height 0.4s ease-out"};
  }

  .link {
    color: black;
    padding: 8px 0px;
    display: flex;
    flex-flow: column nowrap;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    transition: all 0.4s ease-out;
    &:hover {
      letter-spacing: 1px;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const MobileNav = ({ displayMenu, toggleMobileNav }: HeaderProps) => {
  return (
    <Collapse in={displayMenu}>
      <RootContainer displayMenu={displayMenu}>
        <NavLinks
          isMobileLink={true}
          displayMenu={displayMenu}
          toggleMobileNav={toggleMobileNav}
        />
      </RootContainer>
    </Collapse>
  );
};
