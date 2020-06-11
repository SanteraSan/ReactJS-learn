import React from "react";
import {Contact} from "./info";
import s from "../../Common/FormsControls/formControl.module.css";
import {createFields, Input, TextArea} from "../../Common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";

const EditProfileInfoForm = ({handleSubmit, profile, goEditMode}) => {

    return (
        <div className={s.infoProfile}>
            {profile ? <form onSubmit={handleSubmit}>
                <button>Save</button>
                <button onClick={goEditMode}>close edit</button>
                <b>FullName</b> : {createFields('full name', 'fullName', [], Input)} <br/>
                <b>Looking for a job</b> : {profile.lookingForAJob ? "yes" : "no"}
                <Field name="lookingForAJob" component="input" type="checkbox"/><br/>
                <b>lookingForAJobDescription</b> :
                {createFields('lookingForAJobDescription',
                    'lookingForAJobDescription', [], TextArea)}
                <b>About me</b> : {createFields('About Me', 'aboutMe', [], Input)}
                <b>Contacts</b>: {Object.keys(profile.contacts).map(m => {
                return <Contact key={m} contactTitle={m} contactValue={profile.contacts[m]}/>
            })}
            </form> : null}
        </div>)
};

const ReduxFormProfileInfo = reduxForm({form: 'Edit-profile-info'})(EditProfileInfoForm);

export default ReduxFormProfileInfo