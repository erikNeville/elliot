import React, { useCallback } from "react";

import { routeNames } from "../App";
import { HeaderProps } from "./Header";
import { NavLink } from "./components/NavLink";

export const NavLinks = ({
  isMobileLink,
  displayMenu,
  toggleMobileNav,
}: HeaderProps) => {
  const closeNav = useCallback(() => {
    if (displayMenu) {
      toggleMobileNav();
    }
  }, [displayMenu, toggleMobileNav]);

  let tabIndex: number | undefined;
  if (isMobileLink) {
    tabIndex = -1;
  }

  return (
    <ul className="nav-links">
      {routeNames &&
        routeNames.map((routes: string) => {
          return (
            <li key={routes}>
              <NavLink
                closeNav={closeNav}
                tabIndex={tabIndex}
                navRoute={routes}
              />
            </li>
          );
        })}
    </ul>
  );
};
