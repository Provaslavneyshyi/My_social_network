import React from "react";
import s from './Friends.module.css';
import Friend from "./FriendsProfile/Friend";



const Friends = (props) => {

    let FriendsData = props.friendData.map( f => <Friend name={f.name} family__name={f.family_name} id={f.id}/> )

    return (
        <div className={s.friends}>
            <div className={s.friends__list}>
                {FriendsData}
            </div>
            <div className={s.other__friends}></div>
        </div>
    );
}

export default Friends;
