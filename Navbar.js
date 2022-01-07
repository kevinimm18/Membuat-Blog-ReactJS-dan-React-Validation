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

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <p className="title is-1 is-light" style={{fontFamily:"BleepBloop Free Version"}}>ILMUPEDIA</p>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item has-background-info-dark">
                            <Link to="/" style={{color: "white", fontFamily:"BleepBloop Free Version"}}>HOME</Link>
                        </a>

                        <a className="navbar-item has-background-info-dark">
                            <Link to="/artikel" style={{color: "white", fontFamily:"BleepBloop Free Version"}}>Artikel</Link>
                        </a>

                        <a className="navbar-item has-background-info-dark">
                            <Link to="/listartikel" style={{color: "white", fontFamily:"BleepBloop Free Version"}}>List Artikel</Link>
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable has-background-info-dark">
                            <a className="navbar-link" style={{fontFamily:"BleepBloop Free Version"}}>
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    <Link to="/about" style={{color: "black", fontFamily:"BleepBloop Free Version"}}>About</Link>
                                </a>
                                <a className="navbar-item">
                                    <Link to="/contact" style={{color: "black", fontFamily:"BleepBloop Free Version"}}>Contact</Link>
                                </a>
                                <hr className="navbar-divider" />
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        )
    }
}

export default Navbar;