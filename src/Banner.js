import React, { useState, useEffect } from "react";

import { getImageSrc } from "./API_CALL";

import "./Banner.css";

import AddIcon from "@material-ui/icons/AddSharp";
import PlayArrowIcon from "@material-ui/icons/PlayArrowSharp";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      });
  }, []);

  if (!movie) return null;

  return (
    <div className="banner">
      <img id="bannerImage" src={getImageSrc(movie.backdrop_path)} />

      <div className="movieInfo">
        <h1 className="title">{movie.name}</h1>

        <div className="buttons">
          <button className="transparentBlack whiteOnHover">
            <div className="infoButton">
              <PlayArrowIcon className="iconBanner"></PlayArrowIcon>
              <p>Riproduci</p>
            </div>
          </button>

          <button className="transparentBlack whiteOnHover">
            <div className="infoButton">
              <AddIcon className="iconBanner"></AddIcon>
              <p>La mia lista</p>
            </div>
          </button>
        </div>

        <div className="description">
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className="age transparentBlack">
        <div className="whiteLine"></div>
        <p className="ageText">T</p>
      </div>

      <div className="fadeBlack"></div>
    </div>
  );
}

export default Banner;
