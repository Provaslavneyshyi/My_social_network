import React from "react";
import P from './Messages.module.css';
import {NavLink} from "react-router-dom";
import Users from "./Users/Users";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {

    return (
        <div className={P.messagesBlock}>
            <div className={P.users}>
                {props.UsersDataElements}
            </div>
            <div className={P.dialogs}>
                {props.UserMessageElements}
            </div>
            <div className={P.sendMessage}>
                <input type="text" placeholder={'Send message'}/>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Messages;
