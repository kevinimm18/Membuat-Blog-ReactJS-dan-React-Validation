// import logo from './logo.svg';
import './App.css';
import './mystyles.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Home from './Home';
import Artikel from './Artikel';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Listartikel from './Listartikel';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/artikel" element={<Artikel/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/listartikel" element={<Listartikel/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App