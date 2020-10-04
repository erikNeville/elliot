import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { MAX_WIDTH_BREAKPOINT } from "src/common/ui/shared";
import styled from "styled-components";

import { HeaderProps } from "./Header";

const RootContainer = styled("nav")`
  align-items: center;
  display: flex;
  width: 40vw;
  justify-content: center;
  flex-flow: row nowrap;
  @media screen and (max-width: ${`${MAX_WIDTH_BREAKPOINT}px`}) {
    width: 100%;
  }

  .logo-link {
    font-weight: bold;
    color: black;
    font-size: 28px;
    text-decoration: none;
    transition: all 0.4s ease-out;
    @media screen and (max-width: ${`${MAX_WIDTH_BREAKPOINT}px`}) {
      padding-bottom: 18px;
      font-size: 24px;
    }
    &:hover {
      letter-spacing: 2px;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const LogoButton = ({ displayMenu, toggleMobileNav }: HeaderProps) => {
  const closeNav = useCallback(() => {
    if (displayMenu) {
      toggleMobileNav();
    }
  }, [displayMenu, toggleMobileNav]);

  return (
    <RootContainer>
      <Link to="/" className="logo-link" onClick={closeNav}>
        Lady Elliot Art
      </Link>
    </RootContainer>
  );
};
