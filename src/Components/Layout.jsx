import React from "react";
import {Link, Outlet} from "react-router-dom";
import Citebar from "./Citebar/Citebar";
import Header from "./Header/Header";


const Layout = (props) => {
    return(
        <div>
            <div className="container">
            <Header/>

            <Outlet />

            <Citebar/>
            </div>

        </div>
    );
}

export {Layout}