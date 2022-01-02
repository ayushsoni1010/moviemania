import React from "react";
// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ children, callback }) => {
  return (
    <React.Fragment>
      <Wrapper type="button" onClick={callback}>
        {children}
      </Wrapper>
    </React.Fragment>
  );
};

export default Button;
