import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
      </Wrapper>
    </React.Fragment>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any,
};

export default Grid;
