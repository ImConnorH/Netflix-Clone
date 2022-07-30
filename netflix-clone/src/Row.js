import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

// when the row component loads, it will fetch the data from the url
function Row({ title, fetchUrl }) {
    // create empty movies array
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // request the data from the url and wait for it to respond, then save it to request
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); // empty array means that this function will only run once when row loads
    // if there is any variables used inside useEffect, it must be passed in as an array

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_thumbnails">
                {movies.map((movie) => (
                    <img
                        // key is used to identify each element in the array
                        // makes loading the row faster, more optimized
                        key={movie.id}
                        className="row_thumbnail"
                        src={baseURL + movie.poster_path}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
