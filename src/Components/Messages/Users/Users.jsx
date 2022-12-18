import React from "react";
import P from './../Messages.module.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let Path = "/Messages/" + props.id;

    return (
        <div className={P.user__name}>
            <img className={P.user__avatar} src="https://provaslavneyshyi.github.io/img/me.jpg" alt=""/>
            <NavLink to={Path}>{props.name}</NavLink>
        </div>
    )
}


export default Users;