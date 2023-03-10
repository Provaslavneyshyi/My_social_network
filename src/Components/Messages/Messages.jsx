import React from "react";
import P from './Messages.module.css';
import Users from "./Users/Users";
import Dialog from "./Dialog/Dialog";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/State";

const Messages = (props) => {



    let UsersDataElements = props.UserData.map(u => <Users name={u.name} id={u.id}/>);

    let UserMessageElements = props.Messages.map(m => <Dialog message={m.message}/>)
    let UserSecondMessageElements = props.Second.map(m => <Dialog message={m.message}/>)

    let newMessagesElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator())
        props.dispatch({type: 'UPDATE-MESSAGES-TEXT', newTextMessage: ''})
    }

    let onChangeMessagesText = () => {
        let text_m = newMessagesElement.current.value;
        let action = updateMessageActionCreator(text_m);
        props.dispatch(action);
    }

    debugger;
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

            <textarea onChange={onChangeMessagesText} ref={newMessagesElement}  placeholder={'Send message'} value={props.messagesText}/>
            <button type='button' onClick={addNewMessage}>Send</button>

        </div>
    </div>);
}

export default Messages;
