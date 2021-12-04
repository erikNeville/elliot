import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";

import { ScreenContainer } from "../components/containers";
import { CategoryImageDisplay } from "../components/image";

interface ICollection {
  category: string;
}

const CollectionTitle = styled("div")`
  text-align: center;
`;

export const Collections = ({ location }: RouteComponentProps) => {
  const collectionState = location.state as ICollection;
  const category = collectionState && collectionState.category;
  const formatTitle = useCallback((str: string) => {
    return str
      .replace("-", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, []);

  return (
    <ScreenContainer>
      <CategoryImageDisplay category={category} />
    </ScreenContainer>
  );
};
