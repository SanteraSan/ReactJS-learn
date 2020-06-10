import React from "react";
import InfoProfile from "./info";
import LogoProfile from "./logo";
import s from "./info_logo.module.css"
import ProfileStatusContainer from "./ProfileStatusContainer";

const LogoInfo = (props) => {
    // debugger;

    return (
        <div className={"info_logo"}>
            {props.profile &&
            <h2 className={s.profileName}>{props.profile.fullName}</h2>}
            <div className={s.logoInfoContainer}>
            <LogoProfile savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}/>
            <InfoProfile profile={props.profile} isOwner={props.isOwner} saveProfile={props.saveProfile}/>
            </div>
            <ProfileStatusContainer/>
        </div>);
};

export default LogoInfo