import React from "react";
import P from './../Messages.module.css';

const Dialog = (props) => {
    return (
        <div className={P.dialog__item}>
            <img className={P.user__avatar} src="https://provaslavneyshyi.github.io/img/me.jpg" alt=""/>
            <div className={P.dialog}>{props.message}</div>
        </div>
    )
}

export default Dialog;