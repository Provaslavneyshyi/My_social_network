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
                    <Route index element={<Profile Posts={props.Posts} AddPost={props.AddPost} postText={props.postText} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='Messages/*' element={<Messages UserData={props.UsersData} Messages={props.Messages} Second={props.Second}/>}/>
                    <Route path='Friends/*' element={<Friends friendData={props.friendData} />}/>
                    <Route path='News' element={<News/>}/>
                    <Route path='Music' element={<Music/>}/>
                    <Route path='Settings' element={<Settings/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
