import { React, useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    // useEffect will run based on a specific condition, aka only when the banner loads
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    // we use this to randomly generate a movie from the array of movies
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // this simply
    function truncate(str, length) {
        return str?.length > length ? str.substr(0, length - 1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                // the reason we use we use ? is to handle errors in case object cannot be found
                backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
                )`,
                // this ensures the image displays correctly
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_content">
                {/* some of the results from the API do not contain all required information, so we use || in case of errors*/}
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <div className="banner_description">
                    {truncate(movie?.overview, 200)}
                </div>

                {/* this is just a small div we have at the bottom of the header to create a transition effect */}
                <div className="banner--fadeBottom"></div>
            </div>
        </header>
    );
}

export default Banner;
