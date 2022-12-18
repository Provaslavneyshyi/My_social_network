import React from "react";
import './Citebar.css';
import {Link} from "react-router-dom";

const Citebar = () => {
    return (
        <div className="citebar">
            <div className="citebar__item"><Link to="/">Home</Link></div>
            <div className="citebar__item"><Link to="/Messages">Massages</Link></div>
            <div className="citebar__item"><Link to="/Friends">Friends</Link></div>
            <div className="citebar__item"><Link to="/News">News</Link></div>
            <div className="citebar__item"><Link to="/Music">Music</Link></div>
            <div className="citebar__item"><Link to="Settings">Settings</Link></div>
        </div>
    );
}

export default Citebar;