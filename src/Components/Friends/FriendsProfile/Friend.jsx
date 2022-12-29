import React from "react";
import './Friend.css'
import {Link} from "react-router-dom";

const Friend = (props) => {

    return(
        <div>
            <Link to="/" className="friend__link">
                <div className="friend">
                    <div className="friend__avatar">
                        <img className='user__avatar' src="https://provaslavneyshyi.github.io/img/me.jpg" alt=""/>
                    </div>
                    <div className="friend__name"> {props.name} {props.family__name} </div>
                </div>
            </Link>
        </div>

    )
}

export default Friend;