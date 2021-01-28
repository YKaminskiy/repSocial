import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


let DialogsUser = (props) => {

    let urlid = '/dialogs/' + props.id

    return (
        <div className={styles.people}>
            <NavLink to={urlid} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
};

export default DialogsUser;