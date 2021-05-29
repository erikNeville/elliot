/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback} from "react";
import {
  MAX_WIDTH_BREAKPOINT,
  OPENED_CLOSED_MENU_DIFFERENCE,
  SCREEN_GUTTER,
  WIDE_SCREEN_GUTTER,
} from "src/common/ui/shared";
import { useMenuState } from "src/context/UiContext";
import styled from "styled-components";

const MOBILE_TOP_PADDING_MENU_CLOSED = 130;
const MOBILE_TOP_PADDING_MENU_OPENED =
  MOBILE_TOP_PADDING_MENU_CLOSED + OPENED_CLOSED_MENU_DIFFERENCE;

type RootContainerProps = {
  topPadding: number;
  menuState: boolean;
};

export const RootContainer = styled("div")<RootContainerProps>`
  padding-top: 100px;
  padding-right: ${WIDE_SCREEN_GUTTER};
  padding-bottom: 20px;
  padding-left: ${WIDE_SCREEN_GUTTER};

  @media screen and (max-width: ${`${MAX_WIDTH_BREAKPOINT}px`}) {
    transition: ${(props) =>
      props.menuState
        ? "padding-top 0.4s ease-in"
        : "padding-top 0.4s ease-out"};
    padding-top: ${(props) => `${props.topPadding}px`};
    padding-left: ${SCREEN_GUTTER};
    padding-right: ${SCREEN_GUTTER};
  }
`;

type ScreenContainerProps = Readonly<{
  children: React.ReactNode;
}>;

export const ScreenContainer = ({ children }: ScreenContainerProps) => {
  const { menuState, setMenuState } = useMenuState();
  const toggleMobileNav = useCallback(() => {
    if (menuState) {
      setMenuState(false)
    }
  }, [menuState, setMenuState]);
  const topPadding = menuState
    ? MOBILE_TOP_PADDING_MENU_OPENED
    : MOBILE_TOP_PADDING_MENU_CLOSED;

  return (
    <div onClick={toggleMobileNav} style={{height: '100vh'}}>
      <RootContainer topPadding={topPadding} menuState={menuState}>
        {children}
      </RootContainer>
    </div>
  );
};

export const BodyContainer = styled("div")`
  padding-top: 8px;
  @media screen and (max-width: 768px) {
    padding-top: 9px;
  }
`;
