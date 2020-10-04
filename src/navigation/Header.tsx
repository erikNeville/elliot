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
`;

export const Header = () => {
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
  });

  const autoHideMobileNav = () => {
    const screenWidth = window.innerWidth;
    if (menuState && screenWidth > 768) {
      setMenuState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", autoHideMobileNav);
  });

  console.log("Menu State: ", menuState ? "Menu Is Open" : "Menu Is Closed");

  return (
    <RootContainer>
      <DesktopNav displayMenu={menuState} toggleMobileNav={toggleMobileNav} />
      <MobileNav displayMenu={menuState} toggleMobileNav={toggleMobileNav} />
    </RootContainer>
  );
};
