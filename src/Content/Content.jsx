import React from "react";
import style from "./Style.module.css"
import {Route} from "react-router-dom";
import News from "./News/News";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import Login from "./Login/login";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainerWithHook from "./Profile/ProfileContainerWithHook";
import EditProfileInfoForm from "./Profile/LogoInfo/EditProfileInfoForm";


const Content = () => {

        return (<div className={style.content}>
            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
            <Route path={"/profile/:userId?"} render={() => <ProfileContainerWithHook/>}/>
            <Route path={"/users"} render={() => <UsersContainer/>}/>
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <EditProfileInfoForm/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
        </div>)
    }

;

export default Content