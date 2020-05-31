import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import imagePhoto from '../../img/png-transparent-computer-icons-user-icon-design-help-portal-computer-orange-sphere.png'
import s from './info_logo.module.css'

const LogoProfile = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return(<img className={s.imaga} src={props.profile.photos.large || imagePhoto} alt=""/>
)};
    export default LogoProfile