import React from "react";
import P from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";


const MyPost = (props) => {

    let PostDataElements = props.Posts.map(p => <Post message={p.message} likesCount={'Like: ' + p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: ''})
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={P.PostBlock}>
            <div className={P.PostContainer}>
                <div className={P.MyPost__name}>MY POST</div>

                <textarea onChange={onChangePost} ref={newPostElement} name="PostInput" id="" cols="30" rows="10"
                          className={P.PostInput}
                          placeholder='New Post' value={props.postText}/>

                <button key={"buttonPost"} onClick={addPost} className={P.PostSend}>Send</button>

                <div className={P.post__item}>
                    {PostDataElements}
                    <div className={P.voider}></div>
                </div>
            </div>
        </div>
    );
}

export default MyPost;