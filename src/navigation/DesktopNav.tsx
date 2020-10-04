import React from "react";
import { MAX_WIDTH_BREAKPOINT } from "src/common/ui/shared";
import styled from "styled-components";

import { HeaderProps } from "./Header";
import { LogoButton } from "./LogoButton";
import { NavLinks } from "./NavLinks";
import { NavMenuButton } from "./components/NavMenuButton";

const RootContainer = styled("nav")`
  background: ${(props) => props.theme.primary};
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-flow: row nowrap;
  height: 28px;

  @media screen and (max-width: ${`${MAX_WIDTH_BREAKPOINT}px`}) {
    height: 64px;
    flex-flow: column nowrap;
    justify-content: center;
  }

  .nav-links {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: center;
    list-style: none;
    width: 60vw;
    animation: fadeIn ease 1s;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
    @media screen and (max-width: ${`${MAX_WIDTH_BREAKPOINT}px`}) {
      display: none;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  .link {
    border-radius: 4px;
    align-self: flex-end;
    text-decoration: none;
    color: black;
    font-size: 13px;
    font-weight: 500;
    padding: 0 12px;
    transition: all 0.4s ease-out;
    &:hover {
      letter-spacing: 1px;
    }
    &:focus {
      background: rgba(0, 0, 0, 0.04);
      outline: none;
    }
  }
`;

export const DesktopNav = ({ displayMenu, toggleMobileNav }: HeaderProps) => {
  return (
    <RootContainer>
      <LogoButton displayMenu={displayMenu} toggleMobileNav={toggleMobileNav} />
      <NavLinks displayMenu={displayMenu} toggleMobileNav={toggleMobileNav} />
      <NavMenuButton
        navButtonDisplay={"menu"}
        displayMenu={displayMenu}
        onClick={toggleMobileNav}
      />
    </RootContainer>
  );
};
