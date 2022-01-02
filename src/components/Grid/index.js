import React from "react";
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
    )
}

export default Grid;