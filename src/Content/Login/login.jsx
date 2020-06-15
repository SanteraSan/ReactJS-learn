import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../Utils/Validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth_reducer";
import {Redirect} from "react-router-dom";
import s from "./../Common/FormsControls/formControl.module.css"

let LoginForm = ({handleSubmit,error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><Field validate={[required]} name="email" component={Input} placeholder={"Email"}/></div>
            <div><Field validate={[required]} name="password" component={Input} placeholder={"Password"} type={"password"}/></div>
            <div><Field name="rememberMe" component="input" type={"checkbox"}/>remember me</div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Submit</button>
            </div>
        </form>)
};

LoginForm = reduxForm({
    form: 'loginPage'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe )
    };
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,{login})(Login);