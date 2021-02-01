import styles from "./Dialogs.module.css"
import React from "react";
import DialogsUser from "./DialogUser/DialogsUser";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

    let DialogUser = props.dialogs.usersDB.map(item =>
        <DialogsUser id = {item.id} name={item.name} />
    );

    let DialogMessages = props.dialogs.messagesDB.map(item =>
        <Messages message = {item.message} />
);

    let text = React.createRef();
    let newMessage = () => {
       let  messageText = text.current.value;
       props.changeMessage(messageText);

    }

    return (

        <div className={styles.dialogs}>

            <div className={styles.peoples}>

                {DialogUser}

            </div>

            <div className={styles.messages}>

                {DialogMessages}
                <div><textarea onChange={newMessage} ref={text} value={props.newMessageText}/></div>
                <div><button onClick={props.addMessage}>Add</button></div>

            </div>
        </div>
)
}

export default Dialogs;
