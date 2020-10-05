import React from "react";
import { styled } from "linaria/react";
// import styled from "astroturf";
// import styled from "styled-components";

type Color = "red" | "blue" | "green";

const StyledContainer = styled.div<{ color: Color }>`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export interface TestComponentProps {
  color: Color;
}

export const TestComponent: React.FC<TestComponentProps> = ({ color }) => {
  return <StyledContainer color={color}>Test component text</StyledContainer>;
};
