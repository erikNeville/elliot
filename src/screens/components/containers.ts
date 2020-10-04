import { MAX_WIDTH_BREAKPOINT, SCREEN_GUTTER } from "src/common/ui/shared";
import styled from "styled-components";

export const ScreenContainer = styled("div")`
  padding: 120px ${SCREEN_GUTTER} 20px ${SCREEN_GUTTER};
  @media screen and (max-width: ${MAX_WIDTH_BREAKPOINT}) {
    padding: 162px ${SCREEN_GUTTER} 20px ${SCREEN_GUTTER};
  }
`;
