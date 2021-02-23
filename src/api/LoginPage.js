import styles from './LoginPage.module.css'
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, recuired} from "../utils/validators";


const maxLenght16 = maxLenghtCreator(16)

const LoginForm =(props) => {

    return (


        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input} validate={[recuired, maxLenght16]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={Input} validate={[recuired, maxLenght16]}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember
            </div>
            <div>
                <button> Login </button>
            </div>

        </form>


    )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
return (

    <div className={styles.loginf}>
    <h2>Login</h2>

    <LoginReduxForm onSubmit ={onSubmit} />


</div>
)
}


export default LoginPage;