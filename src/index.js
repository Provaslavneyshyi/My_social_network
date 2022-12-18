import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Users from "./Components/Messages/Users/Users";
import Dialog from "./Components/Messages/Dialog/Dialog";
import Post from "./Components/Profile/MyPosts/Post/Post";

let UsersData = [
    {id: 'Serega', name: 'Serega Sergeevich'},
    {id: 'Vasena', name: 'Vasena Nyashka'},
    {id: 'Juzo', name: 'Juzo Hamster'},
    {id: 'Fat', name: 'Fat Afanasiy'},
    {id: 'Adi', name: 'Adi Lbek'},
    {id: 'Adi', name: 'Adi Lbek'}
]
let UsersDataElements = UsersData.map(u => <Users name={u.name} id={u.id}/>);

let UserMessage = [
    {message: 'Hello World!'},
    {message: 'How are you?'},
    {message: 'Let"s start!'},
    {message: 'To begin develop'},
    {message: 'We are make a message!!!'}
]
let UserMessageElements = UserMessage.map(m => <Dialog message={m.message}/>)


let PostData = [
    {likesCount: 5, message: 'Hello World!'},
    {likesCount: 8, message: 'Programming it\'s all world'},
    {likesCount: 1, message: 'World! World! World!'}
]

let PostDataElements = PostData.map(p => <Post message={p.message} likesCount={'Like: ' + p.likesCount}/>)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                UsersDataElements={UsersDataElements}
                UserMessageElements={UserMessageElements}
                PostDataElements={PostDataElements}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
