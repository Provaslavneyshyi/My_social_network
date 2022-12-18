import React from "react";
import P from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div className={P.PostBlock}>
            <div className={P.PostContainer}>
                <div className={P.MyPost__name}>MY POST</div>
                <textarea name="PostInput" id="" cols="30" rows="10" className={P.PostInput}
                          placeholder='New Post'></textarea>
                <button className={P.PostSend}>Send</button>

                <div className={P.post__item}>
                    {props.PostDataElements}
                    <div className={P.voider}></div>
                </div>
            </div>
        </div>
    );
}

export default MyPost;