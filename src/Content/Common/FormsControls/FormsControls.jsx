import React from "react";
import s from "./formControl.module.css"

export const TextArea = ({input,meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? s.formControl + " " + s.error : undefined }>
            <textarea className={s.textAreaProfile}   {...input} {...props}/><br/>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
};

export const Input = ({input,meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? s.formControl + " " + s.error : undefined }>
            <input   {...input} {...props}/><br/>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
};