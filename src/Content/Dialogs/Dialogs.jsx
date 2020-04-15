import React from "react";
import s from "./Dialog.module.css"
import Dialogs_items from "./Dialog_Items/dialog_items";
import Messages from "./messages/messages";


const Dialogs = (props) =>
    <div className={s.dialogs}>
        <Dialogs_items state={props.state.dialogs}/>
        <Messages state={props.state.messages}/>
    </div>;

export default Dialogs