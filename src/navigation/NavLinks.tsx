import React from "react";
import { HeaderProps } from "./Header";
import { NavLink } from "./components/NavLink";
import { routeNames } from "../App";

export const NavLinks = ({
  isMobileLink,
  displayMenu,
  toggleMobileNav,
}: HeaderProps) => {
  const closeNav = () => {
    if (displayMenu) {
      toggleMobileNav();
    }
  };

  let tabIndex: number | undefined;
  if (isMobileLink) {
    tabIndex = -1;
  }

  return (
    <ul className="nav-links">
      {routeNames &&
        routeNames.map((routes: string) => {
          return (
            <li>
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
