import React, {useState} from "react";
import Preloader from "../../Common/Preloader/Preloader";
import imagePhoto from '../../img/png-transparent-computer-icons-user-icon-design-help-portal-computer-orange-sphere.png'
import s from './info_logo.module.css'

const LogoProfile = (props) => {

    let [styles,setStyles] = useState({visibility:'hidden'});
    let visor = () =>{
        setStyles({visibility: 'visible'})
    };


    if (!props.profile){
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };
    return(<div>
        <img className={s.imaga} onClick={visor} src={props.profile.photos.large || imagePhoto} alt=""/><br/>
        {props.isOwner && <input style={styles} type={"file"} onChange={onMainPhotoSelected} />}
        </div>
)};
    export default LogoProfile