import React from "react";
import P from './MyPost.module.css';
import Post from "./Post/Post";



const MyPost = (props) => {

    let PostDataElements = props.Posts.map(p => <Post message={p.message} likesCount={'Like: ' + p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.AddPost()
        props.updateNewPostText('');
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={P.PostBlock}>
            <div className={P.PostContainer}>
                <div className={P.MyPost__name}>MY POST</div>
                <textarea onChange={onChangePost} ref={newPostElement} name="PostInput" id="" cols="30" rows="10" className={P.PostInput}
                          placeholder='New Post' value={ props.postText}/>
                <button onClick={addPost} className={P.PostSend}>Send</button>
                <div className={P.post__item}>
                    {PostDataElements}
                    <div className={P.voider}></div>
                </div>
            </div>
        </div>
    );
}

export default MyPost;