import React from "react";
import s from './info_logo.module.css'

const InfoProfile = (props) =>{
    // debugger
    return (
    <div className={s.infoProfile}>
        {props.profile ? <div>
        <b>FullName</b> : {props.profile.fullName} <br/>
        <b>Looking for a job</b> : {props.profile.lookingForAJob ? "no" : "yes"}<br/>
        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(m =>{
            return <Contact key={m} contactTitle={m} contactValue={props.profile.contacts[m]}/>
        })}
        </div> : null}
        <br/>
        Some info
    </div>)}
;

const Contact = ({contactTitle, contactValue}) =>{
    return <div className={s.contacts}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}
export default InfoProfile