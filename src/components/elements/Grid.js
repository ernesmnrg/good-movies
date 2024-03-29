import React from "react";
import {
  StyledGrid,
  StyledGridContent
} from "../../components/assets/styles/StyledGrid";

const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

export default Grid;
