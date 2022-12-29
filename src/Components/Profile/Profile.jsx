import React from "react";
import './Profile.css';
import MyPost from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPost Posts={props.Posts} AddPost={props.AddPost} postText={props.postText} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;