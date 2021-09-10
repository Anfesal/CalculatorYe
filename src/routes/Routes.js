import React from "react";
import Menus from "../menu/Menu";
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../img/udea1.jpg"
import Img2 from "../img/udea2.jpg"
import Img3 from "../img/udea3.jpg"
import Sum from "../operations/Sum"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        
        <Menus/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sum">
            <Sum />
          </Route>
          <Route path="/sub">
            <Sub />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Bloques UdeA</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Img2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Fuente</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Panoramica UdeA</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}


function Sub() {
  return <h2>Sub</h2>;
}