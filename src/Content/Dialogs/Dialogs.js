import styles from "./Dialogs.module.css"
import React from "react";
import DialogsUser from "./DialogUser/DialogsUser";
import Messages from "./Messages/Messages";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLenghtCreator, recuired} from "../../utils/validators";

const Dialogs = (props) => {
    let DialogUser = props.dialogsPage.usersDB.map(item =>
        <DialogsUser id = {item.id} key ={item.id} name={item.name} />
    );

    let DialogMessages = props.dialogsPage.messagesDB.map(item =>
        <Messages message = {item.message} />
);

    const addNewMessage = (values) => {
        props.addMessage(values.dialogsFormMessageText)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>


                         return(

        <div className={styles.dialogs}>

            <div className={styles.peoples}>

                {DialogUser}

            </div>

            <div className={styles.messages}>

                {DialogMessages}
<div> <AddMessageFormRedux onSubmit = {addNewMessage} /> </div>

            </div>
        </div>
)
}

const maxLenght70 = maxLenghtCreator(70)

export const AddMessagesForm = (props) => {
    return (
<form onSubmit={props.handleSubmit}>
    <div><Field component={Textarea} name='dialogsFormMessageText' placeholder='Message' validate={[recuired, maxLenght70]} />
        </div>
    <div><button>Add</button></div>
</form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessagesForm'})(AddMessagesForm)


export default Dialogs;
