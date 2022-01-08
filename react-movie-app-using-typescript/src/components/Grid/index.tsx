import React from "react";
// Styles
import { Wrapper, Content } from "./Grid.styles";

// Types
type Props = {
  header: string;
}

const Grid: React.FC<Props> = ({ header, children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default Grid;
