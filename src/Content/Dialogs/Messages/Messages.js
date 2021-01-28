import styles from "../Dialogs.module.css";
import React from "react";

let Messages = (props) => {
    return(
        <div className={styles.message}> {props.message} </div>
    )
};


export default Messages;