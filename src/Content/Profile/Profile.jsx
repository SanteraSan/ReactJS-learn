import React from "react";
import LogoInfo from "./LogoInfo/LogoInfo";
import style from "./profile.module.css"
import MyPostsContainer from "./posts/MyPostsContainer";

const Profile = (props) =>{

    return(<div className={style.prof}>

        <div className={style.LogoInfoPosts}>
            <LogoInfo saveProfile={props.saveProfile} profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    </div>)}
;
export default Profile