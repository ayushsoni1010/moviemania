import React , {useState , useEffect} from "react";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components

// Hook

// Image: if API fails to render image then the fallback image used this one
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setEror] = useState(false);
    return (
        <div>
            Home Page
        </div>
    )
}
export default Home;