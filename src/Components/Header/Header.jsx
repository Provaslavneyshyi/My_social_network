import React from "react";
import './Header.css';


const Header = () => {
    return(
        <div className="header">
            <div className="header__list">
                <div className="header__logo">
                    <img src="https://www.freepnglogos.com/uploads/fox-head-black-logo-png-22.png" alt=""/>
                </div>
                <div className="header__cite_name">SALLTOS</div>
                <div className="header__login"><a href="src/Components">Login</a></div>
            </div>
        </div>
    );
}

export default Header;