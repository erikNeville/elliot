import React, { useEffect, useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import styled from "styled-components";

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
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleMobileNav = () => {
    setDisplayMenu(!displayMenu);
  };
  const handleScroll = () => {
    displayMenu && toggleMobileNav();
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const autoHideMobileNav = () => {
    const screenWidth = window.innerWidth;
    if (displayMenu && screenWidth > 768) {
      setDisplayMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", autoHideMobileNav);
  });

  return (
    <RootContainer>
      <DesktopNav displayMenu={displayMenu} toggleMobileNav={toggleMobileNav} />
      <MobileNav displayMenu={displayMenu} toggleMobileNav={toggleMobileNav} />
    </RootContainer>
  );
};
