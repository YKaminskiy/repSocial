import styles from "./Dialogs.module.css"
import React from "react";
import DialogsUser from "./DialogUser/DialogsUser";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

    let DialogUser = props.usersDB.map(item =>
        <DialogsUser id = {item.id} name={item.name} />

    );

    let DialogMessages = props.messagesDB.map(item =>
        <Messages message = {item.message} />
);

    return (

        <div className={styles.dialogs}>

            <div className={styles.peoples}>

                {DialogUser}

            </div>

            <div className={styles.messages}>

                {DialogMessages}

            </div>
        </div>
)
}

export default Dialogs;
