import React from "react";
import { MAX_WIDTH_BREAKPOINT } from "src/common/ui/shared";
import styled from "styled-components";

type NavButtonProps = Readonly<{
  displayMenu: boolean;
  onClick: () => void;
}>;

const NavButton = styled("button")<NavButtonProps>`
  background: transparent;
  font-size: 22px;
  border: none;
  display: none;
  @media screen and (max-width: ${`${MAX_WIDTH_BREAKPOINT}px`}) {
    width: 100%;
  }

  .menu {
    cursor: pointer;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.4s ease-out;
    &:hover {
      letter-spacing: 2px;
    }
  }
  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${`${MAX_WIDTH_BREAKPOINT}px`}) {
    animation: fadeIn ease 1s;
    display: block;
    -webkit-animation: fadeIn ease 1s;
    -moz-animation: fadeIn ease 1s;
    -o-animation: fadeIn ease 1s;
    -ms-animation: fadeIn ease 1s;
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
`;

// type NavMenuButtonProps = Readonly<{
//   navButtonDisplay: string;
//   displayMenu: boolean;
// }>;

export const NavMenuButton = ({
  navButtonDisplay,
  displayMenu,
  onClick,
}: any) => {
  return (
    <NavButton displayMenu={displayMenu} onClick={onClick}>
      <p className="menu">{navButtonDisplay}</p>
    </NavButton>
  );
};
