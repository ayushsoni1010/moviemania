import React from "react";
// Styles
import { Wrapper, Image } from "./Actor.styles";

// Types
type Props = {
  name: string;
  character: string;
  imageURL: string;
}

const Actor: React.FC<Props> = ({ name, character, imageURL }) => {
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

export default Actor;
