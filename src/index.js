import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Store from "./Redux/State";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () =>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    UsersData={Store.getStatee().MessagesPage.UsersData}
                    Messages={Store.getStatee().MessagesPage.UserMessage}
                    messagesText={Store.getStatee().MessagesPage.newMessagesText}
                    Second={Store.getStatee().MessagesPage.SecondUserMessage}
                    Posts={Store.getStatee().profilePage.PostData}
                    postText={Store.getStatee().profilePage.newPostText}
                    friendData={Store.getStatee().FriendPage.FriendsList}
                    dispatch={Store.dispatch.bind(Store)}

                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(Store)
Store.subscribe(rerenderEntireTree);


reportWebVitals();
