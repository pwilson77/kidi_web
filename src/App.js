import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

//import './App.css';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Restaurant from './pages/restaurant';
import Food from './pages/food';
import Header from  './components/header';
import Footer from './components/footer';

var window = require('global/window')
var document = require('global/document')

function App() {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    window.addEventListener('resize', setWindowWidth(document.body.clientWidth));
    return(
      window.removeEventListener('resize', setWindowWidth(document.body.clientWidth))
    )
  }, []);

  return (
    <HashRouter>
      <div>
        <Header windowWidth={windowWidth} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
          <Route exact path='/food'>
            <Food />
          </Route>
          <Route exact path='/restaurant'>
            <Restaurant />
          </Route>
        </Switch>
        <Footer windowWidth={windowWidth} />
      </div>
    </HashRouter>
  );
}

export default App;
