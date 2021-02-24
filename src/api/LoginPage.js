import styles from './LoginPage.module.css'
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, recuired} from "../utils/validators";
import {connect} from "react-redux";
import {login} from "../Redux/authReduxer";
import Redirect from "react-router-dom/es/Redirect";





const maxLenght25 = maxLenghtCreator(25)

const LoginForm =(props) => {

    return (


        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[recuired, maxLenght25]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={Input} validate={[recuired, maxLenght25]} type={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember
            </div>
            {props.error && <div className={styles.formAllerror}>  {props.error} </div> }
            <div>
                <button> Login </button>
            </div>

        </form>


    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth == true ) {
        return  <Redirect to={'/profile'} />
    }



return (

    <div className={styles.loginf}>
    <h2>Login</h2>

    <LoginReduxForm onSubmit ={onSubmit} />


</div>
)
}

const mapStateToProp = (state) => ({
         isAuth: state.auth.isAuth


})

export default connect (mapStateToProp, {login}) (LoginPage);