import React from "react";
import s from './Friends.module.css';
import Friend from "./FriendsProfile/Friend";


const Friends = (props) => {

    let FriendsData = props.friendData.map(f => <Friend name={f.name} family__name={f.family_name} id={f.id}/>)

    return (
        <div className={s.friends}>
            <div className={s.friends__list}>
                <span>Friend List</span>
                {FriendsData}
            </div>
            <div className={s.other__friends}>
                <span>Maybe you know?</span>
                    
                    <div className={s.other__friends_mb}>
                        <img className='user__avatar' src="https://provaslavneyshyi.github.io/img/me.jpg" alt=""/>
                        <span>Sergey Tutynin</span>
                    </div>
                    
                <button>Show more</button>
            </div>

        </div>
    );
}

export default Friends;
