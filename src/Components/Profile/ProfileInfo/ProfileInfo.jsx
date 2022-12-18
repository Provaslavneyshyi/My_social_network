import React from "react";
import './ProfileInfo.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className="content__logo">SMASH LOGO</div>
            <div className="content__discription">
                <div className="content__user_avatar">
                    <img src="https://provaslavneyshyi.github.io/img/me.jpg" alt=""/>
                </div>
                <div className="content__user_discription">
                    <ul>
                        <li className="discription__item">Sergey Tytunin</li>
                        <li className="discription__item">Date of birth: 01.01.20</li>
                        <li className="discription__item">City: Bishkek</li>
                        <li className="discription__item">Education: none</li>
                        <li className="discription__item">Web Site: <a
                            href="src/Components">https://provaslavneyshyi.github.io/</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {ProfileInfo}