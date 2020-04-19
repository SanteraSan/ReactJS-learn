import React from "react";
import Posts from "./posts/Posts";
import LogoInfo from "./LogoInfo/LogoInfo";
import style from "./profile.module.css"

const Profile = (props) =>
    <div className={style.prof}>
        <img className={style.image}
             src="https://addons.cdn.mozilla.net/user-media/version-previews/full/2382/2382637.png?modified=1557783348"
             alt=""/>
        <div className={style.LogoInfoPosts}>
            <LogoInfo/>
            <Posts state={props.state.posts} textAreaValue={props.state.textAreaValue} dispatch={props.dispatch}/>

        </div>
    </div>
;
export default Profile