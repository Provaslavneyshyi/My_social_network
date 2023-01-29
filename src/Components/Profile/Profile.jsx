import React from "react";
import './Profile.css';
import MyPost from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPost Posts={props.Posts} dispatch={props.dispatch} postText={props.postText}/>
        </div>
    );
}

export default Profile;