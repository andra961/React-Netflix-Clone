import React,{useState, useEffect} from 'react';
import { Counter } from './features/counter/Counter';

import "./App.css"

import requests from "./API_CALL"
import Header from "./Header"
import Banner from "./Banner"
import Row from "./Row"

function App() {

  const [isScrolled, setScrolled] = useState(false)

  window.onscroll = (e) => {
    if(window.scrollY > 200) setScrolled(true)

    if(window.scrollY <= 200) setScrolled(false)
  }


  return (
    <div className="App">
      <Header isScrolled={isScrolled}></Header>
      <Banner fetchUrl={requests.netflixMovies}></Banner>
      <div className="rows">
          <Row fetchUrl={requests.trendingMovies} category="Di moda"></Row>
          <Row fetchUrl={requests.actionMovies} category="Action"></Row>
          <Row fetchUrl={requests.animationMovies} category="Animazione"></Row>
          <Row fetchUrl={requests.comedyMovies} category="Commedia"></Row>
          <Row fetchUrl={requests.thrillerMovies} category="Thriller"></Row>
          <Row fetchUrl={requests.horrorMovies} category="Horror"></Row>
      </div>
    </div>
  );
}

export default App;
