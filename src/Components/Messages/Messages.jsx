import React from "react";
import P from './Messages.module.css';
import Users from "./Users/Users";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {


    let UsersDataElements = props.UserData.map(u => <Users name={u.name} id={u.id}/>);
    let UserMessageElements = props.Messages.map(m => <Dialog message={m.message}/>)
    let UserSecondMessageElements = props.Second.map(m => <Dialog message={m.message}/>)

    let newPostElement = React.createRef();

    let addPost = (props) => {
        let text = newPostElement.current.value;
        alert(text);
    }



    return (<div className={P.messagesBlock}>
        <div className={P.users}>
            {UsersDataElements}
        </div>
        <div className={P.dialog__block}>
            <div className={P.dialogs}>
                {UserMessageElements}
            </div>
            <div className={`${P.dialogs} ${P.dialogs2}`}>
                {UserSecondMessageElements}
            </div>
        </div>
        <div className={P.sendMessage}>
            <textarea ref={newPostElement} type="text" placeholder={'Send message'}/>
            <button type='button' on onClick={addPost}>Send</button>
        </div>
    </div>);
}

export default Messages;
