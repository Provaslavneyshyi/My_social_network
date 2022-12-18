import React from "react";
import P from './Post.module.css';

const Post = (props) => {
    return (
        <div className={P.postes}>
            <div className={P.post}>
                <div className={P.userAvatar}>
                    <img src="https://provaslavneyshyi.github.io/img/me.jpg" alt=""/>
                    <div className={P.postList}>
                        <div className={P.userName}>
                            <a href="">Sergey Tytunin</a>
                            <div className={P.postTime}>Data time: 13.12.22 / 17:23</div>
                        </div>
                    </div>
                </div>
                <div className={P.post__massage}>
                    {props.message}
                </div>
                <div className={P.likesCount}>
                    {props.likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;