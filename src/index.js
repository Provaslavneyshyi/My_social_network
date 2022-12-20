import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import State from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App
                UsersData={State.MessagesPage.UsersData}
                Messages={State.MessagesPage.UserMessage}
                Second={State.MessagesPage.SecondUserMessage}
                Posts={State.profilePage.PostData}/>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
