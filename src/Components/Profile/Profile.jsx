import React from "react";
import './Profile.css';
import MyPost from "./MyPosts/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPost PostDataElements={props.PostDataElements}/>
        </div>
    );
}

export default Profile;