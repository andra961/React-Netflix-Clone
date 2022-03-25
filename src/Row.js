import React, { useState, useEffect, useRef } from "react";

import requests from "./API_CALL";

import "./Row.css";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function Row({ fetchUrl, category }) {
  const [isHovered, setHover] = useState(false);

  const [movies, setMovies] = useState([]);

  const [isAllScrolled, setAllScrolled] = useState(false);

  const [notScrolled, setNotScrolled] = useState(true);

  const onMouseEnter = () => setHover(true);
  const onMouseOut = () => setHover(false);

  const movieRow = useRef(null);

  //used to check after pressing the scroll button if the row is totally scrolled
  const checkAllScrolled = (e) => {
    let totalLenght = e.scrollWidth;

    let scrolled = e.offsetWidth + e.scrollLeft + e.offsetWidth;

    //check if the row is scrolled to the extreme right, to hide the right scroll button in case
    //before checking adds the row width, being the animation "smooth" it doesn't istantly update the scrollLeft field
    if (totalLenght - scrolled < 0) return true;

    return false;
  };

  //scrolls the movie row to the left by its on screen width
  const scrollMoviesLeft = () => {
    let e = movieRow.current;

    e.scrollBy({
      top: 0,
      left: -e.offsetWidth,
      behavior: "smooth",
    });

    setAllScrolled(false);
    //check if the row is at the extreme left, to hide the left scroll button in case
    //before checking subtracts the row width, being the animation "smooth" it doesn't istantly update the scrollLeft field
    if (e.scrollLeft - e.offsetWidth < 0) setNotScrolled(true);
  };

  //scrolls the movie row to the right by its on screen width
  const scrollMoviesRight = () => {
    let e = movieRow.current;

    e.scrollBy({
      top: 0,
      left: e.offsetWidth,
      behavior: "smooth",
    });

    setNotScrolled(false);

    if (checkAllScrolled(movieRow.current)) setAllScrolled(true);
  };

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 20));
      });
  }, []);

  return (
    <div className="row">
      <p className="rowTitle">{category}</p>
      <div
        className="externalContainer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseOut}
      >
        <div ref={movieRow} className="rowContainer">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                id={movie.id}
                className="moviePoster"
                src={requests.imageBase + movie.poster_path}
                alt=""
              ></img>
            );
          })}
        </div>

        {isHovered && !notScrolled && (
          <div className="leftArrow arrowBar" onClick={scrollMoviesLeft}>
            <NavigateBeforeIcon className="arrowIcon"></NavigateBeforeIcon>
          </div>
        )}

        {isHovered && !isAllScrolled && (
          <div className="rightArrow arrowBar" onClick={scrollMoviesRight}>
            <NavigateNextIcon className="arrowIcon"></NavigateNextIcon>
          </div>
        )}
      </div>
    </div>
  );
}

export default Row;
