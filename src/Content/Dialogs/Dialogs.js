import styles from "./Dialogs.module.css"
import React from "react";
import DialogsUser from "./DialogUser/DialogsUser";
import Messages from "./Messages/Messages";




const Dialogs = (props) => {
    let DialogUser = props.dialogs.usersDB.map(item =>
        <DialogsUser id = {item.id} key ={item.id} name={item.name} />
    );

    let DialogMessages = props.dialogs.messagesDB.map(item =>
        <Messages message = {item.message} />
);

     let addMessage = () => {
        props.addMessage();
    }

    let newMessage = (event) => {
       let  messageText = event.target.value;
       props.newMessage (messageText);

    }

    return (

        <div className={styles.dialogs}>

            <div className={styles.peoples}>

                {DialogUser}

            </div>

            <div className={styles.messages}>

                {DialogMessages}
                <div><textarea placeholder={"Message"} onChange={newMessage} value={props.dialogs.newMessageText}/></div>
                <div><button onClick={addMessage}>Add</button></div>

            </div>
        </div>
)
}

export default Dialogs;
