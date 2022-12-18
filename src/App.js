import React from "react";
import './App.css';
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import {Layout} from './Components/Layout';
import Friends from "./Components/Friends/Friends";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";



const App = (props) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Profile PostDataElements={props.PostDataElements}/>}/>
                    <Route path='Messages/*' element={<Messages UsersDataElements={props.UsersDataElements} UserMessageElements={props.UserMessageElements} />}/>
                    <Route path='Friends' element={<Friends/>}/>
                    <Route path='News' element={<News/>}/>
                    <Route path='Music' element={<Music/>}/>
                    <Route path='Settings' element={<Settings/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
