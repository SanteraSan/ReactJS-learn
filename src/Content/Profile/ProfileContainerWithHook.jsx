import React, {useEffect} from 'react';
import Profile from "./Profile";
import {getProfile, getProfileStatus} from "../../Redux/profile_selector";
import {getAuthUserId} from "../../Redux/auth_selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfileData, getStatus, savePhoto, updateStatus} from "../../Redux/profile_reducer";
import {withRouter} from "react-router-dom";
import s from './profile.module.css'

function ProfileContainerWithHook (props){

    console.log("render");

    let userServ = props.match.params.userId;
    let userAuth = props.authorizeUserId;


    // let func = () =>{
    //     setUserId(props.match.params.userId) || setUserId(props.authorizeUserId);
    //     props.getProfileData(userId);
    //     props.getStatus(userId)
    // };

    useEffect(() =>{

        let userId = userServ;
        if (!userId){
            userId = userAuth;
        }
        props.getProfileData(userId);
        props.getStatus(userId);
    },[props.match.params.userId, props.authorizeUserId]);

    // let userId = this.props.match.params.userId;
    // if (!userId) {
    //     userId = this.props.authorizeUserId;
    // }
    // this.props.getProfileData(userId);
    // this.props.getStatus(userId);


    return (
        <div className={s.profile}>
            <Profile {...props}
                     isOwner={!props.match.params.userId}
                     savePhoto={props.savePhoto}/>
        </div>
    );
}


let mapStateToProps = (state) => {
    // console.log("mSTP profile");
    return({
        profile: getProfile(state),
        status: getProfileStatus(state),
        authorizeUserId:getAuthUserId(state)
    })};


export default compose(
    connect(mapStateToProps, {getStatus, updateStatus,getProfileData, savePhoto}),
    withRouter,
    /*WithAuthRedirect*/
)(ProfileContainerWithHook)