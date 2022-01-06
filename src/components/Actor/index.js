import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageURL }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Image src={imageURL} alt="actor-thumb" />
        <h3>{name}</h3>
        <p>{character}</p>
      </Wrapper>
    </React.Fragment>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Actor;
