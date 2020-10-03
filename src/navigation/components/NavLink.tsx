import React, { useMemo } from "react";
import { Link } from "react-router-dom";

type NavLinkProps = Readonly<{
  closeNav: () => void;
  tabIndex?: number;
  navRoute: string;
}>;

export const NavLink = ({ closeNav, tabIndex, navRoute }: NavLinkProps) => {
  const formatToString = useMemo(() => {
    const route = navRoute.toLowerCase().split(" ");
    return "/" + route[0];
  }, [navRoute]);

  return (
    <Link
      to={formatToString}
      className="link"
      onClick={closeNav}
      tabIndex={tabIndex}
    >
      {navRoute}
    </Link>
  );
};
