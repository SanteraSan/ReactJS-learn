import React, {useState} from "react";
import s from './info_logo.module.css'
import EditProfileInfoForm from "./EditProfileInfoForm";

const InfoProfile = (props) => {


    const [editMode,setEditMode] = useState(false);

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=>{
            setEditMode(false)
        });
    };

    return (
        <div>
            {editMode
                ? <EditProfileInfoForm initialValues={props.profile} goEditMode={()=>{setEditMode(false)}} profile={props.profile} onSubmit={onSubmit}/>
                : <ProfileData goEditMode={()=>{setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
        </div>
    )
};

const ProfileData = ({profile, isOwner, goEditMode}) => {
    return (
        <div className={s.infoProfile}>
            {isOwner ? <button onClick={goEditMode}>edit mode</button> : null}
            {profile ? <div>
                <b>FullName</b> : {profile.fullName} <br/>
                <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}<br/>
                <b>About me</b>: {profile.aboutMe}<br/>
                <b>Professional skills</b>: {profile.lookingForAJobDescription}<br/>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(m => {
                return <Contact key={m} contactTitle={m} contactValue={profile.contacts[m]}/>
            })}
            </div> : null}
        </div>)
};

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
};
export default InfoProfile