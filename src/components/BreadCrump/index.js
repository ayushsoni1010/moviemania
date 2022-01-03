import React from "react"
import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content } from "./BreadCrump.styles";

const BreadCrump = ({ movieTitle }) => {
    return (
        <React.Fragment>
            <Wrapper>
                <Content>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                    <span>|</span>
                    <span>{movieTitle}</span>
                </Content>
            </Wrapper>
        </React.Fragment>
    )
}

export default BreadCrump;