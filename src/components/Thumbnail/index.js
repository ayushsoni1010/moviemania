import React from "react";
// Styles
import { Image } from "./Thumbnail.styles";

const Thumbnail = ({image, movieId , clickable}) => {
    return (
        <React.Fragment>
            <Image src={image} alt="movie-thumb"/>
        </React.Fragment>
    )
}

export default Thumbnail;