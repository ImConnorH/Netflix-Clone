import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./requests";

function App() {
    console.log(process.env);
    return (
        <div className="App">
            <h1>Hello!</h1>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row title="Popular on Netflix" fetchUrl={requests.fetchTrending} />
        </div>
    );
}

export default App;
