import React from 'react';
import './style.css';

function Navbar(props) {
    return (
        <nav className="navbar fixed-top">
            <ul>
            <li><a href="/" className="homey">Clicky Game</a></li>
            <li>Click an image to begin!</li>
            <li> Score: {props.scores.userScore} | Top Score: {props.scores.totalScore}</li>
            </ul>
        </nav>
    );
}

export default Navbar;