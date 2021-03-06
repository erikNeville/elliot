import React, { useCallback, useEffect } from "react";
import { useMenuState } from "src/context/UiContext";
import styled from "styled-components";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export type HeaderProps = {
  displayMenu: boolean;
  toggleMobileNav: () => void;
  isMobileLink?: boolean;
};

const RootContainer = styled("div")`
  overflow: hidden;
  box-shadow: 0 10px 10px -5px;
  text-align: center;
  width: 100%;
  position: fixed;
  z-index: 1030;
`;

export const Header = () => {
  // The difference between the closed and open headers is 170
  const { menuState, setMenuState } = useMenuState();

  const toggleMobileNav = useCallback(() => {
    if (!menuState) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  }, [menuState, setMenuState]);

  const handleScroll = useCallback(() => {
    menuState && toggleMobileNav();
  }, [menuState, toggleMobileNav]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const autoHideMobileNav = () => {
    const screenWidth = window.innerWidth;
    if (menuState && screenWidth > 768) {
      setMenuState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", autoHideMobileNav);
  });

  return (
      <RootContainer>
        <DesktopNav displayMenu={menuState} toggleMobileNav={toggleMobileNav} />
        <MobileNav displayMenu={menuState} toggleMobileNav={toggleMobileNav} />
      </RootContainer>
  );
};
